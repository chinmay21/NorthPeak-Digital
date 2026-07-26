const pricingPlans = [
  {
    name: "Starter",
    price: "$499",
    theme: "light",
    popular: false,
    description: "A professional online presence for businesses ready to get started.",
    features: [
      "Up to 5 pages",
      "Mobile-responsive design",
      "Custom website design",
    ],
    buttonText: "Get Started",
  },

  {
    name: "Growth",
    price: "$1,499",
    theme: "dark",
    popular: true,
    description: "Everything you need to attract more visitors and turn them into customers.",
    features: [
      "Up to 10 pages",
      "Advanced SEO setup",
      "Lead capture forms",
    ],
    buttonText: "Start Growing",
  },

  {
    name: "Premium",
    price: "$2,999",
    theme: "accent",
    popular: false,
    description: "A complete digital experience built for businesses ready to scale.",
    features: [
      "Unlimited core pages",
      "Advanced SEO",
      "Priority support",
    ],
    buttonText: "Let's Talk",
  },
];

export default pricingPlans;