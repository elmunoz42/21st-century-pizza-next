export const PRODUCTS = [
  {
    image: "/products/appetizer/ChickenNuggets.jpg",
    title: "Chicken Nuggets",
    description: "Homemade Chicken nuggets from our own farm raised chicken. Choose a sauce you would like them tossed in or just take them plain! Also includes one dipping sauce.",
    excerpt: "Includes one dipping sauce.",
    category: "appetizer",
    price: 10.00,
    featured: true
  },
  {
    image: "/products/appetizer/GarlicCheesyBread.jpg",
    title: "Garlic Cheesy Bread",
    description: "A flavorful combination of garlic spread and melted cheese on a crispy bread base.",
    excerpt: "Garlic cheese bread.",
    category: "appetizer",
    price: 6.50,
    featured: true
  },
  {
    image: "/products/appetizer/DoughBites.jpg",
    title: "Dough Bites",
    description: "Bite-sized pieces of dough baked to perfection and served with a choice of dipping sauces.",
    excerpt: "10 bites, 1 sauce.",
    category: "appetizer",
    price: 5.00,
    featured: true
  },
  {
    image: "/products/salad/CaesarSalad.jpg",
    title: "Caesar Salad",
    description: "Crisp romaine lettuce tossed in Caesar dressing topped with croutons and parmesan cheese.",
    excerpt: "Romaine lettuce and homemade croutons dressed with Parmesan cheese, olive oil, and black pepper. Served with a lemon wedge and a side of Caesar dressing.",
    category: "salad",
    prices: {
      small: 6.00,
      large: 9.00
    },
    featured: false
  },
  {
    image: "/products/salad/HouseSalad.jpg",
    title: "House Salad",
    description: "Fresh garden salad with crisp vegetables and homemade croutons.",
    excerpt: "Iceberg lettuce with mushroom, red onion, green bell pepper, tomato, and homemade croutons.",
    category: "salad",
    prices: {
      small: 6.00,
      large: 9.00
    },
    featured: false
  },
  {
    image: "/products/salad/ItalianSalad.jpg",
    title: "Italian Salad",
    description: "Traditional Italian salad with premium toppings and house cheese blend.",
    excerpt: "Romaine iceberg mix with salami, black olive, red bell pepper, pepperoncini, and house cheese blend.",
    category: "salad",
    prices: {
      small: 6.00,
      large: 9.00
    },
    featured: true
  },
  {
    image: "/products/salad/GreekSalad.jpg",
    title: "Mediterranean Salad",
    description: "Mediterranean-style salad with fresh vegetables and feta cheese.",
    excerpt: "Spinach romaine mix with artichoke, black olive, red onion, feta, and tomato.",
    category: "salad",
    prices: {
      small: 6.00,
      large: 9.00
    },
    featured: true
  },
  {
    image: "/products/pizza/21CenturyCombo.jpg",
    title: "21st Century Combo",
    description: "Delicious pie with sausage, pepperoni, salami, black olives, green bell peppers and white onions.",
    excerpt: "Salami, pepperoni, mushroom, onion, green bell peppers, black olives, and Italian sausage.",
    category: "pizza",
    prices: {
      small: 18.00,
      medium: 24.00,
      large: 28.00,
      glutenFree: 20.00
    },
    sizes: {
      small: "10\"",
      medium: "14\"",
      large: "18\"",
      glutenFree: "10\""
    },
    featured: true
  },
  {
    image: "/products/pizza/21CenturyMargherita.jpg",
    title: "21st Century Margherita",
    description: "Classic Italian pizza topped with fresh tomatoes, basil leaves, and garlic-infused drizzle.",
    excerpt: "Basil, fresh tomato, garlic-infused drizzle, and house blend cheese.",
    category: "pizza",
    prices: {
      small: 15.00,
      medium: 21.00,
      large: 25.00,
      glutenFree: 16.00
    },
    sizes: {
      small: "10\"",
      medium: "14\"",
      large: "18\"",
      glutenFree: "10\""
    },
    featured: true
  },
  {
    image: "/products/pizza/21CenturyVeggie.jpg",
    title: "21st Century Veggie",
    description: "A vegetarian delight loaded with spinach, artichoke, sun-dried tomatoes, black olives, red bell peppers, and feta cheese.",
    excerpt: "Spinach, artichoke, red bell pepper, sun-dried tomato, black olive, and feta.",
    category: "pizza",
    prices: {
      small: 17.00,
      medium: 23.00,
      large: 27.00,
      glutenFree: 19.00
    },
    sizes: {
      small: "10\"",
      medium: "14\"",
      large: "18\"",
      glutenFree: "10\""
    },
    featured: true
  },
  {
    image: "/products/pizza/AllMeat.jpg",
    title: "All Meat",
    description: "A meat lover's dream – pepperoni, ground beef, salami, and ham make this pizza a deliciously meaty treat.",
    excerpt: "Ground beef, pepperoni, salami, and ham.",
    category: "pizza",
    prices: {
      small: 16.00,
      medium: 21.00,
      large: 26.00,
      glutenFree: 18.00
    },
    sizes: {
      small: "10\"",
      medium: "14\"",
      large: "18\"",
      glutenFree: "10\""
    },
    featured: true
  },
  {
    image: "/products/pizza/BBQChicken.jpg",
    title: "BBQ Chicken",
    description: "Farm-fresh chicken bites with white onions, green bell peppers, and pineapple with a rich BBQ sauce.",
    excerpt: "BBQ chicken, white onions, green bell peppers, pineapple, on BBQ base.",
    category: "pizza",
    prices: {
      small: 15.00,
      medium: 21.00,
      large: 26.00,
      glutenFree: 18.00
    },
    sizes: {
      small: "10\"",
      medium: "14\"",
      large: "18\"",
      glutenFree: "10\""
    },
    featured: true
  },
  {
    image: "/products/pizza/ChickenBaconWhite.jpg",
    title: "Chicken Bacon White",
    description: "A creamy white sauce base topped with tender chicken strips, crispy bacon, and a blend of cheeses.",
    excerpt: "White sauce base with grilled chicken, crispy bacon, and our house cheese blend.",
    category: "pizza",
    prices: {
      small: 15.00,
      medium: 21.00,
      large: 26.00,
      glutenFree: 17.00
    },
    sizes: {
      small: "10\"",
      medium: "14\"",
      large: "18\"",
      glutenFree: "10\""
    },
    featured: true
  },
  {
    image: "/products/pizza/Ham&Pineapple.jpg",
    title: "Ham & Pineapple",
    description: "A sweet and savory pizza with juicy pineapple chunks and sliced ham on a classic tomato base.",
    excerpt: "The classic Hawaiian.",
    category: "pizza",
    prices: {
      small: 15.00,
      medium: 20.00,
      large: 24.00,
      glutenFree: 17.00
    },
    sizes: {
      small: "10\"",
      medium: "14\"",
      large: "18\"",
      glutenFree: "10\""
    },
    featured: true
  },
  {
    image: "/products/pizza/StandardVeggie.jpg",
    title: "Standard Veggie",
    description: "White onion, mushroom, black olive, and fresh tomato",
    excerpt: "White onion, mushroom, black olive, and fresh tomato.",
    category: "pizza",
    prices: {
      small: 16.00,
      medium: 22.00,
      large: 26.00,
      glutenFree: 18.00
    },
    sizes: {
      small: "10\"",
      medium: "14\"",
      large: "18\"",
      glutenFree: "10\""
    },
    featured: false
  },
  {
    image: "/products/pizza/YouPickVeggies.jpg",
    title: "You Pick Veggies",
    description: "Any 3 veggies of your choice",
    excerpt: "Any 3 veggies of your choice.",
    category: "pizza",
    prices: {
      small: 15.00,
      medium: 22.00,
      large: 25.00,
      glutenFree: 17.00
    },
    sizes: {
      small: "10\"",
      medium: "14\"",
      large: "18\"",
      glutenFree: "10\""
    },
    featured: false
  },
  {
    image: "/products/pizza/TheTony.jpg",
    title: "The Tony",
    description: "Parmesan garlic white sauce, meatballs, mushrooms, and white onions.",
    excerpt: "Parmesan garlic white sauce, meatballs, mushrooms, and white onions.",
    category: "pizza",
    prices: {
      small: 15.00,
      medium: 21.00,
      large: 26.00,
      glutenFree: 17.00
    },
    sizes: {
      small: "10\"",
      medium: "14\"",
      large: "18\"",
      glutenFree: "10\""
    },
    featured: false
  },
  {
    image: "/products/drinks/Coke.png",
    title: "Coca-Cola",
    description: "Classic Coca-Cola",
    category: "drinks",
    prices: {
      can: 1.50,
      sixPack: 7.00
    },
    sizes: {
      can: "12 oz Can",
      sixPack: "6 Pack"
    },
    featured: false
  },
  {
    image: "/products/drinks/DietCoke.png",
    title: "Diet Coke",
    description: "Zero-calorie Coca-Cola",
    category: "drinks",
    prices: {
      can: 1.50,
      sixPack: 7.00
    },
    sizes: {
      can: "12 oz Can",
      sixPack: "6 Pack"
    },
    featured: false
  },
  {
    image: "/products/drinks/Sprite.png",
    title: "Sprite",
    description: "Lemon-lime flavored soda",
    category: "drinks",
    prices: {
      can: 1.50,
      sixPack: 7.00
    },
    sizes: {
      can: "12 oz Can",
      sixPack: "6 Pack"
    },
    featured: false
  },
  {
    image: "/products/drinks/DrPepper.png",
    title: "Dr Pepper",
    description: "Original Dr Pepper",
    category: "drinks",
    prices: {
      can: 1.50,
      sixPack: 7.00
    },
    sizes: {
      can: "12 oz Can",
      sixPack: "6 Pack"
    },
    featured: false
  },
  {
    image: "/products/drinks/DrPepperDiet.png",
    title: "Diet Dr Pepper",
    description: "Zero-calorie Dr Pepper",
    category: "drinks",
    prices: {
      can: 1.50,
      sixPack: 7.00
    },
    sizes: {
      can: "12 oz Can",
      sixPack: "6 Pack"
    },
    featured: false
  },
  {
    image: "/products/drinks/CherryCoke.png",
    title: "Cherry Coke",
    description: "Cherry-flavored Coca-Cola",
    category: "drinks",
    prices: {
      can: 1.50,
      sixPack: 7.00
    },
    sizes: {
      can: "12 oz Can",
      sixPack: "6 Pack"
    },
    featured: false
  },
  {
    image: "/products/drinks/MtnDew.png",
    title: "Mountain Dew",
    description: "Original Mountain Dew",
    category: "drinks",
    prices: {
      can: 1.50,
      sixPack: 7.00
    },
    sizes: {
      can: "12 oz Can",
      sixPack: "6 Pack"
    },
    featured: false
  },
  {
    image: "/products/drinks/MugRootBeer.png",
    title: "Root Beer",
    description: "Classic root beer",
    category: "drinks",
    prices: {
      can: 1.50,
      sixPack: 7.00
    },
    sizes: {
      can: "12 oz Can",
      sixPack: "6 Pack"
    },
    featured: false
  },
  {
    image: "/products/drinks/Squirt.png",
    title: "Squirt",
    description: "Citrus soda",
    category: "drinks",
    prices: {
      can: 1.50,
      sixPack: 7.00
    },
    sizes: {
      can: "12 oz Can",
      sixPack: "6 Pack"
    },
    featured: false
  },
  {
    image: "/products/drinks/RubyRedSquirt.jpg",
    title: "Ruby Red Squirt",
    description: "Ruby red grapefruit citrus soda",
    category: "drinks",
    prices: {
      can: 1.50,
      sixPack: 7.00
    },
    sizes: {
      can: "12 oz Can",
      sixPack: "6 Pack"
    },
    featured: false
  },
  {
    image: "/products/drinks/GingerAle.jpg",
    title: "Ginger Ale",
    description: "Classic ginger ale",
    category: "drinks",
    prices: {
      can: 1.50,
      sixPack: 7.00
    },
    sizes: {
      can: "12 oz Can",
      sixPack: "6 Pack"
    },
    featured: false
  },
  {
    image: "/products/drinks/WaterBottle.png",
    title: "Bottled Water",
    description: "Pure bottled water",
    category: "drinks",
    price: 1.00,
    featured: false
  },
  {
    image: "/products/sauces/RedSauce.png",
    title: "Homemade Red Sauce",
    description: "Our classic marinara sauce",
    category: "sauces",
    price: 1.00,
    featured: false
  },
  {
    image: "/products/sauces/ParmesanGarlicWhiteSauce.png",
    title: "Parmesan Garlic White Sauce",
    description: "Creamy garlic parmesan sauce",
    category: "sauces",
    price: 1.00,
    featured: false
  },
  {
    image: "/products/sauces/Ranch.png",
    title: "Ranch",
    description: "Classic ranch dressing",
    category: "sauces",
    price: 1.00,
    featured: false
  },
  {
    image: "/products/sauces/PestoRedMix.png",
    title: "Pesto Red Mix",
    description: "Blend of pesto and marinara sauce",
    category: "sauces",
    price: 1.00,
    featured: false
  },
  {
    image: "/products/sauces/Pesto.png",
    title: "Pesto",
    description: "Traditional basil pesto",
    category: "sauces",
    price: 1.00,
    featured: false
  },
  {
    image: "/products/sauces/BBQ.png",
    title: "BBQ Sauce",
    description: "Sweet and tangy BBQ sauce",
    category: "sauces",
    price: 1.00,
    featured: false
  },
  {
    image: "/products/sauces/HotSauce.png",
    title: "Frank's RedHot",
    description: "Classic hot sauce",
    category: "sauces",
    price: 1.00,
    featured: false
  }
];