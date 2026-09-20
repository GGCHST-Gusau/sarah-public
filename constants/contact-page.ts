import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Building,
  GraduationCap,
  CreditCard,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

export const CONTACT_CHANNELS = [
  {
    id: "phone",
    title: "Call Us Directly",
    description: "Speak directly with our administrative reception during school hours.",
    values: ["+234 813 662 5135", "+234 803 499 8810"],
    actionText: "Call Now",
    actionHref: "tel:08136625135",
    icon: Phone,
  },
  {
    id: "email",
    title: "Email Inquiries",
    description: "Send us an email for general, admissions, or official correspondence.",
    values: ["sarah220@gmail.com", "alhajasara002@gmail.com"],
    actionText: "Send Email",
    actionHref: "mailto:sarah220@gmail.com",
    icon: Mail,
  },
  {
    id: "location",
    title: "Visit Our Campus",
    description: "Zannah Road, Gada Biyu, Gusau, Zamfara State, Nigeria.",
    values: ["Zannah Road, Gada Biyu, Gusau, Zamfara State"],
    actionText: "Get Directions",
    actionHref: "#find-us",
    icon: MapPin,
  },
  {
    id: "whatsapp",
    title: "WhatsApp Chat Support",
    description: "Instant messaging assistance for quick parent and visitor questions.",
    values: ["+234 813 662 5135"],
    actionText: "Chat on WhatsApp",
    actionHref: "https://wa.me/2348136625135",
    icon: MessageSquare,
  },
];

export const OFFICE_HOURS = [
  {
    department: "Main Administrative Office",
    days: "Monday – Friday",
    hours: "8:00 AM – 4:00 PM",
    note: "General enquiries, admissions screening, and document collection.",
  },
  {
    department: "Bursary & Accounts Desk",
    days: "Monday – Friday",
    hours: "8:00 AM – 3:30 PM",
    note: "Fee payment receipts, teller verification, and invoicing.",
  },
  {
    department: "Academic & Head of School Office",
    days: "Tuesday & Thursday (By Appointment)",
    hours: "10:00 AM – 2:00 PM",
    note: "Parent consultations, academic reviews, and curriculum queries.",
  },
  {
    department: "Weekends & National Public Holidays",
    days: "Saturday & Sunday",
    hours: "Closed",
    note: "Urgent matters handled via WhatsApp and official email.",
  },
];

export const CONTACT_FAQS = [
  {
    question: "How do I apply for admission for my child?",
    answer:
      "Admissions are open for Nursery, Primary, Secondary, and Tahfiz sections. You can download the application form from our Resources page or visit the Admissions Office in person. After submitting the completed form with required documents (birth certificate and passport photos), your child will be scheduled for a friendly diagnostic assessment.",
  },
  {
    question: "What are the entry age requirements for Nursery and Primary?",
    answer:
      "For Early Years (Playgroup & Pre-Nursery), children are accepted from age 2. Nursery 1 & 2 accept children ages 3 to 5. For Primary 1 (Basic 1), children should ideally be 5 to 6 years old by the resumption date.",
  },
  {
    question: "Does Sarah Academy offer school bus and transportation services?",
    answer:
      "Yes, we provide safe, monitored school bus transportation along major designated routes across Gusau. You can register for the bus service during enrollment or at the beginning of each academic term through our administrative desk.",
  },
  {
    question: "How does Sarah Academy balance Islamic studies with the secular curriculum?",
    answer:
      "Our daily timetable is carefully engineered so neither Western academic rigor nor Islamic scholarship is compromised. Students cover the full Nigerian NERDC syllabus while receiving daily dedicated periods for Qur'anic recitation (Tajweed), memorization (Tahfiz), Hadith, and Islamic ethics.",
  },
  {
    question: "Can prospective parents book a campus tour before enrolling?",
    answer:
      "Yes! We welcome parents and guardians to tour our classrooms, science laboratories, computer ICT suite, and mosque facilities. Tours are conducted Mondays through Thursdays between 9:00 AM and 1:00 PM by booking in advance through phone, email, or our contact form.",
  },
  {
    question: "What are the approved methods for paying school fees?",
    answer:
      "All tuition and term fees must be paid directly into the designated Sarah Academy bank accounts. Cash is not accepted on campus for security reasons. Official bank payment details and teller verification procedures are available at the Bursary desk.",
  },
];
