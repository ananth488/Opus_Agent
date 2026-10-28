export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQCategory {
  id: string;
  title: string;
  icon: string;
  gradient: string;
  description: string;
  questions: FAQItem[];
}

export const FAQ_DATA: FAQCategory[] = [
  {
    id: "about",
    title: "About Opus Infiniti",
    icon: "🏢",
    gradient: "from-blue-600 to-blue-800",
    description: "Learn more about our company, vision, leadership, and global footprint.",
    questions: [
      {
        id: "about-1",
        question: "What is Opus Infiniti?",
        answer: "Opus Infiniti is a global enterprise software development company specializing in AI-powered digital transformation, SaaS product engineering, ERP solutions, HRMS, and managed IT infrastructure services. With over 20 years of experience, we help enterprises streamline processes, reduce operating costs, and scale effectively."
      },
      {
        id: "about-2",
        question: "What is Opus Infiniti's core business?",
        answer: "Our core business encompasses enterprise software product development (over 20 proprietary SaaS products), bespoke end-to-end IT solutions, AI/ML integration, Robotic Process Automation (RPA), data migration/ETL engineering, and mission-critical cloud hosting and data center services."
      },
      {
        id: "about-3",
        question: "How long has Opus Infiniti been in business?",
        answer: "Opus Infiniti has been delivering high-impact enterprise technology solutions for over 20 years, having successfully completed 100+ large-scale implementations across government bodies, universities, hospitals, logistics conglomerates, and financial institutions."
      },
      {
        id: "about-4",
        question: "Where is Opus Infiniti headquartered?",
        answer: "Opus Infiniti is headquartered in Chennai, India (Registered Office at Kottivakkam, Perungudi, OMR), with international branch offices and corporate entities in the United States (Lewisville, Texas) and Malaysia (Millennium Square, Petaling Jaya, Selangor)."
      },
      {
        id: "about-5",
        question: "What industries does Opus Infiniti serve?",
        answer: "We serve 12+ industry verticals including Government & Public Sector, Railway & Transportation, Higher Education & K-12 Schools, Healthcare & Hospitals, Retail & Supermarkets, Hospitality & Food Services, Manufacturing & Heavy Industries, Logistics & Fleet Management, FinTech & Banking, and Energy & Utilities."
      },
      {
        id: "about-6",
        question: "What is Opus Infiniti's mission?",
        answer: "Our mission is to empower global businesses with robust, intelligent, and scalable software solutions that eliminate operational friction, guarantee statutory compliance, and deliver rapid, verifiable return on investment (averaging 290% ROI within under 4 months)."
      },
      {
        id: "about-7",
        question: "What makes Opus Infiniti different from other IT service providers?",
        answer: "Unlike traditional IT service companies that rely entirely on custom scratch coding or generic off-the-shelf software, Opus Infiniti pairs mature, field-tested proprietary SaaS product accelerators (like emsPLUS, OPUS ERP, and OPUS Data ETL) with bespoke enterprise customization, slashing delivery timelines by up to 60% while ensuring 99.99% operational reliability."
      },
      {
        id: "about-8",
        question: "Does Opus Infiniti have global clients?",
        answer: "Yes, we proudly serve active clients in 11 countries worldwide, including India, Malaysia, Singapore, the United States, Saudi Arabia, the United Arab Emirates, the Philippines, Kenya, Ghana, Cambodia, and Indonesia."
      },
      {
        id: "about-9",
        question: "What is Opus Infiniti's size and footprint?",
        answer: "We have an agile, multidisciplinary team of 50+ senior software engineers, solution architects, AI specialists, and domain analysts across 10+ operational partner countries, maintaining $70M+ in annual client portfolio impact."
      },
      {
        id: "about-10",
        question: "What languages and regions does Opus Infiniti support?",
        answer: "Our platforms and customer success teams provide multi-lingual and multi-currency support customized for Southeast Asia (Malaysia, Singapore, Indonesia, Cambodia), South Asia (India), North America (USA), Middle East (UAE, Saudi Arabia), and Africa (compliant with 54 African jurisdictions)."
      }
    ]
  },
  {
    id: "erp-crm-hrms",
    title: "ERP, CRM, HRMS & Custom Software",
    icon: "⚙️",
    gradient: "from-primary-600 to-primary-800",
    description: "Explore our modular ERP platforms, HR statutory payroll engines, and custom applications.",
    questions: [
      {
        id: "erp-1",
        question: "What ERP solutions does Opus Infiniti offer?",
        answer: "We offer OPUS ERP, an enterprise resource planning platform featuring modular modules for Financial Management, Fixed Asset Registers, Supply Chain & Procurement, Inventory & Warehouse Tracking, Manufacturing & Production Scheduling, Van Sales, and Bills Recoverable."
      },
      {
        id: "erp-2",
        question: "Is Opus Infiniti's ERP suitable for small businesses?",
        answer: "Yes. While OPUS ERP powers giant operations like Indian Railways divisions, it is architected with modular licensing and tiered cloud deployment models that make it affordable, scalable, and easy to deploy for mid-sized and growing SMBs."
      },
      {
        id: "erp-3",
        question: "Can ERP be customized for my industry?",
        answer: "Absolutely. We pride ourselves on deep domain specialization. We have pre-built configurations for manufacturing, public sector accounts, educational campuses, pharmaceutical distributors, multi-outlet hospitality, and steel processing."
      },
      {
        id: "erp-4",
        question: "Does Opus Infiniti provide CRM software?",
        answer: "Yes, our CRM suite integrates customer 360-degree views, omnichannel lead capture, automated quotation pipelines, warranty management (Call My Techy), service ticket ticketing, and automated customer communication via WhatsApp, SMS, and email."
      },
      {
        id: "erp-5",
        question: "What HRMS capabilities are available?",
        answer: "Our HRMSplus platform provides end-to-end employee lifecycle management, including geo-fenced attendance tracking, biometric machine integration, leave workflows, performance appraisals, statutory tax and payroll computation, and employee self-service mobile portals."
      },
      {
        id: "erp-6",
        question: "Can Opus Infiniti build custom business applications?",
        answer: "Yes, our engineering team builds bespoke enterprise software, web applications, microservices architectures, and workflow automations from specification to production deployment and long-term maintenance."
      },
      {
        id: "erp-7",
        question: "Does Opus Infiniti support mobile apps for ERP/CRM?",
        answer: "Yes, all core workflows feature native and responsive mobile interfaces for iOS and Android, allowing field sales representatives, warehouse inspectors, technicians, and executives to transact anywhere in real time."
      },
      {
        id: "erp-8",
        question: "What platforms and technologies are used?",
        answer: "We build using modern, secure technology stacks including React, Next.js, Node.js, Python, Java, PostgreSQL, Oracle, MongoDB, Redis, Docker, Kubernetes, AWS, and Microsoft Azure."
      },
      {
        id: "erp-9",
        question: "Does Opus Infiniti provide integration with third-party systems?",
        answer: "Yes, we build robust RESTful APIs, webhook listeners, and ETL pipelines to seamlessly integrate with SAP, Oracle EBS, Microsoft Dynamics, Tally, payment gateways (Stripe, Razorpay, Billplz), and biometric hardware."
      },
      {
        id: "erp-10",
        question: "How long does it take to implement an ERP or CRM system?",
        answer: "A standard deployment typically takes between 6 to 16 weeks depending on custom integration requirements, data migration volume, and user training scope. Our pre-built modules allow pilot rollouts in as little as 30 days."
      }
    ]
  },
  {
    id: "web-mobile",
    title: "Web Development, CMS & Mobile Apps",
    icon: "🌐",
    gradient: "from-secondary-600 to-secondary-800",
    description: "Digital web experiences, CMS portals, e-commerce stores, and native mobile apps.",
    questions: [
      {
        id: "web-1",
        question: "Does Opus Infiniti offer web development services?",
        answer: "Yes, we develop responsive corporate web portals, customer-facing web apps, e-commerce storefronts, and multi-tenant SaaS dashboards built on modern frameworks like Next.js and Tailwind CSS."
      },
      {
        id: "web-2",
        question: "What types of websites does Opus Infiniti build?",
        answer: "We design and build corporate brand portals, government public grievance systems, university admission and fee portals, multi-vendor e-commerce marketplaces (nxtmal), online bidding systems, and community networking platforms."
      },
      {
        id: "web-3",
        question: "Does Opus Infiniti provide CMS development?",
        answer: "Yes, we develop customized, headless, and traditional Content Management Systems (CMS) that give marketing and administrative teams intuitive drag-and-drop publishing controls without touching code."
      },
      {
        id: "web-4",
        question: "Can Opus Infiniti integrate payment gateways and e-commerce?",
        answer: "Yes, our e-commerce implementations include secure checkouts, digital wallets, bank transfers, credit/debit card processing, automated invoice generation, and tax filing integrations across international jurisdictions."
      },
      {
        id: "web-5",
        question: "Does Opus Infiniti develop native mobile apps?",
        answer: "Yes, we develop both native iOS (Swift) and Android (Kotlin) mobile apps as well as high-performance cross-platform applications using React Native and Flutter."
      },
      {
        id: "web-6",
        question: "Do mobile apps integrate with ERP/CRM/HRMS?",
        answer: "All mobile applications built by Opus Infiniti connect via authenticated APIs directly to backend ERP, CRM, and HRMS systems, ensuring instantaneous synchronization of stock, attendance, sales receipts, and ticket statuses."
      },
      {
        id: "web-7",
        question: "Does Opus Infiniti support progressive web apps (PWAs)?",
        answer: "Yes, we engineer PWAs that provide app-like performance, offline cache capabilities, push notifications, and fast loading on mobile browsers without requiring App Store downloads."
      },
      {
        id: "web-8",
        question: "Does Opus Infiniti offer SEO-friendly web development?",
        answer: "Every website we develop is built according to Google Core Web Vitals standards, with server-side rendering (SSR), optimized OpenGraph metadata, structured JSON-LD schemas, and lighting-fast asset delivery."
      },
      {
        id: "web-9",
        question: "Does Opus Infiniti provide website maintenance and support?",
        answer: "Yes, we offer ongoing 24/7 technical maintenance, security vulnerability patching, performance audits, uptime monitoring, and content updates under defined SLA agreements."
      },
      {
        id: "web-10",
        question: "How does Opus Infiniti ensure website security?",
        answer: "We enforce end-to-end SSL/TLS encryption, automated DDoS mitigation, OWASP top-10 security protections, parameterized database queries to prevent SQL injections, CSRF tokens, and automated weekly security scans."
      }
    ]
  },
  {
    id: "hosting-cloud",
    title: "Hosting, Data Center, Cloud & Managed Services",
    icon: "☁️",
    gradient: "from-teal-600 to-teal-800",
    description: "Enterprise cloud hosting, Tier-4 data centers, colocation, and managed sysadmin services.",
    questions: [
      {
        id: "host-1",
        question: "What hosting services does Opus Infiniti provide?",
        answer: "We offer shared enterprise hosting, high-performance managed VPS, dedicated bare-metal servers, colocation facilities, hybrid cloud architectures, and GPU compute instances for AI workloads."
      },
      {
        id: "host-2",
        question: "Where are Opus Infiniti's data centers located?",
        answer: "Our primary Tier-3 and Tier-4 data centers are strategically located in India (Chennai, Mumbai, Bangalore) and Southeast Asia (Kuala Lumpur, Singapore), offering ultra-low latency routing across Asia, the Middle East, and North America."
      },
      {
        id: "host-3",
        question: "What is the difference between shared, VPS, and dedicated hosting?",
        answer: "Shared hosting shares server resources across multiple accounts for cost efficiency; VPS (Virtual Private Server) provides isolated CPU, RAM, and storage slices; Dedicated Hosting gives your organization an entire physical server for maximum throughput, security, and compliance."
      },
      {
        id: "host-4",
        question: "Does Opus Infiniti offer managed VPS hosting?",
        answer: "Yes, our managed VPS hosting includes automated OS patches, kernel updates, firewall configuration, routine database optimization, and 24/7 server health monitoring by senior sysadmins."
      },
      {
        id: "host-5",
        question: "Does Opus Infiniti offer dedicated servers in India?",
        answer: "Yes, we provide enterprise-grade bare metal servers in India with high bandwidth, dedicated IPv4/IPv6 subnets, ECC memory, NVMe SSD storage arrays, and local data compliance (RBI & CERT-In guidelines)."
      },
      {
        id: "host-6",
        question: "What is colocation, and does Opus Infiniti offer it?",
        answer: "Colocation allows businesses to house their own physical hardware inside our secure data center facilities. We provide redundant power (N+1 UPS & generators), biometric security, precision cooling, and carrier-neutral connectivity."
      },
      {
        id: "host-7",
        question: "What cloud services does Opus Infiniti offer?",
        answer: "We deliver cloud migration, architecture design, multi-cloud management (AWS, Azure, Google Cloud), private cloud deployment, Kubernetes container orchestration, and automated DevOps CI/CD pipelines."
      },
      {
        id: "host-8",
        question: "Can Opus Infiniti host ERP, CRM, and HRMS applications?",
        answer: "Yes, our hosting infrastructure is specially tuned for enterprise databases (PostgreSQL, Oracle, MySQL, SQL Server) and compute-heavy ERP and HRMS transaction loads with zero bottlenecking."
      },
      {
        id: "host-9",
        question: "What uptime and SLA guarantees are provided?",
        answer: "We provide an industry-leading 99.9% to 99.99% network uptime SLA backed by contractual service credits, 15-minute response times for critical incidents, and 24/7/365 NOC monitoring."
      },
      {
        id: "host-10",
        question: "Does Opus Infiniti provide backup and disaster recovery?",
        answer: "Yes, we implement automated daily off-site encrypted backups, geo-redundant snapshot replication, and Disaster Recovery as a Service (DRaaS) with defined Recovery Point Objectives (RPO) and Recovery Time Objectives (RTO)."
      },
      {
        id: "host-11",
        question: "How is hosting priced?",
        answer: "Hosting is priced transparently based on resource consumption (CPU cores, RAM, NVMe storage, and bandwidth). We offer monthly and discounted annual billing with zero hidden bandwidth egress fees."
      },
      {
        id: "host-12",
        question: "Is GST applicable to hosting and IT services?",
        answer: "Yes, for clients operating within India, standard 18% GST is applicable with full GST input tax credit (ITC) invoicing. International clients are billed in USD or local currency with export zero-rating where applicable."
      },
      {
        id: "host-13",
        question: "What support is included with hosting and managed services?",
        answer: "All plans include 24/7 ticket and email support, automated ping monitoring, hardware replacement guarantees within 2 hours, and proactive security patch installations."
      },
      {
        id: "host-14",
        question: "Can I migrate my existing applications to Opus Infiniti hosting?",
        answer: "Yes, our migrations team provides seamless, zero-downtime application and database migration assistance from your existing hosts (cPanel, AWS, digital ocean, or on-premise servers)."
      },
      {
        id: "host-15",
        question: "Does Opus Infiniti offer GPU cloud or specialized servers?",
        answer: "Yes, we offer specialized NVIDIA GPU cloud instances (A100, H100, RTX series) for AI model fine-tuning, computer vision rendering, high-throughput machine learning inference, and big data crunching."
      },
      {
        id: "host-16",
        question: "Does Opus Infiniti provide network and infrastructure management?",
        answer: "Yes, our network engineers manage software-defined networking (SDN), BGP routing, VPN tunnels, hardware firewalls, and enterprise load balancers for distributed workloads."
      },
      {
        id: "host-17",
        question: "Does Opus Infiniti offer white-label hosting?",
        answer: "Yes, agencies and IT consultancies can resell our hosting, cloud instances, and managed infrastructure under their own brand with custom control panels and private nameservers."
      }
    ]
  },
  {
    id: "partnership",
    title: "Partnership, Channel Partners & Reselling",
    icon: "🤝",
    gradient: "from-violet-600 to-violet-800",
    description: "Join our ecosystem of 50+ partners driving transformation with generous revenue shares.",
    questions: [
      {
        id: "partner-1",
        question: "Who can become a channel partner of Opus Infiniti?",
        answer: "System integrators, IT consulting firms, independent software vendors (ISVs), digital agencies, and independent business consultants looking to expand their solution portfolio can join our partner ecosystem."
      },
      {
        id: "partner-2",
        question: "What does a channel partner do?",
        answer: "Partners introduce, resell, or co-implement Opus Infiniti's enterprise products and cloud services to their client base, generating substantial recurring commissions and professional service fees."
      },
      {
        id: "partner-3",
        question: "Do channel partners get support and training?",
        answer: "Yes, partners receive full sales enablement materials, technical certification, demo sandboxes, deal registration protection, co-branded marketing collateral, and dedicated partner success managers."
      },
      {
        id: "partner-4",
        question: "Can partners resell hosting and data-center services?",
        answer: "Yes, partners can resell our cloud servers, colocation, dedicated hosting, and managed IT services with competitive wholesale margins and white-label branding options."
      },
      {
        id: "partner-5",
        question: "Is there a minimum revenue requirement for partners?",
        answer: "We offer flexible partner tiers ranging from Referral Partner (no quota or setup fees) to Certified Implementation and Elite Reseller Partners, each tailored to different partner sizes and goals."
      },
      {
        id: "partner-6",
        question: "How do I apply to become a channel partner?",
        answer: "Simply visit our Partners page or contact our partner alliances desk at reachus@opusinfiniti.com. Our partnerships director will schedule an introductory discovery call within 48 business hours."
      }
    ]
  },
  {
    id: "investment",
    title: "Investment, Investors & Corporate Responsibility",
    icon: "📈",
    gradient: "from-amber-500 to-orange-600",
    description: "Investor relations, financial metrics, growth vision, and ESG commitments.",
    questions: [
      {
        id: "inv-1",
        question: "Is Opus Infiniti open to investment or partnership investment?",
        answer: "Yes, Opus Infiniti is selectively open to strategic institutional investors, venture capital, and technology alliance partners to accelerate global SaaS expansion and AI product R&D."
      },
      {
        id: "inv-2",
        question: "Who can invest in Opus Infiniti?",
        answer: "Accredited institutional investors, family offices, strategic technology funds, and enterprise growth capital firms interested in B2B enterprise software with proven unit economics and global reach."
      },
      {
        id: "inv-3",
        question: "What is Opus Infiniti's growth strategy?",
        answer: "Our growth strategy centers on three pillars: expanding our 20+ proprietary SaaS product subscriptions, deepening market penetration across Southeast Asia and MENA, and scaling AI-driven automated migration tools."
      },
      {
        id: "inv-4",
        question: "Does Opus Infiniti publish financial information?",
        answer: "Qualified investors under non-disclosure agreements (NDAs) are granted access to our virtual data room, which includes 5-year financial models, audited statements, customer retention metrics, and CAC:LTV analysis."
      },
      {
        id: "inv-5",
        question: "What is the company's vision for the next 5 years?",
        answer: "Our 5-year vision is to scale from $15M to $85M in ARR, establish localized support centers in 25 countries, and become the leading AI-first enterprise ERP and data modernization platform for emerging and developed markets."
      },
      {
        id: "inv-6",
        question: "Does Opus Infiniti support sustainability and CSR?",
        answer: "Yes, Opus Infiniti actively supports ESG initiatives through green data center partnerships, paperless digitization for public administrations, and tech education sponsorships for underprivileged engineering students."
      },
      {
        id: "inv-7",
        question: "How can investors or strategic partners contact Opus Infiniti?",
        answer: "Interested investors can reach our executive leadership team directly at reachus@opusinfiniti.com with the subject line 'Investor Relations Inquiry' or schedule an exploratory briefing."
      },
      {
        id: "inv-8",
        question: "Does Opus Infiniti offer equity partnerships for technology collaborations?",
        answer: "Yes, we evaluate joint ventures, IP co-development, and equity-based technology collaborations with leading universities, AI laboratories, and global enterprise software distributors."
      }
    ]
  }
];

