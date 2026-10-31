
export type BikeCategory = "Urban" | "Track" | "Creative";

export interface BikeBuild {
  id: string;
  name: string;
  category: BikeCategory;
  description: string;
  image: string;
}

export const bikeBuilds: BikeBuild[] = [
  {
    id: "urban-01",
    name: "The Daily",
    category: "Urban",
    description: "A minimal setup built for everyday city riding.",
    image: "/images/urban-bike.jpg",
  },
  {
    id: "track-01",
    name: "The Pursuit",
    category: "Track",
    description: "A performance-focused build inspired by track cycling.",
    image: "/images/track-bike.jpg",
  },
  {
    id: "creative-01",
    name: "The Individual",
    category: "Creative",
    description: "An expressive build with a distinctive character.",
    image: "/images/creative-bike.jpg",
  },
];
