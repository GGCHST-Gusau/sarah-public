import { images } from "@/assets/images";

export interface SchoolEvent {
  id: number;
  title: string;
  description: string;
  date: string;
  time?: string;
  venue: string;
  category?: string;
  image: any;
  targetAudience?: string;
}

export const EVENTS: SchoolEvent[] = [
  {
    id: 1,
    title: "Parent–Teacher Consultation Meeting (Open Day)",
    description:
      "An opportunity for parents and teachers to review student continuous assessment progress, academic milestones, and collaborative strategies for home learning.",
    date: "2026-09-18T10:00:00",
    time: "10:00 AM – 2:00 PM",
    venue: "Main Assembly Hall",
    category: "Parent Engagement",
    image: images.event1,
    targetAudience: "All Parents & Guardians",
  },
  {
    id: 2,
    title: "Annual Inter-House Sports Competition",
    description:
      "A vibrant day of athletics, relay races, track and field championships, where houses compete to demonstrate teamwork, agility, and sportsmanship.",
    date: "2026-09-28T08:00:00",
    time: "8:00 AM – 3:30 PM",
    venue: "School Sports Ground",
    category: "Sports & Fitness",
    image: images.event2,
    targetAudience: "Students, Staff & Parents",
  },
  {
    id: 3,
    title: "New Student Orientation & Welcome Ceremony",
    description:
      "A welcoming and informative session designed to help new entrants and their families familiarize with school values, academic routines, and learning facilities.",
    date: "2026-10-05T09:00:00",
    time: "9:00 AM – 12:30 PM",
    venue: "Assembly Ground & Auditorium",
    category: "School Life",
    image: images.event3,
    targetAudience: "New Students & Families",
  },
  {
    id: 4,
    title: "JET Club Science & Technology Fair",
    description:
      "A showcase of student-engineered inventions, biological models, coding applications, and environmental science experiments.",
    date: "2026-10-20T11:00:00",
    time: "11:00 AM – 2:30 PM",
    venue: "Multipurpose Science Hall",
    category: "Academic & STEM",
    image: images.about_img3,
    targetAudience: "All Students & Invited Guests",
  },
  // {
  //   id: 5,
  //   title: "Inter-Class Qur'an & Hadith Competition (Musabaqah)",
  //   description:
  //     "Celebrating devotion and memorization as students demonstrate Tajweed precision, melodious recitation, and deep understanding of the Prophetic tradition.",
  //   date: "2026-11-08T09:30:00",
  //   time: "9:30 AM – 1:30 PM",
  //   venue: "Central Mosque & Assembly Hall",
  //   category: "Tahfiz & Islamiyya",
  //   image: images.about_img4,
  //   targetAudience: "Entire School Community",
  // },
];
