export interface Review {
  ratings: number;
  text: string;
  reviewer: string;
}

export const reviews: Review[] = [
  {
    ratings: 5,
    text: "Ever since I've moved here I have been coming to this location. My eyebrows always come out amazing. The owner is the best and actually listens to what you request. Please check this place out, you will not regret",
    reviewer: "Lexi S",
  },
  {
    ratings: 5,
    text: "Had a great first time experience here, full face threading with Suni! She was a sweetie and I'll definitely be coming back, they also do much more. For sure give this place a try!",
    reviewer: "Hunter G",
  },
  {
    ratings: 5,
    text: "Suni was amazing! I love my brows and lashes. Very patient. Clean shop. I received services for tinting and I got the strip lashes! 👍🏾Great customer service. I got the membership for 3 months so I will be back!",
    reviewer: "Charity S",
  },
];
