import {
  Baby,
  BookOpen,
  GraduationCap,
  BookMarked,
  FileText,
  UserCheck,
  Building,
  CheckCircle2,
  HelpCircle,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  ShieldAlert,
  Compass,
  FileCheck,
  Search,
} from "lucide-react";

/**
 * Global admissions configuration.
 * Change the portalUrl and portalSignInUrl here to update all buttons across the website.
 */
export const ADMISSION_CONFIG = {
  portalUrl: "https://portal.sarahacademy.edu.ng/apply",
  portalSignInUrl: "https://portal.sarahacademy.edu.ng/auth/login",
  currentSession: "2026/2027 Academic Session",
  isApplicationOpen: true,
  applicationDeadline: "Open for 2026/2027 Session",
  verificationRequired: true,
  verificationLocation: "Sarah Academy Campus, Zannah Road, Gada Biyu, Gusau, Zamfara State",
  officeHours: "Monday – Friday: 8:00 AM – 3:30 PM",
  admissionsEmail: "admissions@sarahacademy.edu.ng",
  admissionsPhone: "+234 813 662 5135",
  contactPath: "/contact",
};

export const ADMISSION_STAGES = [
  {
    step: "01",
    title: "Explore",
    description: "Learn about our educational sections and find the right programme for your child.",
    icon: Compass,
  },
  {
    step: "02",
    title: "Apply",
    description: "Complete and submit an application through our dedicated admissions portal.",
    icon: FileText,
  },
  {
    step: "03",
    title: "Verify",
    description: "Visit the school with the required documents for verification and complete the next stage of the admission process.",
    icon: UserCheck,
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    number: "01",
    title: "Choose Your Programme",
    description: "Select the appropriate educational section and class for your child.",
    detail: "Choose between Nursery, Primary, Secondary, or our integrated Tahfiz & Islamiyya pathways.",
  },
  {
    number: "02",
    title: "Submit an Application",
    description: "Complete and submit your application through the dedicated online admissions portal.",
    detail: "Enter child and guardian information and upload supporting credentials seamlessly.",
  },
  {
    number: "03",
    title: "Prepare Your Documents",
    description: "Gather the required documents and information needed for verification.",
    detail: "Organize the child's birth certificate, recent passport photos, and previous academic records.",
  },
  {
    number: "04",
    title: "Visit the School",
    description: "Proceed to the school with the required documents for physical verification.",
    detail: "Our admissions committee reviews the physical documents and conducts a friendly learner interaction.",
  },
  {
    number: "05",
    title: "Receive a Decision",
    description: "Your application will be reviewed and you will be informed of the outcome and any next steps.",
    detail: "Check your status on the portal or receive an official admission letter and enrollment invoice.",
  },
];

export const WHO_CAN_APPLY_SECTIONS = [
  {
    id: "nursery",
    title: "Nursery",
    tagline: "Early Childhood Foundation",
    description: "For young children beginning their formal educational journey.",
    curriculum: "Play-based inquiry, early phonics, numeracy, social skills, and foundational Islamic etiquette.",
    icon: Baby,
  },
  {
    id: "primary",
    title: "Primary",
    tagline: "Basic Education (Basic 1 – 6)",
    description: "For children developing strong academic foundations, confidence, and essential life skills.",
    curriculum: "NERDC national core curriculum, STEM curiosity, English fluency, mathematics, Arabic & Tahfiz.",
    icon: BookOpen,
  },
  {
    id: "secondary",
    title: "Secondary",
    tagline: "Junior & Senior Secondary (JSS 1 – SSS 3)",
    description: "For students progressing toward higher education, future opportunities, and responsible adulthood.",
    curriculum: "Sciences, Arts, Commercial tracks, critical thinking, practical labs, and WAEC/NECO/JAMB mastery.",
    icon: GraduationCap,
  },
  {
    id: "islamiyya",
    title: "Islamiyya",
    tagline: "Tahfiz & Islamic Scholarship",
    description: "For students seeking structured Islamic education alongside their learning.",
    curriculum: "Qur'anic memorization (Hifz), Tajweed, Fiqh, Hadith, Seerah, and communicative Arabic language.",
    icon: BookMarked,
  },
];

export const ADMISSION_REQUIREMENTS = [
  {
    group: "Child Information",
    description: "Basic personal, developmental, and previous educational background of the child.",
    items: [
      "Child's full legal name",
      "Date of birth and place of birth",
      "Gender and nationality",
      "Previous school name and last class attended (where applicable)",
      "Special educational or health considerations (if any)",
    ],
  },
  {
    group: "Parent / Guardian Information",
    description: "Primary contact and residential details for school-home communication.",
    items: [
      "Parent or legal guardian's full name",
      "Active telephone number (WhatsApp enabled preferred)",
      "Valid email address for official notices",
      "Residential address in or around Gusau",
      "Alternative emergency contact person and phone number",
    ],
  },
  {
    group: "Supporting Documents",
    description: "Mandatory verification credentials to be uploaded or presented physically.",
    items: [
      "Official birth certificate or statutory declaration of age",
      "Recent passport-sized photographs of the child",
      "Previous school academic reports / transfer certificate (for Primary & Secondary applicants)",
      "Immunization or medical history records (Early Years / Nursery)",
    ],
  },
];

export const APPLICATION_PROCESS_STEPS = [
  {
    step: 1,
    title: "Visit the application portal",
    description: "Access the school's secure online application system on your mobile phone or computer.",
  },
  {
    step: 2,
    title: "Create an account or sign in",
    description: "Register with your parent name, email, and phone, or log in if you already have an account.",
  },
  {
    step: 3,
    title: "Provide your child's information",
    description: "Select the desired programme section, enter the child's profile, and upload required documents.",
  },
  {
    step: 4,
    title: "Complete and submit the application",
    description: "Review all entered information for accuracy and submit to receive your unique application reference number.",
  },
  {
    step: 5,
    title: "Follow instructions after submission",
    description: "Take note of your verification slip and proceed to the school premises during official verification hours.",
  },
];

export const AFTER_YOU_APPLY_STEPS = [
  {
    number: "01",
    title: "Application Submitted",
    description: "Your application is submitted through the online portal and assigned an official tracking reference.",
    status: "Completed Online",
  },
  {
    number: "02",
    title: "Application Received",
    description: "The school admissions desk acknowledges receipt and verifies uploaded digital credentials.",
    status: "School Processing",
  },
  {
    number: "03",
    title: "Physical Verification",
    description: "You visit the school campus with original documents for document validation and child placement assessment.",
    status: "Campus Visit",
  },
  {
    number: "04",
    title: "Application Review",
    description: "The school admissions committee reviews the assessment results and supporting documents.",
    status: "Academic Review",
  },
  {
    number: "05",
    title: "Admission Decision",
    description: "You are informed of the admission outcome and receive enrollment guidance and fee instructions.",
    status: "Final Decision",
  },
];

export const ADMISSIONS_FAQS = [
  {
    question: "When can I apply?",
    answer:
      "Applications depend on the school's current admission session and class availability. For the current session, admissions are open. We encourage families to apply early as class spaces in each educational section are capped to maintain optimal teacher-to-student ratios.",
  },
  {
    question: "Can I apply for more than one child?",
    answer:
      "Yes. Parents and guardians can apply for multiple children through our dedicated application system. You can submit applications for siblings across different educational sections (e.g. Nursery, Primary, Secondary, and Islamiyya) seamlessly.",
  },
  {
    question: "Do I need a separate account for each child?",
    answer:
      "No. One parent/guardian account is used to manage applications for all your children. You do not need to create multiple accounts or remember different login credentials for each child.",
  },
  {
    question: "What documents do I need?",
    answer:
      "Generally, you will need the child's birth certificate or age declaration, recent passport photographs, and previous school academic reports (for Primary and Secondary entrants). Exact requirements may vary depending on the programme or class being applied for.",
  },
  {
    question: "Do I need to visit the school after applying?",
    answer:
      "Yes. Physical verification is an essential part of the admission process. After submitting your application online, you should visit the school with the child and original supporting documents for verification and a friendly placement interaction.",
  },
  {
    question: "Can I edit my application after submitting it?",
    answer:
      "Once an application has been officially submitted, core details are locked for review. If an update or correction is required, the admissions team can unlock specific sections or you can present the corrections during physical verification.",
  },
  {
    question: "How will I know what happens to my application?",
    answer:
      "You can track the progress of your application by logging into the admissions portal using your parent account. Important updates are also communicated via SMS, email, or WhatsApp using the contact details provided in your application.",
  },
  {
    question: "Who can I contact if I have questions?",
    answer:
      "You can reach out to our Admissions Desk by calling +234 813 662 5135, emailing admissions@sarahacademy.edu.ng, or visiting our campus during working hours (Monday to Friday, 8:00 AM – 3:30 PM).",
  },
];
