export type MenuItem = {
  name: string
  price: string
  note?: string
  featured?: boolean
}

export type MenuCategory = {
  id: string
  title: string
  subtitle?: string
  items: MenuItem[]
}

export const menu: MenuCategory[] = [
  {
    id: "mains",
    title: "Mains",
    subtitle: "Hand-prepared, deeply seasoned, made the way it's supposed to be.",
    items: [
      { name: "Lamb Chops w/ Garlic Butter", price: "$25", note: "Made to order", featured: true },
      { name: "Salmon w/ Garlic Butter", price: "$20", featured: true },
      { name: "Sweet n' Sour Salmon", price: "$20" },
      { name: "Turkey Wings", price: "$18" },
      { name: "Hot Honey Catfish", price: "$18" },
      { name: "Pan Seared Salmon", price: "$18" },
      { name: "3 PC Fried Whiting Meal", price: "$17", note: "Made to order" },
      { name: "Garlic Parm Wings", price: "$16", featured: true },
      { name: "Sweet Chili Wings", price: "$16" },
      { name: "Lemon Pepper Wings", price: "$16" },
      { name: "Honey Mustard Wings", price: "$16" },
      { name: "BBQ Chicken", price: "$16" },
      { name: "Sweet & Spicy BBQ Chicken", price: "$16" },
      { name: "Garlic Roasted Parmesan Chicken", price: "$16" },
      { name: "Beef Meatloaf", price: "$16" },
      { name: "Baked Chicken", price: "$15" },
      { name: "Lasagne", price: "$20", note: "Served w/ sautéed greens" },
      { name: "3 PC Whiting Fish", price: "$8", note: "Thu & Fri • 30 min call ahead" },
    ],
  },
  {
    id: "sides",
    title: "Sides",
    subtitle: "Every side $6. Dinners come with 2 sides & a drink.",
    items: [
      { name: "Famous Mac N Cheese", price: "$6", featured: true },
      { name: "Collard Greens w/ Smoked Turkey", price: "$6", featured: true },
      { name: "Candied Yams", price: "$6", featured: true },
      { name: "Sautéed Greens", price: "$6" },
      { name: "Sautéed Kale", price: "$6" },
      { name: "Sweet Plantains", price: "$6" },
      { name: "Garlic Butter Mash w/ Gravy", price: "$6" },
      { name: "Home Fries w/ Peppers & Gravy", price: "$6" },
      { name: "Black Eyed Peas", price: "$6" },
      { name: "Green Beans", price: "$6" },
      { name: "Baked Beans", price: "$6" },
      { name: "Potato Salad", price: "$6" },
      { name: "Macaroni & Tuna Salad", price: "$6" },
      { name: "Vegetable Stir Fry", price: "$6" },
      { name: "Coconut Rice", price: "$6" },
      { name: "Yellow Rice & Beans", price: "$6" },
      { name: "Herbs N Butter Rice", price: "$6" },
      { name: "Dirty Rice", price: "$6" },
      { name: "Red Bean Sauce", price: "$6" },
    ],
  },
  {
    id: "breads-desserts",
    title: "Cornbread & Desserts",
    items: [
      { name: "Banana Pudding", price: "$8", featured: true },
      { name: "Bailey's Chocolate Cake", price: "$8" },
      { name: "Mixed Berry Cobbler", price: "$5" },
      { name: "Strawberry Crème Cake", price: "$5" },
      { name: "Lemon Cake", price: "$5" },
      { name: "Brown Butter Cornbread", price: "$4" },
      { name: "Blueberry Cornbread", price: "$3" },
      { name: "Cornbread", price: "$3" },
      { name: "Fresh Baked Apple Pie", price: "$3" },
    ],
  },
  {
    id: "drinks",
    title: "Drinks",
    items: [
      { name: "Homemade Lemonade", price: "$4", featured: true },
      { name: "Sweet Tea", price: "$4", featured: true },
    ],
  },
]

export const menuNote =
  "Our menu rotates weekly. These are the items you'll see most often — call ahead to confirm what's on the line today."

export const signatureDishes = [
  {
    title: "Lemon Pepper Wings",
    subtitle: "Six wings, hand-seasoned",
    description:
      "Crispy wings tossed in bright lemon pepper — the kind that has folks licking their fingers before they reach the napkins.",
    accent: "tomato",
    image: "/photos/soultye_lemon_pepper_wings.png",
  },
  {
    title: "Famous Mac",
    subtitle: "The side that started a religion",
    description:
      "Three-cheese, baked golden, with that crispy edge piece everybody fights for. Yes, it's named famous for a reason.",
    accent: "marigold",
    image: "/photos/soultye_famous_mac.jpg",
  },
  {
    title: "Whiting & Cheese Grits",
    subtitle: "Soul food, straight up",
    description:
      "Crispy seasoned whiting fillets over creamy yellow cheese grits, finished with fresh parsley.",
    accent: "forest",
    image: "/photos/soultye_whiting_cheese_grits.jpg",
  },
  {
    title: "Turkey Wings, Coconut Rice & Beans",
    subtitle: "A plate built like a dinner",
    description:
      "Fall-off-the-bone smoked turkey wings over coconut rice and beans — comfort food plated for a crowd.",
    accent: "brick",
    image: "/photos/soultye_turkeywings_coconut_rice_beans.png",
  },
] as const
