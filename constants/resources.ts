import {
  FileText,
  Download,
  ExternalLink,
  BookOpen,
  Calendar,
  Users,
  GraduationCap,
  CreditCard,
  Laptop,
  HeartPulse,
  HelpCircle,
  FileCheck,
  Award,
  Clock,
  Mail,
  Phone,
  ShieldCheck,
  Bookmark,
  Sparkles,
  Bus,
} from "lucide-react";

export const HOW_TO_GUIDES = [
  {
    slug: "pay-school-fees",
    title: "How to Pay School Fees",
    description:
      "Step-by-step instructions on approved payment channels, bank account details, online transactions, and bursary receipt verification.",
    category: "Bursary & Payments",
    readTime: "3 min read",
    icon: CreditCard,
    href: "/resources/how-to/pay-school-fees",
  },
  {
    slug: "apply-admission",
    title: "How to Apply for Admission",
    description:
      "Complete guide to prospective student registration, necessary documentation, entrance assessments, and acceptance procedures.",
    category: "Admissions",
    readTime: "4 min read",
    icon: GraduationCap,
    href: "/resources/how-to/apply-admission",
  },
  {
    slug: "check-results",
    title: "How to Check Children's Results",
    description:
      "Guidelines on retrieving term exam PINs, signing into the portal, viewing continuous assessment scores, and printing terminal report sheets.",
    category: "Academic Records",
    readTime: "2 min read",
    icon: Award,
    href: "/resources/how-to/check-results",
  },
  {
    slug: "access-parent-portal",
    title: "How to Access the Parent Portal",
    description:
      "First-time account activation, setting up parent/guardian credentials, resetting forgotten passwords, and navigating your dashboard.",
    category: "Digital Portals",
    readTime: "3 min read",
    icon: Laptop,
    href: "/resources/how-to/access-parent-portal",
  },
  {
    slug: "request-documents",
    title: "How to Request Official Documents",
    description:
      "Clear instructions for ordering student transcripts, recommendation letters, certificates of attendance, and transfer clearance.",
    category: "Administration",
    readTime: "3 min read",
    icon: FileText,
    href: "/resources/how-to/request-documents",
  },
  {
    slug: "school-bus-registration",
    title: "How to Register for School Bus Transport",
    description:
      "Learn about neighborhood routes, morning pickup schedules, transit safety guidelines, and bus service seat booking.",
    category: "Transportation",
    readTime: "2 min read",
    icon: Bus,
    href: "/resources/how-to/school-bus-registration",
  },
];

export const QUICK_ACCESS_ITEMS = [
  {
    title: "Parent Portal Login",
    description: "Check termly report cards, continuous assessments, and student attendance records.",
    icon: Laptop,
    badge: "Online Portal",
    href: "#",
  },
  {
    title: "Term Result Checker",
    description: "Access official end-of-term examination results and character conduct reports.",
    icon: Award,
    badge: "Assessments",
    href: "#",
  },
  {
    title: "School Fees & Bursary",
    description: "View fee breakdown, approved payment channels, and bank account details.",
    icon: CreditCard,
    badge: "Bursary",
    href: "#",
  },
  {
    title: "E-Learning & Digital Library",
    description: "Access supplementary learning materials, e-books, and homework assignments.",
    icon: BookOpen,
    badge: "Academics",
    href: "#",
  },
  {
    title: "2026/2027 Academic Calendar",
    description: "Download the complete Nigerian 3-term session schedule and public holidays.",
    icon: Calendar,
    badge: "Calendar",
    href: "#calendar",
  },
  {
    title: "New Student Admission",
    description: "Download application forms and step-by-step registration guidelines.",
    icon: FileCheck,
    badge: "Admissions",
    href: "#how-to-guides",
  },
];

export const PARENT_RESOURCES = [
  {
    title: "Parent & Guardian Handbook",
    description:
      "A comprehensive guide outlining school policies, drop-off/pick-up routines, uniform rules, and expectations for home-school collaboration.",
    icon: BookOpen,
    category: "Policy & Guidelines",
  },
  {
    title: "PTA Guidelines & Meeting Notes",
    description:
      "Information on Parent-Teacher Association objectives, executive contacts, meeting schedules, and forum minutes.",
    icon: Users,
    category: "Community",
  },
  {
    title: "Health, Safety & Medical Policy",
    description:
      "Details on our school clinic protocols, immunization verification, emergency management, and sick-child exclusion guidelines.",
    icon: HeartPulse,
    category: "Health & Care",
  },
  {
    title: "Fee Schedule & Bursary Policies",
    description:
      "Transparent schedule of tuition, PTA levies, books, and boarding/transport fees with clear payment deadlines.",
    icon: CreditCard,
    category: "Financials",
  },
];

export const STUDENT_RESOURCES = [
  {
    title: "Student Code of Conduct & Ethics",
    description:
      "Guiding rules on discipline, punctuality, peer respect, academic honesty, and Islamic decorum (Adab) in and out of class.",
    icon: ShieldCheck,
    category: "Ethics & Conduct",
  },
  {
    title: "Class & Examination Timetables",
    description:
      "Weekly classroom lesson schedules, laboratory practical rotations, and terminal examination timetables.",
    icon: Clock,
    category: "Schedules",
  },
  {
    title: "Tahfiz Memorization & Revision Log",
    description:
      "Structured tracking log for Qur'an memorization (Hifz), daily revision targets (Muraja'ah), and Tajweed notes.",
    icon: Bookmark,
    category: "Tahfiz & Islamiyya",
  },
  {
    title: "Clubs & Extracurricular Directory",
    description:
      "Meeting times, mentor contacts, and project schedules for JET Club, Literary & Debate, Press Club, and Sports teams.",
    icon: Sparkles,
    category: "Co-Curricular",
  },
];

export const ACADEMIC_RESOURCES = [
  {
    title: "NERDC Scheme of Work Overview",
    description:
      "Termly breakdown of learning objectives and subject topics across Lower Basic, Middle Basic, JSS, and Senior Secondary.",
    division: "All Levels",
  },
  {
    title: "Past Examination Questions & Revision Packs",
    description:
      "Curated repository of past exam papers for National Common Entrance, BECE, WAEC (WASSCE), NECO, and UTME (JAMB).",
    division: "Basic 6, JSS 3 & SSS 3",
  },
  {
    title: "Science Laboratory Safety & Practical Guide",
    description:
      "Standard operating procedures, safety rules, and apparatus guidelines for Biology, Chemistry, and Physics laboratories.",
    division: "Secondary School",
  },
  {
    title: "Recommended Reading & Textbook Lists",
    description:
      "Approved textbook curriculum lists for each class section, including literary texts, mathematics workbooks, and Arabic texts.",
    division: "Nursery to SSS 3",
  },
];

export const DOWNLOADABLE_DOCS = [
  {
    id: "doc-1",
    title: "2026/2027 Full Session Academic Calendar",
    category: "Calendar",
    format: "PDF",
    size: "1.2 MB",
    updated: "September 2026",
  },
  {
    id: "doc-2",
    title: "Student Code of Conduct & Discipline Manual",
    category: "Handbook",
    format: "PDF",
    size: "850 KB",
    updated: "August 2026",
  },
  {
    id: "doc-3",
    title: "Sarah Academy Prospectus & Information Guide",
    category: "Prospectus",
    format: "PDF",
    size: "3.4 MB",
    updated: "August 2026",
  },
  {
    id: "doc-4",
    title: "School Uniform Specifications & Dress Code",
    category: "Policy",
    format: "PDF",
    size: "620 KB",
    updated: "July 2026",
  },
  {
    id: "doc-5",
    title: "Approved Booklist & Learning Material Inventory",
    category: "Academic",
    format: "PDF",
    size: "1.1 MB",
    updated: "August 2026",
  },
  {
    id: "doc-6",
    title: "Health & Medical Emergency Guidelines",
    category: "Health",
    format: "PDF",
    size: "450 KB",
    updated: "July 2026",
  },
];

export const FORMS_APPLICATIONS = [
  {
    id: "form-1",
    title: "New Student Admission Application Form",
    description: "Standard application form for Nursery, Primary, Secondary, and Islamiyya admissions.",
    format: "PDF",
    size: "520 KB",
    actionText: "Download Application",
  },
  {
    id: "form-2",
    title: "Student Medical Information & Emergency Consent Form",
    description: "Mandatory medical history and emergency medical authorization form.",
    format: "PDF",
    size: "380 KB",
    actionText: "Download Form",
  },
  {
    id: "form-3",
    title: "School Bus & Transportation Service Registration",
    description: "Application for daily student pickup and drop-off bus routes.",
    format: "PDF",
    size: "410 KB",
    actionText: "Download Form",
  },
  {
    id: "form-4",
    title: "Extracurricular & Sports Club Participation Form",
    description: "Parental consent and sign-up form for competitive sports and academic clubs.",
    format: "PDF",
    size: "320 KB",
    actionText: "Download Form",
  },
];

export const USEFUL_LINKS = [
  {
    title: "NERDC Nigeria",
    description: "Nigerian Educational Research and Development Council national curriculum portal.",
    url: "https://nerdc.org.ng",
    badge: "National Curriculum",
  },
  {
    title: "WAEC Nigeria",
    description: "Official portal for WASSCE examination schedules, syllabuses, and e-results.",
    url: "https://waecnigeria.org",
    badge: "Senior Secondary Exams",
  },
  {
    title: "NECO Official Portal",
    description: "National Examinations Council portal for SSCE, BECE, and National Common Entrance.",
    url: "https://neco.gov.ng",
    badge: "National Exams",
  },
  {
    title: "JAMB / UTME Gateway",
    description: "Joint Admissions and Matriculation Board portal for tertiary entrance exams.",
    url: "https://jamb.gov.ng",
    badge: "University Entrance",
  },
  {
    title: "Federal Ministry of Education",
    description: "Official policy announcements, academic standards, and national education bulletins.",
    url: "https://education.gov.ng",
    badge: "Government",
  },
  {
    title: "Sarah Academy Student Portal",
    description: "Internal academic portal for enrolled students, grades, and teacher messages.",
    url: "#",
    badge: "Internal Portal",
  },
];

export const HELP_DESKS = [
  {
    title: "Admissions & Enrollment Office",
    description: "Enquiries regarding registration forms, entrance exams, screening, and enrollment fees.",
    contact: "admissions@sarahacademy.edu.ng",
    phone: "+234 (0) 800 SARAH ADM",
    hours: "Monday – Friday: 8:00 AM – 4:00 PM",
    icon: FileText,
  },
  {
    title: "Bursary & Accounts Desk",
    description: "Assistance with tuition verification, bank receipts, payment plans, and invoicing.",
    contact: "bursary@sarahacademy.edu.ng",
    phone: "+234 (0) 800 SARAH BURS",
    hours: "Monday – Friday: 8:00 AM – 3:30 PM",
    icon: CreditCard,
  },
  {
    title: "Portal & Technical Support",
    description: "Help with student ID credentials, parent portal login issues, and report card downloads.",
    contact: "portal-support@sarahacademy.edu.ng",
    phone: "+234 (0) 800 SARAH TECH",
    hours: "Monday – Saturday: 8:00 AM – 5:00 PM",
    icon: Laptop,
  },
  {
    title: "General School Helpdesk",
    description: "General questions, visitor appointments, lost and found, and general enquiries.",
    contact: "info@sarahacademy.edu.ng",
    phone: "+234 (0) 800 SARAH SCH",
    hours: "Monday – Friday: 7:30 AM – 4:30 PM",
    icon: HelpCircle,
  },
];
