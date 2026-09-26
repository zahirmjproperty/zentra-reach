/* ZENTRA Reach — sample data for mock-up */
const ZR = window.ZR || {};
ZR.PROSPECTS = [
  {id:1,name:'Ahmad Faiz bin Ramli',title:'Managing Director',company:'Prestige Manufacturing Sdn Bhd',industry:'Manufacturing',email:'ahmad.faiz@prestige-my.com',phone:'+6012-345-6789',linkedin:'linkedin.com/in/ahmadfaiz',source:'LinkedIn',status:'warm',priority:'High',lastContact:'2026-09-20',nextFollowUp:'2026-09-28',notes:'Expanding to new factory, looking for 50,000 sqft in Shah Alam'},
  {id:2,name:'Ng Bee Ling',title:'Supply Chain Director',company:'LogiTrans Malaysia',industry:'Logistics',email:'beeling@logitrans.my',phone:'+6016-789-0123',linkedin:'linkedin.com/in/beelingng',source:'FMM Directory',status:'new',priority:'High',lastContact:'-',nextFollowUp:'2026-09-26',notes:'New logistics hub, need warehouse 100,000 sqft near KLIA'},
  {id:3,name:'Ravi Chandran a/l Muthu',title:'CEO',company:'Tropical Foods (M) Sdn Bhd',industry:'F&B',email:'ravi@tropicalfoods.my',phone:'+6019-234-5678',linkedin:'linkedin.com/in/ravichandran',source:'Referral',status:'meeting',priority:'High',lastContact:'2026-09-18',nextFollowUp:'2026-09-25',notes:'Site visit arranged for EBP 7, interested in 2 acres'},
  {id:4,name:'Dato\' Seri Lim Keng Soon',title:'Executive Chairman',company:'KL Mega Development Bhd',industry:'Construction',email:'kslim@klmegadev.com',phone:'+6012-888-9999',linkedin:'linkedin.com/in/datokengsoon',source:'SSM e-Info',status:'cold',priority:'Medium',lastContact:'2026-08-15',nextFollowUp:'2026-10-01',notes:'Has large landbank but may need joint venture partner'},
  {id:5,name:'Sarah Tan Mei Mei',title:'VP Operations',company:'TechPac Assembly Sdn Bhd',industry:'Manufacturing',email:'sarah.tan@techpac.com',phone:'+6017-456-7890',linkedin:'linkedin.com/in/sarahtanmm',source:'Google Dorks',status:'contacted',priority:'Medium',lastContact:'2026-09-22',nextFollowUp:'2026-09-29',notes:'Semiconductor firm, looking for cleanroom space in Penang'},
  {id:6,name:'Kamarul Ariffin bin Hassan',title:'Head of Expansion',company:'Hometaste Franchise Group',industry:'Retail',email:'kamarul@hometaste.my',phone:'+6011-234-5678',linkedin:'linkedin.com/in/kamarulah',source:'Crunchbase',status:'warm',priority:'Medium',lastContact:'2026-09-21',nextFollowUp:'2026-09-30',notes:'Planning 20 new outlets across Klang Valley, interested in commercial lots'},
  {id:7,name:'Dr. Chen Wei Ming',title:'COO',company:'Sentosa Medical Bhd',industry:'Healthcare',email:'wmchen@sentosamedical.com',phone:'+6018-987-6543',linkedin:'linkedin.com/in/weimingchen',source:'Events',status:'new',priority:'Low',lastContact:'-',nextFollowUp:'2026-10-05',notes:'Considering medical hub near KLIA, 3-5 acres'},
  {id:8,name:'Azlina binti Mohd Noor',title:'Operations Manager',company:'Eco-Sort Logistics',industry:'Logistics',email:'azlina@ecosort.my',phone:'+6013-567-8901',linkedin:'linkedin.com/in/azlinamn',source:'LinkedIn',status:'contacted',priority:'High',lastContact:'2026-09-23',nextFollowUp:'2026-09-27',notes:'E-commerce fulfillment center, need 80,000 sqft warehouse'},
  {id:9,name:'Tan Sri Jeffrey Koh',title:'Executive Director',company:'Koh Brothers Plantation Bhd',industry:'Agri-Business',email:'jefkoh@kbplantation.com',phone:'+6019-111-2222',linkedin:'linkedin.com/in/jeffreykoh',source:'Referral',status:'cold',priority:'Low',lastContact:'2026-07-10',nextFollowUp:'-',notes:'May consider diversifying into industrial property investment'},
  {id:10,name:'Isham bin Yusof',title:'Managing Director',company:'Northern Precision Engineering',industry:'Manufacturing',email:'isham@npe.com.my',phone:'+6014-333-4444',linkedin:'linkedin.com/in/ishamyusof',source:'FMM Directory',status:'new',priority:'Medium',lastContact:'-',nextFollowUp:'2026-10-02',notes:'Precision parts supplier for automotive, expanding facility'},
  {id:11,name:'Goh Siew Ling',title:'Director of Operations',company:'AirCargo Connect Sdn Bhd',industry:'Logistics',email:'siewling@aircargoconnect.my',phone:'+6012-777-8888',linkedin:'linkedin.com/in/siewlinggoh',source:'Google Dorks',status:'warm',priority:'High',lastContact:'2026-09-19',nextFollowUp:'2026-09-26',notes:'New cargo hub near KLIA, need office+warehouse 30,000 sqft'},
  {id:12,name:'Mohd Hafiz bin Saad',title:'CEO',company:'HalalHub International',industry:'F&B',email:'hafiz@halalhub.com',phone:'+6016-555-6666',linkedin:'linkedin.com/in/hafizsaad',source:'MIDA',status:'new',priority:'High',lastContact:'-',nextFollowUp:'2026-09-28',notes:'Halal food park, looking for 10-20 acres in Nilai area'}
];

ZR.CAMPAIGNS = [
  {id:1,name:'Q4 Industrial Land Promo',industry:'Manufacturing',status:'Active',totalRecipients:450,sent:450,opened:178,replied:23,created:'2026-09-15'},
  {id:2,name:'Manufacturing Sector Outreach',industry:'Manufacturing',status:'Active',totalRecipients:320,sent:320,opened:98,replied:12,created:'2026-09-10'},
  {id:3,name:'Logistics Hub Campaign',industry:'Logistics',status:'Active',totalRecipients:280,sent:250,opened:102,replied:18,created:'2026-09-18'},
  {id:4,name:'Data Centre Investor Blast',industry:'Tech/DC',status:'Draft',totalRecipients:180,sent:0,opened:0,replied:0,created:'2026-09-22'},
  {id:5,name:'F&B Expansion Leads',industry:'F&B',status:'Completed',totalRecipients:200,sent:200,opened:86,replied:14,created:'2026-08-20'},
  {id:6,name:'Year-End Commercial Mix',industry:'All',status:'Draft',totalRecipients:600,sent:0,opened:0,replied:0,created:'2026-09-23'}
];

ZR.ACTIVITY = [
  {time:'2026-09-24 09:15',text:'Email sent to Azlina binti Mohd Noor (Eco-Sort Logistics) — Email 1: Warehouse space intro',type:'email',color:'blue'},
  {time:'2026-09-24 08:30',text:'Meeting booked with Ravi Chandran (Tropical Foods) — Site visit EBP 7, 25 Sep 2pm',type:'meeting',color:'purple'},
  {time:'2026-09-23 17:00',text:'Prospect added: Sarah Tan Mei Mei (TechPac Assembly) — via Google Dorks',type:'add',color:'green'},
  {time:'2026-09-23 15:45',text:'Reply received from Kamarul Ariffin (Hometaste) — Requested commercial lot list',type:'reply',color:'gold'},
  {time:'2026-09-23 14:00',text:'Campaign launched: Q4 Industrial Land Promo — 450 recipients',type:'campaign',color:'gold'},
  {time:'2026-09-22 11:30',text:'Email opened by Ahmad Faiz (Prestige Mfg) — Link clicked: EBP 7 brochure',type:'open',color:'blue'},
  {time:'2026-09-22 09:00',text:'Prospect added: Mohd Hafiz bin Saad (HalalHub) — via MIDA press release',type:'add',color:'green'},
  {time:'2026-09-21 16:20',text:'Follow-up call with Ng Bee Ling (LogiTrans) — Interested, requesting proposal',type:'call',color:'purple'},
  {time:'2026-09-21 10:00',text:'LinkedIn connection accepted by Dato\' Seri Lim Keng Soon (KL Mega Dev)',type:'social',color:'blue'},
  {time:'2026-09-20 14:10',text:'Bulk import: 45 prospects from FMM Directory 2026',type:'import',color:'green'}
];