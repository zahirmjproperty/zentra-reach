/* ZENTRA Reach — real key person data from discovery (26 Sep 2026) */
const ZR = window.ZR || {};

ZR.DISCOVERY_DATE = "2026-09-26";
ZR.DISCOVERY_SOURCES = ["Google Dorks", "The Edge Malaysia", "The Star", "MIDA media release", "LinkedIn", "Company website", "Cleanroom Technology", "Media OutReach Newswire"];

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
];

// === WARM LEADS (Priority 2) ===
ZR.WARM_LEADS = [
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
];

// === COLD LEADS (Priority 3 — need research) ===
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