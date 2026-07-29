import { Request, Response } from 'express';
import { Reservation } from '../models/Reservation';
import { Settings } from '../models/Settings';
import { Op } from 'sequelize';

export const createReservation = async (req: Request, res: Response) => {
  try {
    const settings = await Settings.findOne();
    const count = await Reservation.count({
      where: {
        date: req.body.date,
        status: { [Op.ne]: 'cancelled' }
      }
    });
    
    if (settings && count >= settings.maxTableReservationsPerDay) {
      return res.status(400).json({ success: false, error: 'Reservations Full for this date' });
    }

    const reservation = await Reservation.create(req.body);
    res.status(201).json({ success: true, data: reservation });
  } catch (error: any) {
    res.status(400).json({ success: false, error: error.message });
  }
};

export const getReservations = async (req: Request, res: Response) => {
  try {
    const reservations = await Reservation.findAll({ order: [['createdAt', 'DESC']] });
    res.json({ success: true, data: reservations });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const updateReservationStatus = async (req: Request, res: Response) => {
  try {
    const { status } = req.body;
    await Reservation.update({ status }, { where: { id: req.params.id } });
    res.json({ success: true });
  } catch (error: any) {
    res.status(400).json({ success: false, error: error.message });
  }
};

export const deleteReservation = async (req: Request, res: Response) => {
  try {
    const reservation = await Reservation.findByPk(Number(req.params.id));
    if (!reservation) return res.status(404).json({ success: false, message: 'Not found' });
    await reservation.destroy();
    res.json({ success: true, message: 'Deleted' });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};
