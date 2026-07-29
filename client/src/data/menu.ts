import type { MenuItem } from '../types';

export const menuItems: MenuItem[] = [
  // BREAKFAST
  { id: 'b1', name: 'Eggs Benedict Royale', description: 'Poached eggs on toasted brioche with Canadian bacon, hollandaise, and truffle shavings.', price: 480, category: 'breakfast', isVeg: false, isBestseller: true, image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=600&q=80' },
  { id: 'b2', name: 'Avocado Toast Belmirah', description: 'Sourdough with smashed avocado, cherry tomatoes, feta, microgreens, and chili flakes.', price: 380, category: 'breakfast', isVeg: true, isBestseller: true, image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c820?w=600&q=80' },
  { id: 'b3', name: 'Forest Berry Pancakes', description: 'Fluffy buttermilk pancakes with seasonal forest berries, maple syrup, and whipped cream.', price: 320, category: 'breakfast', isVeg: true, image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=600&q=80' },
  { id: 'b4', name: 'Full English Breakfast', description: 'Sunny-side eggs, bacon, sausage, grilled tomato, mushrooms, baked beans, and toast.', price: 520, category: 'breakfast', isVeg: false, image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600&q=80' },

  // APPETIZERS
  { id: 'a1', name: 'Truffle Mushroom Bruschetta', description: 'Toasted sourdough topped with wild mushrooms sautéed in truffle oil and fresh herbs.', price: 340, category: 'appetizers', isVeg: true, isBestseller: true, image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=600&q=80' },
  { id: 'a2', name: 'Prawn Cocktail', description: 'Chilled tiger prawns with Marie Rose sauce, cucumber, and iceberg lettuce.', price: 480, category: 'appetizers', isVeg: false, image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80' },
  { id: 'a3', name: 'Cheese & Charcuterie Board', description: 'Selection of artisan cheeses, cured meats, pickles, nuts, and house crackers.', price: 680, category: 'appetizers', isVeg: false, isBestseller: true, image: 'https://images.unsplash.com/photo-1568051243851-f9b136146e97?w=600&q=80' },

  // PIZZA
  { id: 'p1', name: 'Truffle Margherita', description: 'Classic Margherita elevated with black truffle oil, fresh basil, and buffalo mozzarella.', price: 580, category: 'pizza', isVeg: true, isBestseller: true, image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80' },
  { id: 'p2', name: 'BBQ Chicken Supreme', description: 'Smoky BBQ chicken, caramelized onions, bell peppers, and smoked cheddar.', price: 650, category: 'pizza', isVeg: false, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80' },
  { id: 'p3', name: 'Wild Mushroom & Brie', description: 'Assorted wild mushrooms, brie, rosemary, caramelized onions on a white sauce base.', price: 620, category: 'pizza', isVeg: true, image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80' },

  // PASTA
  { id: 'pa1', name: 'Lobster Linguine', description: 'Fresh linguine tossed with sautéed lobster, cherry tomatoes, white wine, and herbs.', price: 780, category: 'pasta', isVeg: false, isBestseller: true, image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=600&q=80' },
  { id: 'pa2', name: 'Porcini Mushroom Risotto', description: 'Creamy arborio rice with dried porcini, parmesan, truffle oil, and fresh parsley.', price: 580, category: 'pasta', isVeg: true, image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&q=80' },
  { id: 'pa3', name: 'Penne Arrabbiata', description: 'Penne in a fiery tomato sauce with garlic, chili flakes, and fresh basil.', price: 420, category: 'pasta', isVeg: true, image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=80' },

  // BURGERS
  { id: 'bu1', name: 'Wagyu Beef Burger', description: 'Premium wagyu patty, aged cheddar, caramelized onions, truffle aioli, brioche bun.', price: 780, category: 'burgers', isVeg: false, isBestseller: true, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80' },
  { id: 'bu2', name: 'Forest Mushroom Burger', description: 'Portobello mushroom cap, brie, rocket, sundried tomato pesto, toasted ciabatta.', price: 520, category: 'burgers', isVeg: true, image: 'https://images.unsplash.com/photo-1550317138-10000687a72b?w=600&q=80' },

  // SANDWICHES
  { id: 's1', name: 'Club Belmirah', description: 'Triple-decker with grilled chicken, bacon, fried egg, lettuce, tomato, and aioli.', price: 460, category: 'sandwiches', isVeg: false, isBestseller: true, image: 'https://images.unsplash.com/photo-1553909489-cd47e0907980?w=600&q=80' },
  { id: 's2', name: 'Caprese Panini', description: 'Grilled ciabatta with fresh mozzarella, tomato, basil, and aged balsamic.', price: 360, category: 'sandwiches', isVeg: true, image: 'https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?w=600&q=80' },

  // SALADS
  { id: 'sa1', name: 'Caesar Salad', description: 'Crisp romaine, house Caesar dressing, parmesan crisps, anchovy, croutons.', price: 380, category: 'salads', isVeg: false, image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=600&q=80' },
  { id: 'sa2', name: 'Mediterranean Quinoa Bowl', description: 'Quinoa, cucumber, olives, feta, sun-dried tomatoes, lemon herb dressing.', price: 420, category: 'salads', isVeg: true, isBestseller: true, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80' },

  // SOUPS
  { id: 'so1', name: 'French Onion Soup', description: 'Slow-cooked caramelized onion broth with a gruyère crouton crust.', price: 320, category: 'soups', isVeg: true, isBestseller: true, image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80' },
  { id: 'so2', name: 'Cream of Mushroom', description: 'Velvety wild mushroom cream soup with truffle oil and sourdough crisp.', price: 280, category: 'soups', isVeg: true, image: 'https://images.unsplash.com/photo-1511690078903-71dc5a49f5e3?w=600&q=80' },

  // DESSERTS
  { id: 'd1', name: 'Chocolate Fondant', description: 'Warm Belgian chocolate lava cake with vanilla bean ice cream and gold dust.', price: 380, category: 'desserts', isVeg: true, isBestseller: true, image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80' },
  { id: 'd2', name: 'Crème Brûlée', description: 'Classic vanilla custard with caramelized sugar crust and fresh berries.', price: 320, category: 'desserts', isVeg: true, image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80' },
  { id: 'd3', name: 'Tiramisu Belmirah', description: 'Our signature tiramisu with Kahlúa-soaked ladyfingers, mascarpone, and cocoa.', price: 360, category: 'desserts', isVeg: true, isBestseller: true, image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80' },

  // COFFEE
  { id: 'c1', name: 'Belmirah Signature Latte', description: 'Double espresso with steamed oat milk, lavender syrup, and gold shimmer.', price: 280, category: 'coffee', isVeg: true, isBestseller: true, image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80' },
  { id: 'c2', name: 'Flat White', description: 'Intense double ristretto espresso with silky microfoam milk.', price: 220, category: 'coffee', isVeg: true, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80' },
  { id: 'c3', name: 'Cold Brew Tonic', description: 'Slow-steeped cold brew over tonic water with orange zest and mint.', price: 260, category: 'coffee', isVeg: true, image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80' },
  { id: 'c4', name: 'Dalgona Coffee', description: 'Whipped coffee cloud over chilled milk with caramel drizzle.', price: 240, category: 'coffee', isVeg: true, isBestseller: true, image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=600&q=80' },

  // TEA
  { id: 't1', name: 'Himalayan Mountain Tea', description: 'Single-origin first flush Darjeeling steeped to perfection with honey.', price: 180, category: 'tea', isVeg: true, isBestseller: true, image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80' },
  { id: 't2', name: 'Rose Chamomile Blend', description: 'Soothing chamomile with dried rose petals, lavender, and honey.', price: 200, category: 'tea', isVeg: true, image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&q=80' },

  // MOCKTAILS
  { id: 'm1', name: 'Belmirah Sunrise', description: 'Passion fruit, orange, grenadine, sparkling water, and basil seeds.', price: 280, category: 'mocktails', isVeg: true, isBestseller: true, image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=600&q=80' },
  { id: 'm2', name: 'Forest Fizz', description: 'Cucumber, mint, elderflower, lime, and sparkling water.', price: 260, category: 'mocktails', isVeg: true, image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&q=80' },
  { id: 'm3', name: 'Crimson Cloud', description: 'Hibiscus, rose water, cranberry, lychee, and coconut foam.', price: 300, category: 'mocktails', isVeg: true, image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&q=80' },

  // FRESH JUICES
  { id: 'j1', name: 'Mountain Green Detox', description: 'Spinach, apple, cucumber, ginger, lemon, and mint.', price: 220, category: 'fresh-juices', isVeg: true, isBestseller: true, image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=600&q=80' },
  { id: 'j2', name: 'Tropical Paradise', description: 'Mango, pineapple, passion fruit, and coconut water.', price: 200, category: 'fresh-juices', isVeg: true, image: 'https://images.unsplash.com/photo-1622597467836-f3e6261bd2b8?w=600&q=80' },
];

export const menuCategories = [
  { id: 'all', label: 'All Items' },
  { id: 'breakfast', label: 'Breakfast' },
  { id: 'appetizers', label: 'Appetizers' },
  { id: 'pizza', label: 'Pizza' },
  { id: 'pasta', label: 'Pasta' },
  { id: 'burgers', label: 'Burgers' },
  { id: 'sandwiches', label: 'Sandwiches' },
  { id: 'salads', label: 'Salads' },
  { id: 'soups', label: 'Soups' },
  { id: 'desserts', label: 'Desserts' },
  { id: 'coffee', label: 'Coffee' },
  { id: 'tea', label: 'Tea' },
  { id: 'mocktails', label: 'Mocktails' },
  { id: 'fresh-juices', label: 'Fresh Juices' },
];
