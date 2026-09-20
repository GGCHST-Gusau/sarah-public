import {
  Baby,
  BookOpen,
  GraduationCap,
  BookMarked,
  Lightbulb,
  HeartHandshake,
  Cpu,
  Compass,
  Trophy,
  Users,
  Target,
  Sparkles,
  Award,
  CheckCircle2,
  FileText,
  HelpCircle,
} from "lucide-react";

export const ACADEMIC_DIVISIONS = [
  {
    id: "nursery",
    title: "Nursery & Early Years",
    tagline: "Ages 2 – 5 | Playgroup, Pre-Nursery, Nursery 1 & 2",
    icon: Baby,
    summary:
      "A joyful, nurturing foundation where young minds develop a natural love for discovery, early literacy, numeracy, and fine motor skills in a safe Islamic environment.",
    curriculumHighlights: [
      "Early Phonics, Vocabulary & Pre-Reading",
      "Foundational Numeracy & Spatial Awareness",
      "Sensory Play, Creative Arts & Motor Skills",
      "Early Islamic Etiquette, Daily Adhkar & Short Surahs",
    ],
    ageGroup: "2 – 5 Years",
    schedule: "Morning Sessions (8:00 AM – 1:00 PM)",
  },
  {
    id: "primary",
    title: "Primary School",
    tagline: "Ages 6 – 11 | Basic 1 to Basic 6",
    icon: BookOpen,
    summary:
      "Building robust academic foundations aligned with the Nigerian National Basic Curriculum alongside character cultivation, critical inquiry, and digital literacy.",
    curriculumHighlights: [
      "English Language, Mathematics, Basic Science & Technology",
      "Social Studies, Civic Education & Agricultural Science",
      "Information & Communication Technology (ICT) Practicals",
      "Arabic Language, Islamic Religious Studies & Tahfiz Basics",
      "Preparation for National & State Common Entrance Examinations",
    ],
    ageGroup: "6 – 11 Years",
    schedule: "Full Day (8:00 AM – 2:30 PM)",
  },
  {
    id: "secondary",
    title: "Secondary School",
    tagline: "Ages 11 – 17 | JSS 1 to SSS 3",
    icon: GraduationCap,
    summary:
      "A rigorous academic pathway preparing students for excellence in WAEC, NECO, and UTME (JAMB), fostering independent leadership, analytical intellect, and moral fortitude.",
    curriculumHighlights: [
      "Junior Secondary (Basic 7–9): Core NERDC Subjects preparing for BECE",
      "Senior Secondary (SSS 1–3): Specialised Science, Arts & Commercial Tracks",
      "Hands-on Science Laboratories (Physics, Chemistry, Biology)",
      "Technical & Computer Science Mastery (Coding, Data Processing)",
      "Dedicated Examination Preparation Clinics (WASSCE, NECO SSCE, UTME)",
    ],
    ageGroup: "11 – 17 Years",
    schedule: "Full Day (8:00 AM – 3:30 PM)",
  },
  {
    id: "islamiyya",
    title: "Tahfiz & Islamiyya Section",
    tagline: "All Grades | Integrated & Afternoon Pathways",
    icon: BookMarked,
    summary:
      "Nurturing upright believers through sound Qur’anic memorization (Hifz), precise Tajweed, authentic Hadith, Fiqh, Seerah, and communicative Arabic language proficiency.",
    curriculumHighlights: [
      "Structured Tahfiz (Memorization with Certified Reciters)",
      "Tajweed Rules & Proper Pronunciation (Makharij)",
      "Fiqh (Islamic Jurisprudence) & Daily Life Application",
      "Seerah of the Prophet (SAW) & Noble Islamic History",
      "Modern Communicative Arabic Reading & Writing",
    ],
    ageGroup: "Integrated across all ages",
    schedule: "Integrated morning modules & dedicated afternoon sessions",
  },
];

export const LEARNING_APPROACH_PILLARS = [
  {
    title: "Inquiry-Led & Child-Centred",
    description:
      "We encourage questions, critical curiosity, and active engagement rather than rote memorization, helping learners understand concepts deeply.",
    icon: Lightbulb,
  },
  {
    title: "Dual Curriculum Harmony",
    description:
      "Modern Nigerian and international academic standards blend seamlessly with deep Islamic moral guidance and Arabic language excellence.",
    icon: Compass,
  },
  {
    title: "Experiential & Hands-On",
    description:
      "From science experiments in our labs to ICT projects, creative arts, and agricultural plots, students learn by doing and creating.",
    icon: Cpu,
  },
  {
    title: "Character & Adab Integration",
    description:
      "Knowledge without good character is incomplete. We deliberately teach integrity, discipline, empathy, respect, and upright Islamic manners (Adab).",
    icon: HeartHandshake,
  },
];

export const CURRICULUM_PILLARS = [
  {
    title: "National Core Academic Curriculum",
    badge: "NERDC Standard",
    description:
      "Comprehensive coverage of the Nigerian Educational Research and Development Council (NERDC) national curriculum, preparing students for BECE, WAEC, NECO, and UTME examinations.",
    subjects: [
      "English Language & Literature",
      "General Mathematics & Further Maths",
      "Basic & Core Sciences (Physics, Chemistry, Biology)",
      "Humanities, Civic Education & Social Studies",
      "Commerce, Accounting & Economics",
    ],
  },
  {
    title: "Comprehensive Islamic & Arabic Studies",
    badge: "Spiritual Foundation",
    description:
      "An authentic Islamic curriculum designed to nurture upright character, spiritual clarity, and genuine fluency in the Arabic language.",
    subjects: [
      "Tahfiz (Qur'an Memorization) & Tajweed",
      "Islamic Religious Studies (IRS) & Tawheed",
      "Fiqh of Worship & Everyday Living",
      "Arabic Syntax, Grammar & Speaking Fluency",
      "Seerah (Prophetic Biography) & Islamic Ethics",
    ],
  },
  {
    title: "STEM & Digital Innovation",
    badge: "Future-Ready Skills",
    description:
      "Equipping our learners with technology fluency, practical scientific inquiry, and analytical problem-solving required in an increasingly digital world.",
    subjects: [
      "ICT & Computer Fundamentals",
      "Practical Laboratory Sciences",
      "Introduction to Logic & Coding Concepts",
      "Data Processing & Productivity Applications",
      "Agricultural Science & Practical Planting",
    ],
  },
  {
    title: "Communication & Leadership Arts",
    badge: "Confidence & Voice",
    description:
      "Cultivating articulate, confident public speakers and writers capable of expressing ideas persuasively and collaborating with empathy.",
    subjects: [
      "Public Speaking, Debates & Speechcraft",
      "Creative Writing & Reading Clubs",
      "Leadership Prefectship & Civic Duties",
      "Emotional Intelligence & Peer Mediation",
    ],
  },
];

export const STUDENT_DEVELOPMENT_AREAS = [
  {
    number: "01",
    title: "Intellectual Mastery & Critical Thinking",
    description:
      "Training students to analyze problems, construct logical arguments, and question assumptions constructively across all academic disciplines.",
    icon: Target,
  },
  {
    number: "02",
    title: "Moral Integrity & Spiritual Grounding",
    description:
      "Instilling God-consciousness (Taqwa), truthfulness, trustworthiness, humility, and genuine respect for elders, peers, and the community.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Practical & Vocational Readiness",
    description:
      "Encouraging tangible life skills through agricultural projects, digital applications, hands-on experiments, and entrepreneurial basics.",
    icon: Award,
  },
  {
    number: "04",
    title: "Leadership, Teamwork & Service",
    description:
      "Giving students meaningful opportunities to lead student bodies, organize events, participate in community service, and work collaboratively.",
    icon: Users,
  },
];

export const BEYOND_CLASSROOM_PROGRAMS = [
  {
    title: "Academic & Science Clubs",
    category: "STEM & Intellect",
    description:
      "JET Club (Junior Engineers, Technicians & Scientists), Literary & Debating Society, Press Club, and Mathematics Olympiad circles.",
    icon: Cpu,
  },
  {
    title: "Qur'an & Islamic Competitions",
    category: "Faith & Excellence",
    description:
      "Annual Inter-School Qur'an Recitation (Musabaqah), Hadith Memorization contests, Islamic Quiz, and Arabic Calligraphy exhibitions.",
    icon: BookMarked,
  },
  {
    title: "Sports & Physical Wellness",
    category: "Athletics & Health",
    description:
      "Inter-house sports competitions, football tournaments, track and field, table tennis, badminton, and weekly physical education classes.",
    icon: Trophy,
  },
  {
    title: "Educational Field Excursions",
    category: "Real-World Learning",
    description:
      "Planned visits to research centers, botanical gardens, broadcasting stations, historical landmarks, and agricultural farms.",
    icon: Compass,
  },
];

export const ASSESSMENT_SYSTEM = [
  {
    title: "Continuous Assessment (C.A.)",
    percentage: "30% - 40%",
    description:
      "Regular weekly quizzes, homework assignments, class participation, laboratory practicals, and group projects that measure consistent effort throughout the term.",
  },
  {
    title: "Terminal Examinations",
    percentage: "60% - 70%",
    description:
      "Comprehensive end-of-term examinations assessing mastery of key subject concepts, retention, analytical ability, and examination discipline.",
  },
  {
    title: "Holistic Progress Reports",
    percentage: "Every Term",
    description:
      "Detailed termly report cards tracking both academic scores and behavioral domains (neatness, punctuality, social cooperation, and Islamic conduct).",
  },
  {
    title: "Parent-Teacher Consultations (Open Days)",
    percentage: "Mid & End-Term",
    description:
      "One-on-one sessions between parents and class teachers to review academic diagnostic data, student well-being, and formulate shared improvement plans.",
  },
];

export const ACADEMIC_SUPPORT_SERVICES = [
  {
    title: "Remedial Clinics & Subject Support",
    description:
      "Dedicated after-school sessions in core areas such as Mathematics, English Phonics, Reading Comprehension, and Tajweed for students requiring extra reinforcement.",
    icon: HelpCircle,
  },
  {
    title: "Examination Prep & Mock Clinics",
    description:
      "Intensive coaching, past-question drills, and timed mock exams for candidates preparing for National Common Entrance, BECE, WAEC, NECO, and UTME (JAMB).",
    icon: CheckCircle2,
  },
  {
    title: "Gifted & Advanced Learners Mentorship",
    description:
      "Challenging assignments, science fair projects, and inter-school academic competitions for students who demonstrate high aptitude and accelerated learning speeds.",
    icon: Award,
  },
  {
    title: "Parent-Teacher Academic Partnership",
    description:
      "Regular updates on homework, syllabus progress, and student development milestones through transparent communication channels.",
    icon: FileText,
  },
];

export const NIGERIAN_ACADEMIC_TERMS = [
  {
    term: "First Term (Harmattan Term)",
    period: "September – December",
    badge: "Session Kickoff",
    milestones: [
      { event: "Resumption of New Academic Session", date: "Early September" },
      { event: "Orientation & Diagnostic Baseline Tests", date: "Mid September" },
      { event: "Mid-Term Continuous Assessments & Break", date: "Late October" },
      { event: "Parent-Teacher Open Day", date: "Early November" },
      { event: "First Term Revision & Terminal Examinations", date: "Late November – Early December" },
      { event: "Vacation & End of Term Celebrations", date: "Mid December" },
    ],
  },
  {
    term: "Second Term (Lent Term)",
    period: "January – April",
    badge: "Mid-Session",
    milestones: [
      { event: "Second Term Resumption", date: "Early January" },
      { event: "Annual Inter-House Sports Festival", date: "February" },
      { event: "Mid-Term Break & Review", date: "Mid February" },
      { event: "Common Entrance & BECE Mock Examinations", date: "March" },
      { event: "Second Term Terminal Examinations", date: "Late March – Early April" },
      { event: "Second Term Holiday & Vacation", date: "April" },
    ],
  },
  {
    term: "Third Term (Promotional Term)",
    period: "Late April – July",
    badge: "Promotion Session",
    milestones: [
      { event: "Third Term Resumption", date: "Late April / Early May" },
      { event: "WASSCE & NECO SSCE External Examinations", date: "May – June" },
      { event: "Mid-Term Break & Science / Cultural Exhibition Week", date: "June" },
      { event: "Promotional Terminal Examinations (All Classes)", date: "Early to Mid July" },
      { event: "Annual Speech, Prize-Giving & Graduation Day", date: "Late July" },
      { event: "Long Vacation (Summer Break)", date: "Late July – Early September" },
    ],
  },
];
