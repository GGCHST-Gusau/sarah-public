import { images } from "@/assets/images";

export interface Post {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  image: any;
  created_at: string;
  author: string;
  content: string;
  readTime?: string;
}

export const POSTS: Post[] = [
  {
    id: 1,
    title: "Celebrating Excellence Across Our School Community",
    slug: "celebrating-excellence-across-our-school-community",
    excerpt:
      "We are proud to celebrate the dedication, hard work, and outstanding achievements of our students across academics, character, and extracurricular activities.",
    category: "Achievements",
    image: images.news_1,
    created_at: "2026-09-05T10:00:00Z",
    author: "School Administration",
    readTime: "3 min read",
    content:
      "Our school community continues to celebrate the remarkable progress and achievements of our students. Through dedication, consistent effort, and the support of our teachers and parents, our students continue to demonstrate excellence both inside and outside the classroom. From outstanding results in continuous assessments to commendable personal conduct, this term stands as a testament to what our learners can accomplish.",
  },
  {
    id: 2,
    title: "New Academic Session Begins with Excitement and Purpose",
    slug: "new-academic-session-begins-with-excitement-and-purpose",
    excerpt:
      "A new academic session is underway as students return to school ready to learn, grow, build new friendships, and take on exciting opportunities.",
    category: "School Life",
    image: images.news_2,
    created_at: "2026-09-02T09:00:00Z",
    author: "School Administration",
    readTime: "4 min read",
    content:
      "The new academic session has begun with renewed energy across all sections of the school. Students and teachers have returned with enthusiasm as we begin another year focused on meaningful learning, personal development, strong character, and academic growth. New learning materials and updated laboratory equipment have been commissioned to enrich student experiences.",
  },
  {
    id: 3,
    title: "Building Strong Foundations Through Islamic Education",
    slug: "building-strong-foundations-through-islamic-education",
    excerpt:
      "Our Islamiyya programme continues to nurture students through Qur’anic learning, Islamic studies, Arabic, and the values that guide everyday life.",
    category: "Islamiyya",
    image: images.news_3,
    created_at: "2026-08-28T11:30:00Z",
    author: "Islamiyya Department",
    readTime: "3 min read",
    content:
      "Islamic education remains an important part of our commitment to developing well-rounded students. Through Qur’an, Tajweed, Arabic, Islamic studies, and character development, our Islamiyya programme helps students strengthen their knowledge, faith, and understanding of Islamic values that guide every sphere of living.",
  },
  {
    id: 4,
    title: "STEM Innovation & Science Fair Preparations Underway",
    slug: "stem-innovation-and-science-fair-preparations",
    excerpt:
      "Students across Primary and Secondary divisions begin hands-on experiments, robotics prototypes, and science models for the upcoming Science Exhibition.",
    category: "Academics",
    image: images.event1,
    created_at: "2026-08-20T14:00:00Z",
    author: "Science & ICT Department",
    readTime: "4 min read",
    content:
      "The JET Club (Junior Engineers, Technicians and Scientists) has inaugurated preparations for our annual Science Exhibition. Students will present practical solutions addressing local energy, agricultural efficiency, and computer automation challenges.",
  },
  {
    id: 5,
    title: "Annual Qur'anic Recitation (Musabaqah) Winners Announced",
    slug: "annual-quranic-recitation-musabaqah-winners",
    excerpt:
      "Reciters from all levels impressed adjudicators with beautiful Tajweed, accurate memorization, and noble decorum in our annual school-wide competition.",
    category: "Islamiyya",
    image: images.event3,
    created_at: "2026-08-12T16:00:00Z",
    author: "Tahfiz Department",
    readTime: "5 min read",
    content:
      "Our annual Qur'anic recitation competition witnessed remarkable demonstrations of memorization and Tajweed mastery. Certified judges commended the students' precise articulation (Makharij) and reverent delivery across all age brackets.",
  },
  {
    id: 6,
    title: "Inter-House Sports Festival: Fostering Teamwork & Discipline",
    slug: "inter-house-sports-festival-fostering-teamwork",
    excerpt:
      "Yellow, Blue, Green, and Red houses gear up for track and field heats as Sarah Academy reinforces the role of physical fitness in academic stamina.",
    category: "School Life",
    image: images.event2,
    created_at: "2026-08-05T08:30:00Z",
    author: "Sports Committee",
    readTime: "3 min read",
    content:
      "Physical fitness and healthy sportsmanship are fundamental pillars of holistic child development. Our upcoming Inter-House Sports competition will feature track events, table tennis, relay races, and team challenges designed to foster leadership and camaraderie.",
  },
];
