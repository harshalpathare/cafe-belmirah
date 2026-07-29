import { useState, useEffect } from 'react';
import { fetchInquiries, updateInquiryStatus, deleteInquiry } from '../../lib/api';
import toast from 'react-hot-toast';
import { format } from 'date-fns';

export default function AdminInquiriesTab() {
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedInquiry, setSelectedInquiry] = useState<any>(null);

  useEffect(() => {
    loadInquiries();
  }, []);

  const loadInquiries = async () => {
    try {
      const data = await fetchInquiries();
      setInquiries(data);
    } catch (error) {
      toast.error('Failed to load inquiries');
    } finally {
      setIsLoading(false);
    }
  };

  const handleStatusUpdate = async (id: number, status: string) => {
    try {
      await updateInquiryStatus(id, status);
      setInquiries(inquiries.map(i => i.id === id ? { ...i, status } : i));
      if (selectedInquiry?.id === id) {
        setSelectedInquiry({ ...selectedInquiry, status });
      }
    } catch (error) {
      toast.error('Failed to update status');
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this message?')) return;
    try {
      await deleteInquiry(id);
      setInquiries(inquiries.filter(i => i.id !== id));
      if (selectedInquiry?.id === id) setSelectedInquiry(null);
      toast.success('Message deleted');
    } catch (error) {
      toast.error('Failed to delete message');
    }
  };

  const handleSelectInquiry = (inquiry: any) => {
    setSelectedInquiry(inquiry);
    if (inquiry.status === 'unread') {
      handleStatusUpdate(inquiry.id, 'read');
    }
  };

  if (isLoading) return <div className="p-8 text-center text-cream/60">Loading messages...</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Inbox List */}
      <div className="md:col-span-1 space-y-4 max-h-[600px] overflow-y-auto pr-2">
        <h2 className="font-display text-2xl text-gold mb-4">Inbox</h2>
        {inquiries.length === 0 ? (
          <p className="text-cream/50 text-sm">No messages yet.</p>
        ) : (
          inquiries.map((inquiry) => (
            <div 
              key={inquiry.id} 
              onClick={() => handleSelectInquiry(inquiry)}
              className={`p-4 rounded cursor-pointer transition-all border ${selectedInquiry?.id === inquiry.id ? 'bg-black/10 border-gold/50' : 'bg-transparent hover:bg-black/5 border-black/5'}`}
            >
              <div className="flex justify-between items-start mb-1">
                <span className={`font-semibold ${inquiry.status === 'unread' ? 'text-gold' : 'text-cream/70'}`}>
                  {inquiry.name}
                </span>
                <span className="text-xs text-cream/40">{format(new Date(inquiry.createdAt), 'MMM d, h:mm a')}</span>
              </div>
              <div className="text-sm text-cream/80 truncate mb-1">{inquiry.subject || 'No Subject'}</div>
              <div className="text-xs text-cream/50 truncate">{inquiry.message}</div>
            </div>
          ))
        )}
      </div>

      {/* Message View */}
      <div className="md:col-span-2">
        {selectedInquiry ? (
          <div className="bg-black/5 rounded p-8 border border-black/10 relative">
            <button 
              onClick={() => handleDelete(selectedInquiry.id)}
              className="absolute top-6 right-6 text-cream/30 hover:text-red-500 transition-colors"
              title="Delete Message"
            >
              🗑️
            </button>
            <h3 className="font-display text-3xl text-gold mb-2">{selectedInquiry.subject || 'No Subject'}</h3>
            <div className="flex flex-col mb-6 pb-6 border-b border-black/5">
              <span className="text-lg font-semibold">{selectedInquiry.name}</span>
              <a href={`mailto:${selectedInquiry.email}`} className="text-sm text-cream/60 hover:text-gold">{selectedInquiry.email}</a>
              <span className="text-xs text-cream/40 mt-1">{format(new Date(selectedInquiry.createdAt), 'MMMM d, yyyy h:mm a')}</span>
            </div>
            <div className="text-cream/90 whitespace-pre-wrap leading-relaxed">
              {selectedInquiry.message}
            </div>
            
            <div className="mt-12 pt-6 border-t border-black/5 flex gap-4">
              <a 
                href={`mailto:${selectedInquiry.email}?subject=Re: ${selectedInquiry.subject || 'Your Inquiry to Cafe Belmirah'}`}
                className="btn-gold py-2 px-6 text-sm"
              >
                REPLY VIA EMAIL
              </a>
              {selectedInquiry.status === 'read' && (
                <button 
                  onClick={() => handleStatusUpdate(selectedInquiry.id, 'unread')}
                  className="btn-outline-gold py-2 px-6 text-sm"
                >
                  MARK AS UNREAD
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="bg-black/5 rounded h-full min-h-[400px] flex items-center justify-center border border-black/10">
            <div className="text-center text-cream/40">
              <div className="text-4xl mb-4">✉️</div>
              <p>Select a message to read</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
