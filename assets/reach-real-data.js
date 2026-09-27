/* ZENTRA Reach — real key person data from discovery (26 Sep 2026) */
const ZR = window.ZR || {};

ZR.DISCOVERY_DATE = "2026-09-26";
ZR.DISCOVERY_SOURCES = ["Google Dorks", "The Edge Malaysia", "The Star", "MIDA", "LinkedIn", "Company website", "Cleanroom Technology", "Media OutReach", "Reuters", "PRNewswire", "Mingtiandi", "Business Today", "w.media", "Airtrunk", "ESR", "Empyrion Digital"];

// === HOT LEADS (Priority 1) ===
ZR.HOT_LEADS = [
  {id: "H01", name: "Ir. Ts. Ong Mum Fei (Vincent)", title: "Group Managing Director", company: "iCents Group Holdings Bhd / Maytech Cleanroom Manufacturing", 
    industry: "Cleanroom Manufacturing / Semiconductor", email: "", phone: "+60 3 8081 3575", linkedin: "icentsgroup.com",
    location: "Mantin, Negeri Sembilan", signal_type: "NEW FACTORY", priority: "HIGHEST",
    signal: "RM15M new cleanroom manufacturing facility launched April 2026 in Mantin, NS. 100 jobs. Expanded capacity for semi/data centre/pharma clients.",
    source: "The Star Apr 2026 / MIDA / icentsgroup.com", status: "new", lastContact: "—", nextFollowUp: "2026-09-28",
    notes: "Hot lead. Just expanded factory capacity. May need more industrial land for future growth. EBP VII only 15-20km from Mantin."},
  
  {id: "H02", name: "Dato' Mohd Roslan bin Mahyuddin", title: "Non-Executive Director", company: "Mahsuri Food Sdn Bhd", 
    industry: "F&B Manufacturing (Halal)", email: "", phone: "", linkedin: "",
    location: "Bandar Enstek, Negeri Sembilan", signal_type: "FACTORY LAUNCHED", priority: "HIGHEST",
    signal: "Brand NEW 45,000 sqm factory in Bandar Enstek (May 2026). US$55M investment. 2.5km from EBP VII! Automated production lines.",
    source: "MIDA / Media OutReach May 2026", status: "new", lastContact: "—", nextFollowUp: "2026-09-28",
    notes: "CRITICAL: Just built factory literally next door to EBP VII. Contact about future expansion needs or cross-promotion. Mahsuri = sauces & condiments halal manufacturer."},
  
  {id: "H03", name: "Yu Baoshuang", title: "Managing Director (Malaysia)", company: "Dunham-Bush Industries Sdn Bhd", 
    industry: "HVAC Manufacturing", email: "dbm@dunham-bush.com.my", phone: "+603-8924 9000", linkedin: "dunham-bush.com",
    location: "Senawang, Negeri Sembilan (new plant)", signal_type: "LAND ACQUIRED", priority: "HIGH",
    signal: "Acquired 32 acres at SPD Tech Valley Senawang. RM172M investment. 400 jobs. Construction Q1 2027, operations Q1 2028.",
    source: "The Edge Malaysia Aug 2026 / dunham-bush.com", status: "new", lastContact: "—", nextFollowUp: "2026-09-29",
    notes: "Large-scale expansion. Currently in Kajang. Moving to Senawang. May need additional space in future. Contact: dunhambush.com.my / kidamai@dunham-bush.com.my. Deputy MD: Yeo Sek Chiong. Group CEO: Dr Lei Zhou."},
  
  {id: "H04", name: "Foo Siang Leng", title: "Executive Director", company: "iCents Group Holdings Bhd", 
    industry: "Cleanroom / Engineering", email: "", phone: "+60 3 8081 3575", linkedin: "icentsgroup.com",
    location: "Subang Jaya / Mantin, NS", signal_type: "COMPANY EXPANSION", priority: "HIGH",
    signal: "Group just listed on Bursa. RM15M factory expansion. Revenue RM81M. Growing cleanroom demand from data centres.",
    source: "The Star Apr 2026 / MIDA", status: "new", lastContact: "—", nextFollowUp: "2026-09-29",
    notes: "Second key person at iCents. Chairman: Datuk Lim Bee Vian. Executive Director: Tan Wei Ying. Bursa listed (ICENTS)."},

  {id: "H05", name: "Kelvin Lee Chin Chuan", title: "Group Managing Director (new June 2026)", company: "Matrix Concepts Holdings Bhd", 
    industry: "Property Developer — MVV City", email: "", phone: "", linkedin: "matrixconcepts.com.my",
    location: "Seremban, Negeri Sembilan", signal_type: "LEADERSHIP CHANGE", priority: "HIGH",
    signal: "New Group MD (June 2026). MVV City GDV RM15B over 12yrs. Record sales RM1.51B FY26. Heavy industrial land sales.",
    source: "The Star May 2026", status: "new", lastContact: "—", nextFollowUp: "2026-10-01",
    notes: "Developer of MVV City in NS. Could be partner or competitor. Worth connecting for industrial land development synergy."},

  // ===== BATCH 2: Logistics & DC leads (26 Sep 2026) =====
  {id:"H06",name:"Farian Kirana",title:"CEO",company:"Lion Parcel (Lion Group)",industry:"Logistics / E-commerce",email:"",phone:"",linkedin:"",location:"Subang Jaya / KLIA",signal_type:"JUST LAUNCHED IN MALAYSIA",priority:"HIGHEST",signal:"Opened first intl office in Subang Jaya (24 Sep 2026!). CTO at KLIA. Plans MY as regional hub for SEA.",source:"PRNewswire 24 Sep 2026",status:"new",lastContact:"—",nextFollowUp:"2026-09-29",notes:"BRAND NEW — 2 days ago! Needs warehouse space near KLIA. EBP VII is <10km from KLIA. Country Head: Alvin Williams."},
  {id:"H07",name:"Alvin Williams",title:"Country Head — Malaysia",company:"Lion Parcel Malaysia",industry:"Logistics / E-commerce",email:"",phone:"",linkedin:"",location:"Subang Jaya / KLIA",signal_type:"NEW COUNTRY HEAD",priority:"HIGHEST",signal:"Leading MY expansion. Network covers Johor/Sabah/Sarawak, expanding north. Needs distribution infrastructure.",source:"PRNewswire 24 Sep 2026",status:"new",lastContact:"—",nextFollowUp:"2026-09-29",notes:"Direct country lead. Contact about warehouse/storage near KLIA."},
  {id:"H08",name:"Jeanie Tan",title:"CCO Logistics APAC",company:"DP World",industry:"Logistics / Port / Supply Chain",email:"",phone:"",linkedin:"",location:"Singapore / Johor",signal_type:"NEW MY WAREHOUSE",priority:"HIGH",signal:"Opened 11,514sqm warehouse in Johor Aug 2026. 2nd in KL coming 2026.",source:"Malay Mail Aug 2026",status:"new",lastContact:"—",nextFollowUp:"2026-10-01",notes:"Global port/logistics giant expanding in MY."},
  {id:"H09",name:"Dato' Seri Azmir Merican",title:"Group MD & CEO",company:"Sime Darby Property Bhd",industry:"Property — Industrial/Logistics Parks",email:"",phone:"",linkedin:"simedarbyproperty.com",location:"KL/Selangor",signal_type:"RM1B INDUSTRIAL FUND — EXPANSION",priority:"HIGH",signal:"RM1B Industrial Dev Fund. E-Metro >4.2M sqft. Metrohub 4 (1.38M sqft) completed. Mixue pre-committed.",source:"IRHM/ESR Jul 2026",status:"new",lastContact:"—",nextFollowUp:"2026-10-01",notes:"Major industrial/logistics developer."},
  {id:"H10",name:"Cheryl Lim",title:"Director of Property Dev",company:"AME Development Sdn Bhd",industry:"Industrial Property Developer",email:"",phone:"",linkedin:"amedev.com.my",location:"Senai/SiLC Johor",signal_type:"NEW LAUNCH i-TechValley RM1.5B",priority:"HIGH",signal:"170ac gated industrial park in SiLC Johor. RM1.5B GDV. 72 plots from RM10M.",source:"The Edge Aug 2026",status:"new",lastContact:"—",nextFollowUp:"2026-10-01",notes:"Boutique industrial developer. Customised factory solutions."},
  {id:"H11",name:"Mark Fong",title:"CEO",company:"Empyrion Digital",industry:"Data Centre Developer",email:"",phone:"",linkedin:"empyriondigital.com",location:"Singapore/Johor",signal_type:"200+MW DC CAMPUS",priority:"HIGH",signal:"200+MW hyperscale DC in Nusajaya Johor. 34.9ac site. Phase 1 RFS Q4 2026.",source:"Empyrion Digital Dec 2025",status:"new",lastContact:"—",nextFollowUp:"2026-10-02",notes:"Next-gen DC operator. May expand to NS per analyst predictions."},
  {id:"H12",name:"Robin Khuda",title:"Founder & CEO",company:"AirTrunk (Blackstone)",industry:"Data Centre — Hyperscale",email:"",phone:"",linkedin:"airtrunk.com",location:"Australia/SG/Johor",signal_type:"MYR27B COMMITTED — EXPANDING BEYOND JOHOR",priority:"HIGH",signal:"700MW+ in MY. MYR27B committed. CEO: 'planning further expansion in Malaysia, both within Johor and across the country'.",source:"AirTrunk/Mingtiandi Sep 2026",status:"new",lastContact:"—",nextFollowUp:"2026-10-02",notes:"CEO hinted expansion beyond Johor — NS is next logical DC hotspot per industry analysts."},
];

// === WARM LEADS (Priority 2) ===
ZR.WARM_LEADS = [
  // Batch 1
  {id: "W01", name: "Datuk Chang Khim Wah", title: "President & CEO", company: "EcoWorld Malaysia", 
    industry: "Property Developer", email: "", phone: "", linkedin: "ecoworld.my",
    location: "KL", signal_type: "RECORD SALES", priority: "MEDIUM",
    signal: "EBP VII sales RM5B+ (company record). Sold 222ac to Tera Data Centers RM1.01B (Sept 2026). MVV 2.0 Parcel C.",
    source: "The Star Sep 2026", status: "new", lastContact: "—", nextFollowUp: "2026-10-02",
    notes: "Developer of EBP VII. Key contact for joint marketing / co-brokerage opportunities."},

  {id: "W02", name: "Ong Chou Wen", title: "CEO (new April 2026)", company: "NCT Alliance Bhd", 
    industry: "Property Developer — Industrial Parks", email: "", phone: "", linkedin: "",
    location: "Selangor", signal_type: "CEO CHANGE", priority: "MEDIUM",
    signal: "First group CEO (Apr 2026). NSIP Phase 2 GDV RM2.6B launching 2026. Heavy industrial focus.",
    source: "The Star Jun 2026", status: "new", lastContact: "—", nextFollowUp: "2026-10-02",
    notes: "NCT Smart Industrial Park in Selangor. Could be interested in NS land."},

  {id: "W03", name: "Datuk Tony Ling Thou Lung", title: "CEO", company: "IJM Land Bhd", 
    industry: "Property Developer", email: "", phone: "", linkedin: "ijm.com",
    location: "KL", signal_type: "NEW INDUSTRIAL PARK", priority: "MEDIUM",
    signal: "RM1.96B industrial park JV in JS-SEZ Sedenak. Expanding industrial portfolio.",
    source: "The Star May 2026 / IJM Corp", status: "new", lastContact: "—", nextFollowUp: "2026-10-05",
    notes: "Major developer. New industrial park in Johor. May expand to NS."},

  {id: "W04", name: "HaiOnn Ng", title: "Managing Director", company: "Emerson Automation Solutions (Nilai Campus)", 
    industry: "Industrial Automation", email: "", phone: "", linkedin: "linkedin.com/in/haionn-ng",
    location: "Nilai, Negeri Sembilan", signal_type: "EXISTING IN NS", priority: "MEDIUM",
    signal: "MD at Emerson Automation Nilai Campus. Large MNC operation in Nilai.",
    source: "LinkedIn", status: "new", lastContact: "—", nextFollowUp: "2026-10-05",
    notes: "MNC in NS already. May have expansion plans or know other industry players."},

  {id: "W05", name: "Rishesh Paul", title: "Managing Director", company: "Aerotech Manufacturing Sdn Bhd", 
    industry: "Manufacturing", email: "", phone: "", linkedin: "linkedin.com/in/rishesh-paul",
    location: "Mantin, Negeri Sembilan", signal_type: "SME IN NS", priority: "MEDIUM",
    signal: "Founder-MD of Aerotech in Mantin, NS.",
    source: "LinkedIn", status: "new", lastContact: "—", nextFollowUp: "2026-10-05",
    notes: "Local manufacturer in Mantin. Could be expansion prospect."},

  {id: "W06", name: "Ravinder Singh", title: "General Manager / MD", company: "Ansell Seremban Sdn Bhd", 
    industry: "Glove Manufacturing", email: "", phone: "", linkedin: "linkedin.com/in/ravinder-singh",
    location: "Seremban, Negeri Sembilan", signal_type: "MNC IN NS", priority: "MEDIUM",
    signal: "GM/MD Ansell Seremban since Feb 2023.",
    source: "LinkedIn", status: "new", lastContact: "—", nextFollowUp: "2026-10-07",
    notes: "Global glove manufacturer. Operations in NS may expand."},

  {id: "W07", name: "John R. Giansante", title: "Managing Director", company: "Spectrum Materials Malaysia Sdn Bhd", 
    industry: "Materials Manufacturing", email: "", phone: "", linkedin: "linkedin.com/in/johnrgiansante",
    location: "Seremban, Negeri Sembilan", signal_type: "MNC IN NS", priority: "MEDIUM",
    signal: "MD in Seremban. Business development focus.",
    source: "LinkedIn", status: "new", lastContact: "—", nextFollowUp: "2026-10-07",
    notes: "Materials manufacturer in NS. Potential expansion need."},

  // ===== BATCH 2: More developers, DC, government (26 Sep) =====
  {id:"W08",name:"Datuk Voon Tin Yow",title:"CEO (new Apr 2026)",company:"IOI Properties Bhd",industry:"Property Developer",email:"",phone:"",linkedin:"ioiproperties.com.my",location:"KL",signal_type:"CEO CHANGE — EX-ECOWORLD",priority:"MEDIUM",signal:"New CEO Apr 2026. 35yrs exp. Previously Exe Dir at EcoWorld. Deep industrial network.",source:"The Edge Sep 2026",status:"new",lastContact:"—",nextFollowUp:"2026-10-05",notes:"Former EcoWorld senior. Strong industrial network. Could connect to EBP VII."},
  {id:"W09",name:"Datuk Zaini Yusoff",title:"President & CEO",company:"S P Setia Bhd",industry:"Property Developer",email:"",phone:"",linkedin:"spsetia.com",location:"KL/Penang",signal_type:"NEW 509ac INDUSTRIAL PARK",priority:"MEDIUM",signal:"Setia Fontaines Industrial Park Penang. 509ac light/medium industrial. PM Anwar attended groundbreaking.",source:"The Edge Jun 2026",status:"new",lastContact:"—",nextFollowUp:"2026-10-05",notes:"Major developer entering industrial."},
  {id:"W10",name:"Datuk Stewart LaBrooy",title:"Director",company:"Compass IP (PNB+KWAP+AREA JV)",industry:"Industrial Park Developer",email:"",phone:"",linkedin:"",location:"Selangor",signal_type:"RM1.2B GREEN INDUSTRIAL PARK",priority:"MEDIUM",signal:"Compass @ Kota Seri Langat. 220ac freehold. RM1.2B GDV. Green certified. Built-to-suit warehouses.",source:"The Edge Aug 2026",status:"new",lastContact:"—",nextFollowUp:"2026-10-07",notes:"PNB+KWAP JV. First sustainable industrial park in Selangor."},
  {id:"W11",name:"Ng Teck Hua",title:"Executive Director",company:"Setia Awan Group",industry:"Property Developer",email:"",phone:"",linkedin:"",location:"Perak",signal_type:"MAIDEN INDUSTRIAL PROJECT",priority:"MEDIUM",signal:"First industrial project: 447ac in Tanjong Malim. GDV RM690.5M. Next to Proton City/Geely.",source:"The Edge Aug 2026",status:"new",lastContact:"—",nextFollowUp:"2026-10-07",notes:"New entrant. Learning phase. May need partners."},
  {id:"W12",name:"YB Teo Kok Seong",title:"EXCO Industry & Non-Muslim Affairs",company:"Negeri Sembilan State Govt",industry:"Government — Policy Maker",email:"",phone:"",linkedin:"",location:"Seremban, NS",signal_type:"POLICY MAKER — NS INDUSTRY",priority:"MEDIUM",signal:"Officiated iCents (Apr) and Mahsuri (May) launches. Key decision maker for NS industrial policy.",source:"MIDA Apr/May 2026",status:"new",lastContact:"—",nextFollowUp:"2026-10-07",notes:"Can open doors for EBP VII promotions at state level."},
  {id:"W13",name:"Dato' Hj Najmuddin Sharif",title:"CEO",company:"Invest Negeri Sembilan",industry:"Government Investment Agency",email:"",phone:"",linkedin:"",location:"Seremban, NS",signal_type:"GATEKEEPER — NS INVESTMENT",priority:"MEDIUM",signal:"Key figure for industrial investment in NS. Present at iCents + Mahsuri launches.",source:"MIDA/The Star 2026",status:"new",lastContact:"—",nextFollowUp:"2026-10-07",notes:"State investment promotion CEO. Can connect to all major investors."},
  {id:"W14",name:"Sr (Dr) Samuel Tan",title:"Founder & CEO",company:"Olive Tree Property Consultants",industry:"Property Consultancy — DC Specialist",email:"",phone:"",linkedin:"",location:"KL",signal_type:"INDUSTRY EXPERT — NS DC HOTSPOT",priority:"MEDIUM",signal:"Published 'Why NS is next DC hotspot' (Jun 2026). Deep market knowledge.",source:"w.media Jun 2026",status:"new",lastContact:"—",nextFollowUp:"2026-10-07",notes:"Valuable source of referrals and market intel."},
  {id:"W15",name:"Darryll Sinnappa",title:"Country Head — Malaysia",company:"ST Telemedia Global Data Centres",industry:"Data Centre — Global",email:"",phone:"",linkedin:"",location:"Johor",signal_type:"FLAGSHIP MY CAMPUS — USD1.37B",priority:"MEDIUM",signal:"STT Johor 166MW campus. USD1.37B green financing secured. First phase in Johor.",source:"STT GDC Aug 2026",status:"new",lastContact:"—",nextFollowUp:"2026-10-10",notes:"Global DC operator with massive MY commitment. Future NS expansion possible."},
  {id:"W16",name:"Serene Nah",title:"MD & Head of APAC",company:"Digital Realty",industry:"Data Centre — Global NYSE",email:"",phone:"",linkedin:"digitalrealty.com",location:"Singapore/Cyberjaya",signal_type:"LAUNCHED MY — EVALUATING JOHOR",priority:"MEDIUM",signal:"Cyberjaya campus (32MW). Confirmed evaluating Johor sites. NYSE listed.",source:"Tech News Guru Jun 2026",status:"new",lastContact:"—",nextFollowUp:"2026-10-10",notes:"Global DC operator evaluating sites beyond Cyberjaya."},
  {id:"W17",name:"Frederic Devos",title:"CEO",company:"DDSP (BlackRock-backed)",industry:"Data Centre Developer",email:"",phone:"",linkedin:"",location:"Singapore/Johor",signal_type:"USD283M GREEN FINANCING",priority:"MEDIUM",signal:"45MW liquid-cooled DC in Sedenak. Fully pre-leased to hyperscale. 1.1GW across APAC.",source:"MLQ News 2026",status:"new",lastContact:"—",nextFollowUp:"2026-10-10",notes:"BlackRock-backed DC developer. Growing."},
  {id:"W18",name:"Datuk Seri Yeoh Seok Hong",title:"Managing Director",company:"YTL Power International Bhd",industry:"Data Centre / Utilities",email:"",phone:"",linkedin:"ytl.com",location:"KL/Johor",signal_type:"GIGAWATT DC CAMPUS",priority:"MEDIUM",signal:"Up to 1.2GW DC campus in Sedenak (JLand JV). YTL Green DC Park in Kulai.",source:"NST Aug 2026",status:"new",lastContact:"—",nextFollowUp:"2026-10-10",notes:"Major DC + power play by YTL."},
];

// === COLD LEADS (Priority 3) ===
ZR.COLD_LEADS = [
  {id: "C01", name: "Dr. Lei Zhou", title: "Group CEO/President", company: "Dunham-Bush International", 
    industry: "HVAC / Manufacturing", email: "", phone: "+603-8924 9000", linkedin: "", 
    location: "Kajang/Bangi", signal_type: "CORPORATE HQ", priority: "LOW",
    signal: "Group CEO overseeing global operations. Malaysia HQ in Bangi.",
    source: "dunham-bush.com", status: "cold"},
  {id: "C02", name: "Mr. Vincent Wong", title: "President — APAC", company: "Lee Kum Kee Sauce", 
    industry: "F&B Manufacturing", email: "", phone: "", linkedin: "", 
    location: "APAC", signal_type: "PARTNER OF MAHSURI", priority: "LOW",
    signal: "Attended Mahsuri factory launch. Lee Kum Kee APAC head.",
    source: "Media OutReach May 2026", status: "cold"},
  {id: "C03", name: "Datuk Lim Bee Vian", title: "Chairman", company: "iCents Group Holdings Bhd", 
    industry: "Cleanroom / Semiconductor", email: "", phone: "", linkedin: "", 
    location: "Subang Jaya", signal_type: "BOARD", priority: "LOW",
    signal: "Board chairman of listed cleanroom company.",
    source: "MIDA/The Star Apr 2026", status: "cold"},
  {id:"C04",name:"Jeffrey Shen",title:"Co-founder & Co-CEO",company:"ESR",industry:"Real Asset Manager",email:"",phone:"",linkedin:"esr.com",location:"APAC",signal_type:"USD1B FUND",priority:"LOW",signal:"CAF II fund backs 510MW DC in Pasir Gudang.",source:"Mingtiandi 2026",status:"cold"},
  {id:"C05",name:"Cheam Tat Inn",title:"MD — Malaysia",company:"Equinix",industry:"Data Centre — Global",email:"",phone:"",linkedin:"equinix.com.my",location:"KL",signal_type:"MY OPERATIONS",priority:"LOW",signal:"MD of Equinix MY. Mentioned in Reuters DC article.",source:"Reuters Jul 2026",status:"cold"},
];

// Export for page display
ZR.getAll = function() {
  return [...this.HOT_LEADS, ...this.WARM_LEADS, ...this.COLD_LEADS];
};
ZR.getStats = function() {
  return { total: this.getAll().length, hot: this.HOT_LEADS.length, warm: this.WARM_LEADS.length, cold: this.COLD_LEADS.length };
};

// Quick save log
console.log(`ZENTRA Reach DISCOVERY: ${ZR.getStats().total} real leads loaded (${ZR.getStats().hot} HOT, ${ZR.getStats().warm} WARM, ${ZR.getStats().cold} COLD)`);