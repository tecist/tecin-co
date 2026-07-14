export const site = {
  name: "Rehan Ali",
  role: "IT Infrastructure Engineer",
  tagline: "Freelance Remote IT Support & Cloud Infrastructure",
  intro:
    "I'm a freelance IT engineer helping small businesses and startups keep their Microsoft 365, Azure, and server infrastructure running smoothly — without the cost of a full-time hire.",
  location: "Dubai, UAE",
  email: "rehan.pk@outlook.com",
  phone: "+971-55-7355-103",
  whatsapp: "971557355103",
  url: "https://rehanali.dev",
  availability: "Available for new projects",
  yearsExperience: 8,
};

export const socialLinks = [
  { label: "Upwork", href: "https://upwork.com", icon: "Briefcase" },
  { label: "Fiverr", href: "https://fiverr.com", icon: "Zap" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "Linkedin" },
  { label: "GitHub", href: "https://github.com", icon: "Github" },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  { value: 8, suffix: "+", label: "Years in IT infrastructure" },
  { value: 60, suffix: "+", label: "Projects delivered remotely" },
  { value: 300, suffix: "+", label: "End users supported" },
  { value: 24, suffix: "hr", label: "Typical first response time" },
];

export const heroTech = [
  "Microsoft 365",
  "Azure",
  "VMware",
  "Windows Server",
  "Linux",
  "Veeam",
  "Active Directory",
  "PowerShell",
];

export type Service = {
  id: string;
  icon: string;
  title: string;
  description: string;
  points: string[];
  startingAt: string;
};

export const services: Service[] = [
  {
    id: "remote-it-support",
    icon: "Headset",
    title: "Remote IT Support",
    description:
      "On-demand troubleshooting for your team, billed hourly or as a small monthly retainer.",
    points: [
      "Desktop & user support",
      "Server troubleshooting",
      "Network issues",
      "Ongoing monitoring",
    ],
    startingAt: "From $25/hr",
  },
  {
    id: "microsoft-365-setup",
    icon: "Mail",
    title: "Microsoft 365 Setup & Support",
    description:
      "Get Microsoft 365 configured correctly the first time, or fixed if it's currently a mess.",
    points: [
      "Tenant setup & migration",
      "Exchange Online",
      "Teams & SharePoint",
      "Intune device management",
    ],
    startingAt: "From $200/project",
  },
  {
    id: "azure-cloud-support",
    icon: "Cloud",
    title: "Azure Cloud Support",
    description:
      "Provisioning, cost cleanup, and day-to-day management of your Azure environment.",
    points: [
      "VM provisioning & management",
      "Identity & access",
      "Cost optimization",
      "Monitoring & alerts",
    ],
    startingAt: "From $30/hr",
  },
  {
    id: "windows-server-admin",
    icon: "Server",
    title: "Windows Server Administration",
    description:
      "Keep Active Directory, DNS, and file services healthy without an in-house admin.",
    points: [
      "Active Directory & Group Policy",
      "DNS / DHCP",
      "File & print services",
      "Patch management",
    ],
    startingAt: "From $25/hr",
  },
  {
    id: "vmware-virtualization",
    icon: "Layers",
    title: "VMware Virtualization",
    description:
      "Hands-on ESXi support — from a single host to a small virtualized fleet.",
    points: [
      "ESXi setup & support",
      "VM deployment",
      "Performance tuning",
      "Troubleshooting",
    ],
    startingAt: "From $30/hr",
  },
  {
    id: "backup-disaster-recovery",
    icon: "ShieldCheck",
    title: "Backup & Disaster Recovery",
    description:
      "A backup strategy you can actually trust when something goes wrong.",
    points: [
      "Veeam setup & monitoring",
      "Recovery testing",
      "Retention planning",
      "Continuity documentation",
    ],
    startingAt: "From $150/project",
  },
];

export const skills = [
  { name: "Microsoft 365", level: 95 },
  { name: "Azure", level: 88 },
  { name: "VMware ESXi", level: 90 },
  { name: "Windows Server", level: 92 },
  { name: "Active Directory", level: 90 },
  { name: "PowerShell", level: 80 },
  { name: "Veeam Backup", level: 85 },
  { name: "Linux", level: 75 },
  { name: "Networking (TCP/IP, VPN)", level: 82 },
];

export const process = [
  {
    step: "01",
    title: "Discovery Call",
    description:
      "A free 20-minute call to understand your setup, your pain points, and whether I'm the right fit.",
    icon: "PhoneCall",
  },
  {
    step: "02",
    title: "Proposal & Scope",
    description:
      "You get a clear, written scope of work and a price — hourly or fixed — before anything starts.",
    icon: "FileText",
  },
  {
    step: "03",
    title: "Remote Work",
    description:
      "I connect securely and get to work, with regular updates so you're never wondering what's happening.",
    icon: "Terminal",
  },
  {
    step: "04",
    title: "Handover & Support",
    description:
      "You get clear documentation of what changed, plus follow-up support if anything comes up.",
    icon: "CheckCircle2",
  },
];

export const experience = [
  {
    company: "CubeZix Technologies",
    role: "System Administrator",
    period: "Feb 2022 - Present",
    current: true,
    achievements: [
      "Manage VMware ESXi environment supporting 50+ production virtual machines.",
      "Administer Microsoft 365 and Azure services.",
      "Manage Active Directory, DNS, DHCP and Group Policy.",
      "Support Exchange Online migrations.",
      "Maintain Veeam backup and disaster recovery.",
      "Provide L2/L3 support for 300+ users.",
    ],
  },
  {
    company: "Future Focus InfoTech",
    role: "IT Engineer L2 Support",
    period: "Jan 2020 - Oct 2021",
    current: false,
    achievements: [
      "Windows and Linux server deployment.",
      "Active Directory administration.",
      "Enterprise hardware deployment.",
      "Data center migration support.",
    ],
  },
  {
    company: "Intelligent Business Technologies",
    role: "IT Support Engineer",
    period: "Dec 2016 - Nov 2019",
    current: false,
    achievements: [
      "Hardware/software troubleshooting.",
      "Network support.",
      "Backup management.",
      "Helpdesk operations.",
    ],
  },
];

export const techStack = [
  {
    category: "Microsoft",
    items: ["Microsoft 365", "Azure", "Exchange Online", "SharePoint", "Teams", "Intune"],
  },
  {
    category: "Infrastructure",
    items: ["Windows Server", "Linux", "Active Directory", "DNS", "DHCP", "Group Policy"],
  },
  {
    category: "Virtualization",
    items: ["VMware ESXi", "Hyper-V"],
  },
  {
    category: "Backup",
    items: ["Veeam Backup & Replication"],
  },
  {
    category: "Automation",
    items: ["PowerShell"],
  },
  {
    category: "Networking",
    items: ["TCP/IP", "VPN", "Routing", "Switching"],
  },
];

export const portfolio = [
  {
    id: "vmware-infrastructure-rebuild",
    title: "Rebuilding a Small Business's VMware Infrastructure",
    tag: "Virtualization",
    client: "Manufacturing company, 80 employees",
    challenge:
      "Their virtualization host was running near capacity with no monitoring and a backup strategy nobody trusted.",
    solution:
      "Restructured the ESXi environment across 50+ VMs, added proper monitoring, and rebuilt the backup strategy with Veeam.",
    result: "Zero unplanned downtime in the 12 months since, with tested, verified backups.",
    icon: "Layers",
  },
  {
    id: "microsoft-365-migration",
    title: "Migrating a Growing Team to Microsoft 365",
    tag: "Cloud Migration",
    client: "Marketing agency, 25 employees",
    challenge:
      "Email and file sharing were scattered across personal accounts and a dying on-prem server.",
    solution:
      "Planned and executed a clean Microsoft 365 migration — mailboxes, SharePoint, Teams — with zero data loss.",
    result: "The whole team was live on Microsoft 365 within a single weekend, no lost emails or files.",
    icon: "Mail",
  },
  {
    id: "backup-disaster-recovery-plan",
    title: "Building a Disaster Recovery Plan From Scratch",
    tag: "Business Continuity",
    client: "Logistics startup, 15 employees",
    challenge:
      "No backup plan existed at all — a single drive failure would have meant losing everything.",
    solution:
      "Implemented Veeam backups with offsite replication and documented a clear recovery runbook.",
    result: "A tested, working recovery plan the founder can actually explain to investors.",
    icon: "ShieldCheck",
  },
];

export const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Operations Manager, Manufacturing Co.",
    quote:
      "Rehan rebuilt our entire virtualization setup remotely and explained every step in plain English. Our systems haven't gone down since.",
  },
  {
    name: "James Okafor",
    role: "Founder, Logistics Startup",
    quote:
      "We had zero backup strategy before working with him. Now I actually sleep at night knowing our data is protected.",
  },
  {
    name: "Priya Nair",
    role: "Agency Owner",
    quote:
      "Fast, clear communication, and he migrated our whole team to Microsoft 365 over a single weekend with no disruption.",
  },
];

export const pricingPlans = [
  {
    name: "Hourly Support",
    description: "Pay only for the time you need — great for one-off issues.",
    price: "$25 - $35",
    unit: "/ hour",
    icon: "Clock",
    featured: false,
    features: [
      "No minimum commitment",
      "Remote troubleshooting",
      "Billed in 15-minute increments",
    ],
  },
  {
    name: "Monthly Retainer",
    description: "Ongoing support for businesses that need a dependable go-to.",
    price: "$400+",
    unit: "/ month",
    icon: "CalendarClock",
    featured: true,
    features: [
      "Priority response time",
      "Proactive monitoring",
      "Monthly health report",
      "Discounted hourly rate for extra work",
    ],
  },
  {
    name: "Fixed-Scope Project",
    description: "A defined project — migration, setup, or assessment — for a fixed price.",
    price: "Custom quote",
    unit: "",
    icon: "FileCheck2",
    featured: false,
    features: [
      "Clear scope before work begins",
      "Fixed price, no surprises",
      "Documentation included",
    ],
  },
];

export const faqs = [
  {
    question: "Do you work with businesses outside Dubai?",
    answer:
      "Yes — nearly all of my work is fully remote, and I support clients worldwide across different time zones.",
  },
  {
    question: "How do we get started?",
    answer:
      "Book a free 20-minute discovery call. We'll talk through your setup and I'll send a clear proposal with pricing before any work begins.",
  },
  {
    question: "Do you offer ongoing support or only one-off fixes?",
    answer:
      "Both. Some clients need a single project done well, others prefer an ongoing monthly retainer so they always have someone to call. I do either.",
  },
  {
    question: "What if I already have an IT person or team?",
    answer:
      "That's fine — I often work alongside internal teams for specialist tasks like Azure, VMware, or Microsoft 365 migrations they don't handle day to day.",
  },
  {
    question: "How do you handle access to our systems securely?",
    answer:
      "I use secure remote access tools and least-privilege accounts, and I'm happy to work within your existing security policies and sign an NDA if required.",
  },
  {
    question: "What are your payment terms?",
    answer:
      "Hourly work is invoiced weekly or bi-weekly. Fixed-scope projects are typically split — a deposit to start, and the balance on completion.",
  },
];

export const blogCategories = [
  "Microsoft 365",
  "Azure",
  "VMware",
  "Windows Server",
  "Cybersecurity",
  "PowerShell",
  "Backup",
  "Networking",
];

export const blogPosts = [
  {
    id: "microsoft-365-security-checklist",
    category: "Microsoft 365",
    title: "A Practical Microsoft 365 Security Checklist for Small Businesses",
    excerpt:
      "The essential settings every small business should review to reduce the risk of a Microsoft 365 account compromise.",
    readTime: "6 min read",
  },
  {
    id: "azure-vm-cost-optimization",
    category: "Azure",
    title: "5 Ways to Reduce Azure VM Costs Without Losing Performance",
    excerpt:
      "Practical, low-risk changes that lower your Azure compute bill while keeping workloads responsive.",
    readTime: "5 min read",
  },
  {
    id: "vmware-esxi-health-check",
    category: "VMware",
    title: "How to Run a VMware ESXi Health Check Before It Becomes a Problem",
    excerpt:
      "A step-by-step routine for catching virtualization issues before they affect production workloads.",
    readTime: "7 min read",
  },
  {
    id: "active-directory-group-policy-mistakes",
    category: "Windows Server",
    title: "Common Active Directory and Group Policy Mistakes to Avoid",
    excerpt:
      "The recurring configuration issues that quietly create security gaps in Windows Server environments.",
    readTime: "6 min read",
  },
  {
    id: "veeam-backup-best-practices",
    category: "Backup",
    title: "Veeam Backup Best Practices for Business Continuity",
    excerpt:
      "How to structure a backup strategy that actually holds up during a real recovery scenario.",
    readTime: "5 min read",
  },
  {
    id: "powershell-scripts-sysadmins",
    category: "PowerShell",
    title: "5 PowerShell Scripts Every System Administrator Should Have",
    excerpt:
      "Time-saving scripts for user management, reporting, and routine infrastructure maintenance.",
    readTime: "4 min read",
  },
];

export const serviceOptions = [
  "Remote IT Support",
  "Microsoft 365 Setup & Support",
  "Azure Cloud Support",
  "Windows Server Administration",
  "VMware Virtualization",
  "Backup & Disaster Recovery",
  "Something else",
];
