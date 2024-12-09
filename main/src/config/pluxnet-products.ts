export interface FibreDeal {
  id: number
  name: string
  type: "Home" | "Business" | "Enterprise"
  speed: string
  price: number
  features: string[]
  mostPopular?: boolean // Optional flag for popular deals
}

export const fibreDeals: FibreDeal[] = [
  // Home Packages
  {
    id: 1,
    name: "Home Basic",
    type: "Home",
    speed: "Up to 20Mbps",
    price: 399,
    features: [
      "FREE Router",
      "FREE Installation",
      "24/7 Support",
      "FREE VOIP Subscription",
      "Uncapped",
      "Unthrottled",
    ],
  },
  {
    id: 2,
    name: "Home Starter",
    type: "Home",
    speed: "Up to 25Mbps",
    price: 499,
    features: [
      "FREE Router",
      "FREE Installation",
      "24/7 Support",
      "FREE VOIP Subscription",
      "Uncapped",
      "Unthrottled",
    ],
    mostPopular: true, // Marked as the most popular
  },
  {
    id: 3,
    name: "Home Surfer",
    type: "Home",
    speed: "Up to 50Mbps",
    price: 649,
    features: [
      "FREE Router",
      "FREE Installation",
      "24/7 Support",
      "FREE VOIP Subscription",
      "Uncapped",
      "Unthrottled",
    ],
  },
  {
    id: 4,
    name: "Home Rocket",
    type: "Home",
    speed: "Up to 100Mbps",
    price: 799,
    features: [
      "FREE Router",
      "FREE Installation",
      "24/7 Support",
      "FREE VOIP Subscription",
      "Uncapped",
      "Unthrottled",
    ],
  },
  {
    id: 5,
    name: "Home Giga",
    type: "Home",
    speed: "Up to 1Gbps",
    price: 1899,
    features: [
      "FREE Router",
      "FREE Installation",
      "24/7 Support",
      "FREE VOIP Subscription",
      "Uncapped",
      "Unthrottled",
    ],
  },

  // Business & Enterprise Packages
  {
    id: 6,
    name: "Business Package",
    type: "Business",
    speed: "Up to 50Mbps",
    price: 1399,
    features: [
      "FREE Router",
      "FREE Installation",
      "100Mbps",
      "24/7 Support",
      "FREE Cloud PABX Subscription",
      "Low Call Rates",
      "Uncapped",
      "Unthrottled",
    ],
  },
  {
    id: 7,
    name: "Enterprise Package",
    type: "Enterprise",
    speed: "Up to 100Mbps",
    price: 1899,
    features: [
      "FREE Router",
      "FREE Installation",
      "100Mbps",
      "24/7 Support",
      "FREE Cloud PABX Subscription",
      "Low Call Rates",
      "Uncapped",
      "Unthrottled",
    ],
  },
]
