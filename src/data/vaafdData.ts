import { Program, Campaign, Testimonial, NewsArticle } from '../types';

export const ORG_INFO = {
  name: "Vision Awake Africa For Development",
  shortName: "VAAFD",
  tagline: "A Sustainable Answer to Liberia's Future",
  mission: "Our goal is to form long-term partnerships with the community, donors, and volunteers to produce sustainable social, environmental and economic initiatives that result in the eradication of poverty.",
  vision: "A resilient Liberia where every child has access to quality education, healthcare, and equal opportunity to thrive free from poverty.",
  founderQuote: "The civil war did such a level of destruction due to illiteracy. Therefore, for no such occurrence to happen again, there is a need for an educational crusade in Liberia.",
  founderName: "Karrus Hayes",
  founderRole: "Founder & Director, Carolyn A. Miller School & VAAFD",
  founderBio: "Karrus Hayes established the Carolyn A. Miller Elementary School (CAMES) in 2003 on the Buduburam Refugee Camp in Ghana to serve war-displaced Liberian refugee children. Upon returning to Monrovia, Liberia, he expanded VAAFD to build a permanent educational haven for thousands of underserved youths.",
  foundedYear: "2003",
  address: "Paynesville, Monrovia, Liberia",
  phone: ["(+231) 7781 58517", "(+231) 7779 22484"],
  email: "contact@vaafd.org",
  impactStats: {
    volunteers: "100+",
    donationsRaised: "$100,000+",
    projectsCompleted: "14+",
    childrenEducated: "1,000+",
    livesImpacted: "2,500+",
    schoolsFounded: "2"
  }
};

export const PROGRAMS: Program[] = [
  {
    id: "education",
    title: "Tuition-Free Quality Education",
    shortDesc: "Operating primary and secondary schools in Liberia and Ghana offering completely free, quality education to war-affected and underprivileged children.",
    fullDesc: "Carolyn A. Miller Elementary School (CAMES) was founded in 2003 with the mission to provide a tuition-free education for the neediest children living on the Buduburam Refugee Camp in Ghana. Today in Monrovia, we provide comprehensive K-12 instruction, textbooks, nutritious daily meals, and uniforms for hundreds of children who would otherwise be denied schooling due to poverty.",
    category: "education",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
    iconName: "GraduationCap",
    stats: "1,000+ Students",
    statsLabel: "Educated Tuition-Free",
    beneficiaries: "Children aged 4–18 in Paynesville & Monrovia",
    location: "Monrovia, Liberia & Buduburam, Ghana",
    features: [
      "Tuition-free K-12 curriculum with certified teachers",
      "Free textbooks, school uniforms, and learning materials",
      "Daily school nutrition meal program",
      "Remedial reading and literacy bootcamps"
    ]
  },
  {
    id: "orphan-care",
    title: "Orphan & Vulnerable Child Care",
    shortDesc: "Providing shelter, trauma-informed psychosocial support, and complete welfare for unaccompanied minors and war orphans.",
    fullDesc: "Because of civil conflict, disease, and deep economic distress, many children have been left without parental care. VAAFD steps in as a loving family safety net, offering safe shelter, nutritious meals, healthcare, trauma counseling, and mentorship to ensure no child is left behind.",
    category: "orphan-care",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop",
    iconName: "HeartHandshake",
    stats: "250+ Children",
    statsLabel: "Housed & Supported",
    beneficiaries: "Orphaned & unaccompanied youth",
    location: "Paynesville Center, Liberia",
    features: [
      "Safe residential housing & daily nutritious meals",
      "Trauma counseling and emotional wellness care",
      "Dedicated legal protection and child advocacy",
      "Family reintegration & foster support programs"
    ]
  },
  {
    id: "health-sanitation",
    title: "Health Education & Medical Relief",
    shortDesc: "Combating preventable illnesses, HIV/AIDS stigma, malaria, and promoting hygiene across underserved settlements.",
    fullDesc: "Health concerns severely plague marginalized communities with limited access to clinics. VAAFD runs community health outposts, distributes malaria nets and essential medicines, conducts HIV/AIDS awareness workshops, and hosts regular health checkups for all enrolled students.",
    category: "health",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1200&auto=format&fit=crop",
    iconName: "Activity",
    stats: "3,000+ Screenings",
    statsLabel: "Free Health Checkups",
    beneficiaries: "Students, families & community members",
    location: "Montserrado County, Liberia",
    features: [
      "Annual preventative student medical & dental checkups",
      "Malaria prevention, medication & bed net distributions",
      "HIV/AIDS education and destigmatization seminars",
      "Emergency medical relief fund for critical cases"
    ]
  },
  {
    id: "water-sanitation",
    title: "Clean Water & WASH Initiatives",
    shortDesc: "Installing solar boreholes, clean water filtration stations, and hygienic sanitation blocks for schools and villages.",
    fullDesc: "Fresh, safe drinking water is still a luxury for thousands in informal settlements. Our WASH initiatives build durable deep-water wells, water purification points, and modern sanitary facilities, drastically reducing waterborne diseases and school absenteeism.",
    category: "water",
    image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=1200&auto=format&fit=crop",
    iconName: "Droplets",
    stats: "8+ Wells",
    statsLabel: "Clean Water Stations Built",
    beneficiaries: "5,000+ villagers & school children",
    location: "Monrovia Suburbs & Rural Outposts",
    features: [
      "Deep solar-powered water well installations",
      "School sanitation and private gender-separate restrooms",
      "Community WASH & hygiene stewardship training",
      "Water testing and ongoing maintenance committees"
    ]
  },
  {
    id: "vocational-training",
    title: "Vocational Skills & Microfinance",
    shortDesc: "Empowering youth and mothers with practical trade skills, digital literacy, and micro-grants to build sustainable livelihoods.",
    fullDesc: "Microfinance is known as 'lending for the poor'. It empowers individuals living in extreme poverty to earn sustainable income. Paired with vocational training in tailoring, carpentry, soap making, and IT skills, we help families break the cycle of generational poverty and achieve economic independence.",
    category: "vocational",
    image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=1200&auto=format&fit=crop",
    iconName: "Briefcase",
    stats: "400+ Graduates",
    statsLabel: "Trained & Micro-Funded",
    beneficiaries: "Young adults, single mothers & youth",
    location: "Paynesville Vocational Hub",
    features: [
      "Hands-on trade courses: Tailoring, Carpentry, Soap Making",
      "Basic Computer & Digital Literacy Training",
      "Seed capital micro-grants for women entrepreneurs",
      "Financial literacy and business planning mentorship"
    ]
  },
  {
    id: "agriculture",
    title: "Sustainable Agriculture & Food Security",
    shortDesc: "Revitalizing school farming and community agriculture to feed students and generate local economic self-reliance.",
    fullDesc: "Before the civil war, agriculture was the main source of livelihood for the great majority of Liberians. VAAFD runs school farm gardens cultivating cassava, plantains, vegetables, and poultry to provide farm-to-table food for students while teaching regenerative farming practices.",
    category: "agriculture",
    image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb22509?q=80&w=1200&auto=format&fit=crop",
    iconName: "Sprout",
    stats: "15 Acres",
    statsLabel: "Farmed for School Nutrition",
    beneficiaries: "Students, local farming families",
    location: "Paynesville & Rural Farm Plots",
    features: [
      "School vegetable & crop gardens for student lunches",
      "Regenerative organic farming & soil enrichment training",
      "Seed bank distribution for rural farming families",
      "Community poultry & small livestock cooperatives"
    ]
  }
];

export const CAMPAIGNS: Campaign[] = [
  {
    id: "build-a-school-home",
    slug: "build-a-school-home",
    title: "Build a School Home",
    tagline: "Creating a Permanent Sanctuary for Education & Hope in Monrovia",
    description: "Help us build a permanent residence for our Monrovia campus, ensuring a stable, safe, and secure learning environment for generations of students to come.",
    longDescription: "For years, the Carolyn A. Miller School in Monrovia has operated in rented and temporary facilities, facing rent hikes and risk of displacement. This campaign aims to construct a permanent multi-story school campus including 12 spacious classrooms, a library, computer center, sanitation block, and a dedicated residential shelter for war-orphaned children. Your donation directly funds bricks, cement, roofing, and safe solar electrification.",
    raised: 1500,
    goal: 18000,
    donorsCount: 42,
    category: "Infrastructure",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1200&auto=format&fit=crop",
    isUrgent: true,
    featured: true,
    impactMetrics: [
      { label: "Classrooms Planned", value: "12" },
      { label: "Students Accommodated", value: "500+" },
      { label: "Permanent Ownership", value: "100%" }
    ],
    updates: [
      {
        date: "March 2025",
        title: "Land Survey & Foundation Prep Complete",
        content: "We have finalized the architectural blueprints and cleared the plot in Paynesville. Foundation trenching is underway with local community volunteers."
      }
    ]
  },
  {
    id: "buy-a-school-bus",
    slug: "buy-a-school-bus",
    title: "Buy a School Bus",
    tagline: "Bridging the Distance: Connecting Isolated Children to Classrooms",
    description: "We aim to purchase a sturdy 30-passenger school bus to reach children in remote settlements, removing dangerous walking commutes and transportation barriers.",
    longDescription: "Many young students walk over 2 to 3 hours along dangerous highways and flooded paths every morning just to reach school. During the rainy season, attendance drops dramatically due to impassable routes. Acquiring a dedicated, reliable school bus will provide safe, free daily transit for over 150 isolated children, ensuring zero missed school days.",
    raised: 1000,
    goal: 18000,
    donorsCount: 28,
    category: "Transportation",
    image: "https://images.unsplash.com/photo-1557223562-6c77ef16210f?q=80&w=1200&auto=format&fit=crop",
    featured: true,
    impactMetrics: [
      { label: "Daily Bus Routes", value: "4" },
      { label: "Kids Transported Daily", value: "150+" },
      { label: "Travel Time Cut By", value: "70%" }
    ],
    updates: [
      {
        date: "February 2025",
        title: "Vehicle Vendor Quotes Secured",
        content: "We have identified reliable reconditioned 30-passenger Toyota Coaster buses from vetted humanitarian vehicle suppliers."
      }
    ]
  },
  {
    id: "maintain-the-campus",
    slug: "maintain-the-campus",
    title: "Maintain the Campus",
    tagline: "Keeping Our School Safe, Clean, and Welcoming Every Single Day",
    description: "Your support covers critical structural repairs, roof leak fixes, generator fuel, sanitation maintenance, and security to keep our children safe.",
    longDescription: "Liberia's tropical climate brings intense rainfall and humidity that takes a heavy toll on educational facilities. Regular maintenance is vital to prevent electrical hazards, repair roof leaks, maintain water pumps, and repaint classrooms. This fund guarantees a functioning, dignified school environment year-round.",
    raised: 1600,
    goal: 18000,
    donorsCount: 35,
    category: "Operations",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop",
    isUrgent: true,
    featured: true,
    impactMetrics: [
      { label: "Safety Rating", value: "100%" },
      { label: "Daily Operational Power", value: "24/7" },
      { label: "Classrooms Repaired", value: "8" }
    ],
    updates: [
      {
        date: "January 2025",
        title: "Roof Leak Sealing Completed for Grade 3 & 4 Classrooms",
        content: "Thanks to recent micro-donations, we replaced corroded zinc roofing sheets over two primary wings before the rainy season."
      }
    ]
  },
  {
    id: "upgrade-learning",
    slug: "upgrade-learning",
    title: "Upgrade Learning & STEM Lab",
    tagline: "Empowering Next-Generation Thinkers with Science & Technology",
    description: "Give Liberian students access to modern science lab apparatus, updated curriculum textbooks, and digital computer workstations to foster innovation.",
    longDescription: "Quality education requires modern tools. We are creating Monrovia's premier community STEM lab with 20 desktop computers, microscopes, chemistry glassware, solar power backups, and high-speed internet. This bridges the digital divide and opens global opportunities for students.",
    raised: 1100,
    goal: 18000,
    donorsCount: 22,
    category: "STEM & Technology",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    featured: false,
    impactMetrics: [
      { label: "Computers Needed", value: "20" },
      { label: "STEM Lab Kits", value: "50" },
      { label: "Students Trained/Yr", value: "400+" }
    ],
    updates: [
      {
        date: "December 2024",
        title: "First 5 Donated Laptops Configured",
        content: "Our IT volunteers configured introductory coding and digital literacy software on the initial batch of workstations."
      }
    ]
  },
  {
    id: "build-school-for-poor-children",
    slug: "build-school-for-poor-children",
    title: "Build School For Poor Children",
    tagline: "Expanding Tuition-Free Classrooms to Rural Montserrado County",
    description: "Create additional satellite classrooms in marginalized peri-urban zones to guarantee zero child is turned away due to lack of space.",
    longDescription: "Every academic year, over 300 vulnerable children have to be placed on a waiting list because our main building is at maximum capacity. This expansion campaign builds 4 additional modular classrooms equipped with desks, whiteboards, and teacher resources.",
    raised: 1000,
    goal: 18000,
    donorsCount: 19,
    category: "Expansion",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1200&auto=format&fit=crop",
    featured: false,
    impactMetrics: [
      { label: "New Classrooms", value: "4" },
      { label: "Waitlist Eradicated", value: "300+" },
      { label: "New Teachers Hired", value: "6" }
    ],
    updates: [
      {
        date: "November 2024",
        title: "Community Land Donation Finalized",
        content: "Local community elders officially deeded an adjacent parcel of land to VAAFD for educational expansion."
      }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "mary-johnson",
    name: "Mary Johnson",
    role: "Senior Student & Aspiring Nurse",
    affiliation: "Carolyn A. Miller School, Monrovia",
    quote: "Before joining the Carolyn A. Miller School, I had never stepped foot in a classroom. Today, I can read, write, and dream of becoming a nurse. The free education and the kind teachers have changed my life. I’m so grateful to VAAFD for giving me a future.",
    image: "/IMG-20230321-WA0002.jpg",
    location: "Paynesville, Liberia"
  },
  {
    id: "emmanuel-tamba",
    name: "Emmanuel Tamba",
    role: "Vocational Program Graduate & Carpenter",
    affiliation: "VAAFD Vocational Center",
    quote: "After the war, I had no skills and no hope for steady work. VAAFD's vocational training gave me carpentry tools and the business mentorship to start my own workshop. Now I support my younger siblings and send them to school.",
    image: "/received_243067154919694-1024x768.jpeg",
    location: "Monrovia, Liberia"
  },
  {
    id: "clarice-mensah",
    name: "Clarice Mensah",
    role: "Parent & Community Organizer",
    affiliation: "Buduburam & Paynesville Outreach",
    quote: "Without VAAFD, my three children would have been on the streets selling cold water instead of learning. Seeing them return home every day with books in their hands brings tears of joy to my eyes.",
    image: "/cames2.jpg",
    location: "Buduburam / Monrovia"
  }
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: "annual-graduation-2025",
    title: "Celebrating the Class of 2025: 48 Scholars Graduate Tuition-Free",
    slug: "celebrating-class-of-2025-graduation",
    date: "May 20, 2025",
    category: "Education",
    readTime: "4 min read",
    author: "Karrus Hayes",
    image: "/received_243067154919694-1024x768.jpeg",
    excerpt: "Dozens of young Liberian men and women walked across the graduation stage, marking another monumental milestone for Carolyn A. Miller School.",
    content: [
      "Forty-eight high school seniors received their diplomas in front of proud parents, teachers, and community leaders in Paynesville.",
      "Over 65% of this year's graduating cohort have already been accepted into local universities and vocational academies with the help of VAAFD transition scholarships."
    ]
  },
  {
    id: "solar-water-well-commissioned",
    title: "New Solar-Powered Deep Well Brings Clean Water to 2,000 Residents",
    slug: "new-solar-powered-deep-well-commissioned",
    date: "April 14, 2025",
    category: "WASH",
    readTime: "3 min read",
    author: "VAAFD Field Team",
    image: "/cames2.jpg",
    excerpt: "A newly drilled 120-meter borehole now delivers fresh, filtered drinking water directly to the school campus and surrounding families.",
    content: [
      "Access to clean water is a fundamental human right. Before this borehole was installed, children walked two miles every morning with heavy jerrycans.",
      "The solar pump system operates without fuel costs, delivering up to 10,000 liters of potable water daily."
    ]
  },
  {
    id: "stem-lab-launch",
    title: "Monrovia Youth Embrace Technology with New Computer Learning Hub",
    slug: "stem-lab-launch-monrovia",
    date: "March 02, 2025",
    category: "Technology",
    readTime: "5 min read",
    author: "Educational Coordinator",
    image: "/IMG-20230321-WA0002.jpg",
    excerpt: "Students at CAMES are coding their first web pages and exploring science simulations through newly deployed digital workstations.",
    content: [
      "Bridging the global digital divide starts in the classroom. With new laptops and offline educational servers (Wikipedia, Khan Academy), students are learning skills essential for the 21st century."
    ]
  }
];

export const HOW_TO_HELP_STEPS = [
  {
    step: "01",
    title: "Search & Choose a Cause",
    description: "Explore ongoing projects and find a cause that resonates with your heart. Every dollar is allocated with 100% transparency.",
    icon: "Search"
  },
  {
    step: "02",
    title: "Make a Direct Impact",
    description: "Your gift provides tuition-free schooling, books, nutritious lunches, medical care, and safe shelters for vulnerable children.",
    icon: "Heart"
  },
  {
    step: "03",
    title: "Share Our Mission",
    description: "A single post, email, or conversation in your network can inspire an entire community to join Liberia's educational crusade.",
    icon: "Share2"
  },
  {
    step: "04",
    title: "Sponsor & Advocate",
    description: "Become a monthly partner or sponsor an individual student through their complete high school or vocational journey.",
    icon: "ShieldCheck"
  }
];

export const IMPACT_TIERS = [
  {
    amount: 10,
    title: "Daily Nutrition & Books",
    outcome: "Provides 2 weeks of hot school lunches and notebook supplies for a student in need."
  },
  {
    amount: 25,
    title: "Full Month of Schooling",
    outcome: "Covers 1 month of tuition-free instruction, textbooks, and daily nutritious meals."
  },
  {
    amount: 50,
    title: "Uniform & Medical Kit",
    outcome: "Provides a complete custom school uniform, sturdy shoes, and annual medical screening."
  },
  {
    amount: 100,
    title: "Full Semester Scholarship",
    outcome: "Sponsors an entire semester of comprehensive education, learning materials, and health care."
  },
  {
    amount: 250,
    title: "Classroom Tech & STEM Kit",
    outcome: "Funds science laboratory apparatus, digital literacy materials, and library books for 30 students."
  },
  {
    amount: 500,
    title: "Campus Building Hero",
    outcome: "Purchases 100 bags of cement, reinforced steel rebar, and safe roofing materials for the new school home."
  }
];
