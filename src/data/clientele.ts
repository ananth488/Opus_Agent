export interface ClientItem {
  id: string;
  name: string;
  logo: string;
  description: string;
}

export interface CountryGroup {
  id: string;
  country: string;
  region: string;
  flag: string;
  clients: ClientItem[];
}

export const CLIENTELE_DATA: CountryGroup[] = [
  {
    id: "malaysia",
    country: "Malaysia",
    region: "Southeast Asia",
    flag: "/images/our-clients/my.svg",
    clients: [
      { id: "my1", name: "SJIS International School", logo: "/images/our-clients/logo2.jpg", description: "emsPlus - School Management System" },
      { id: "my2", name: "Maverick International School", logo: "/images/our-clients/logo1.jpg", description: "emsPlus - School Management System" },
      { id: "my3", name: "Zenith International", logo: "/images/our-clients/logo3.jpg", description: "emsPlus - School Management System" },
      { id: "my4", name: "King’s Reign International School", logo: "/images/our-clients/logo4.jpg", description: "emsPlus - School Management System" },
      { id: "my5", name: "Ambitious Academy", logo: "/images/our-clients/logo5.jpg", description: "emsPlus - School Management System" },
      { id: "my6", name: "Indian Empire Restaurant", logo: "/images/our-clients/logo19.jpg", description: "ePOS" },
      { id: "my7", name: "A1 Fresh", logo: "/images/our-clients/logo50.jpg", description: "emenuPlus" },
      { id: "my8", name: "ARR Bistro", logo: "/images/our-clients/logo51.jpg", description: "emenuPlus" },
      { id: "my9", name: "C'est la Vie Cafe", logo: "/images/our-clients/logo52.jpg", description: "emenuPlus" },
      { id: "my10", name: "Lahari", logo: "/images/our-clients/logo53.jpg", description: "emenuPlus" },
      { id: "my11", name: "eFinair", logo: "/images/our-clients/logo56.jpg", description: "emenuPlus" },
      { id: "my12", name: "HauzofSpize", logo: "/images/our-clients/logo30.jpg", description: "emenuPlus" },
      { id: "my13", name: "iScore98", logo: "/images/our-clients/logo54.jpg", description: "emenuPlus" },
      { id: "my14", name: "LahPay", logo: "/images/our-clients/logo31.jpg", description: "nxtmal - ecommerce" },
      { id: "my15", name: "MaxStar", logo: "/images/our-clients/logo58.jpg", description: "emenuPlus" },
      { id: "my16", name: "NICO Security", logo: "/images/our-clients/logo48.jpg", description: "Security Management" },
      { id: "my17", name: "eDCA - Dept Civil Aviations", logo: "/images/our-clients/logo32.jpg", description: "AWS,FOps, ATS for Air traffic System" },
      { id: "my18", name: "Sports Ministry", logo: "/images/our-clients/logo55.jpg", description: "Server Technology Migration" },
      { id: "my19", name: "Fitline", logo: "/images/our-clients/logo33.jpg", description: "eCommerce Tracking" },
    ],
  },
  {
    id: "singapore",
    country: "Singapore",
    region: "Southeast Asia",
    flag: "/images/our-clients/sg.svg",
    clients: [
      { id: "sg1", name: "Coollah", logo: "/images/our-clients/logo10.jpg", description: "Call My Techy - Warranty Management System" },
      { id: "sg2", name: "Lilies World", logo: "/images/our-clients/logo26.jpg", description: "nxtmal - ecommerce" },
    ],
  },
  {
    id: "usa",
    country: "USA",
    region: "North America",
    flag: "/images/our-clients/us.svg",
    clients: [
      { id: "us1", name: "True Friends Matrimony", logo: "/images/our-clients/logo27.jpg", description: "Matrimoney Web / Mobile app" },
      { id: "us2", name: "SinglyMingly", logo: "/images/our-clients/logo11.jpg", description: "Matrimoney Web / Mobile app" },
      { id: "us3", name: "Hodan Global", logo: "/images/our-clients/logo28.jpg", description: "Fintech - Money Exchange" },
      { id: "us4", name: "Drivr", logo: "/images/our-clients/logo59.jpg", description: "Taxi App" },
      { id: "us5", name: "Genesis Consultancy", logo: "/images/our-clients/logo60.jpg", description: "Brand building" },
    ],
  },
  {
    id: "uae",
    country: "United Arab Emirates",
    region: "Middle East",
    flag: "/images/our-clients/ae.svg",
    clients: [
      { id: "uae1", name: "AlMushea", logo: "/images/our-clients/logo9.jpg", description: "nxtmal - ecommerce" },
      { id: "uae2", name: "Cubez", logo: "/images/our-clients/logo29.jpg", description: "Brand building" },
    ],
  },
  {
    id: "ph",
    country: "Philippines",
    region: "Asia",
    flag: "/images/our-clients/ph.svg",
    clients: [
      { id: "ph1", name: "Kwality Phil Food", logo: "/images/our-clients/logo6.jpg", description: "Export Management" },
      { id: "ph2", name: "PRO PORK FEEDS", logo: "/images/our-clients/logo64.jpg", description: "OPUS ERP" },
    ],
  },
  {
    id: "india",
    country: "India",
    region: "South Asia",
    flag: "/images/our-clients/in.svg",
    clients: [
      { id: "in1", name: "Indian Railways - Chennai Divn", logo: "/images/our-clients/logo35.jpg", description: "Fixed Asset Register, TA Module - Mobile interface, Combined Accounts Register, Bills Recoverable" },
      { id: "in2", name: "Indian Railways - Trichy Divn", logo: "/images/our-clients/logo35.jpg", description: "Combined Accounts Register, Fixed Asset Register, Liability Register, Bills Recoverable, INMS - Track Monitoring" },
      { id: "in3", name: "Indian Railways - Salem Divn", logo: "/images/our-clients/logo35.jpg", description: "Bills Recoverable, Liability Register, Combined Accounts Register," },
      { id: "in4", name: "Tamil Nadu Government", logo: "/images/our-clients/logo34.jpg", description: "Regulated Marketing - Online Bidding" },
      { id: "in5", name: "SAMS - Aeronautics College", logo: "/images/our-clients/logo61.jpg", description: "emsPLUS - College Management System" },
      { id: "in6", name: "MAM Engineering College", logo: "/images/our-clients/logo36.jpg", description: "emsPLUS - College Management System" },
      { id: "in7", name: "Kings College of Engineering", logo: "/images/our-clients/logo57.jpg", description: "emsPLUS - College Management System" },
      { id: "in8", name: "Ranga Power", logo: "/images/our-clients/logo7.jpg", description: "Genset Operation Tracking" },
      { id: "in9", name: "Jaeger Industries", logo: "/images/our-clients/logo8.jpg", description: "OPUS ERP" },
      { id: "in10", name: "CEV Engineering", logo: "/images/our-clients/logo15.jpg", description: "eProcess" },
      { id: "in11", name: "ITPL - Industries", logo: "/images/our-clients/logo20.jpg", description: "OPUS ERP" },
      { id: "in12", name: "Jones Foundation", logo: "/images/our-clients/logo16.jpg", description: "Brand building" },
      { id: "in13", name: "Keyem Industries", logo: "/images/our-clients/logo14.jpg", description: "eProcess" },
      { id: "in14", name: "Seesha", logo: "/images/our-clients/logo21.jpg", description: "Brand Building and SeeshaERP" },
      { id: "in15", name: "DDGDVC", logo: "/images/our-clients/logo13.jpg", description: "Brand Building" },
      { id: "in16", name: "Prawn&Crab", logo: "/images/our-clients/logo49.jpg", description: "emenuPlus" },
      { id: "in17", name: "TaxiTaxi", logo: "/images/our-clients/logo37.jpg", description: "Taxi App" },
      { id: "in18", name: "HACi - NGO", logo: "/images/our-clients/logo38.jpg", description: "Donor Management" },
      { id: "in19", name: "MapeDesigns", logo: "/images/our-clients/logo39.jpg", description: "Brand building" },
      { id: "in20", name: "Dr. MGR medical University (Oasys)", logo: "/images/our-clients/logo40.jpg", description: "emsPLUS" },
      { id: "in21", name: "Bethel School", logo: "/images/our-clients/logo41.jpg", description: "Brand building" },
      { id: "in22", name: "iSpark", logo: "/images/our-clients/logo42.jpg", description: "emsPLUS - Online Education" },
      { id: "in23", name: "LePoche", logo: "/images/our-clients/logo43.jpg", description: "emenuPlus" },
      { id: "in24", name: "Gemini Enterprises", logo: "/images/our-clients/logo17.jpg", description: "HRMSplus" },
      { id: "in25", name: "EasternBulk", logo: "/images/our-clients/logo44.jpg", description: "eProcess" },
      { id: "in26", name: "Kadimi Special Steels", logo: "/images/our-clients/logo22.jpg", description: "ePOS" },
      { id: "in27", name: "Trichy", logo: "/images/our-clients/logo25.jpg", description: "eCommerce" },
    ],
  },
  {
    id: "ke",
    country: "Kenya",
    region: "East Africa",
    flag: "/images/our-clients/ke.svg",
    clients: [
      { id: "ke1", name: "Arfa Mall", logo: "/images/our-clients/logo12.jpg", description: "nxtmal - ecommerce" },
    ],
  },
  {
    id: "gh",
    country: "Ghana",
    region: "West Africa",
    flag: "/images/our-clients/gh.svg",
    clients: [
      { id: "gh1", name: "StaffHR", logo: "/images/our-clients/logo22.jpg", description: "HRMSplus" },
      { id: "gh2", name: "RomiTaxi", logo: "/images/our-clients/logo45.jpg", description: "Taxi App" },
    ],
  },
  {
    id: "sa",
    country: "Saudi Arabia",
    region: "Middle East",
    flag: "/images/our-clients/sa.svg",
    clients: [
      { id: "sa1", name: "JISchool", logo: "/images/our-clients/logo46.jpg", description: "emsPLUS" },
      { id: "sa2", name: "CarRental", logo: "/images/our-clients/logo62.jpg", description: "Car Rental" },
    ],
  },
  {
    id: "kh",
    country: "Kingdom of Cambodia",
    region: "Southeast Asia",
    flag: "/images/our-clients/kh.svg",
    clients: [
      { id: "kh1", name: "Holiday Palace", logo: "/images/our-clients/logo47.jpg", description: "Wallet/Privelege/Coupon management" },
    ],
  },
  {
    id: "id",
    country: "Indonesia",
    region: "Asia",
    flag: "/images/our-clients/id.svg",
    clients: [
      { id: "id1", name: "Telkom Sel", logo: "/images/our-clients/logo63.jpg", description: "Intel Anti-theft implementation" },
    ],
  },
];

