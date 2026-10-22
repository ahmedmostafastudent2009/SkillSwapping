export const instructorProfiles = {
  'Ahmed Sami': { avatar:'👨‍💻', bio_ar:'مطوّر Full-Stack بخبرة 8 سنوات.', bio_en:'Full-Stack developer with 8 years experience.', skills:['JavaScript','React','Node.js','MongoDB'] },
  'Nour Ibrahim': { avatar:'👩‍🔬', bio_ar:'باحثة في الذكاء الاصطناعي.', bio_en:'AI researcher with a PhD.', skills:['Python','TensorFlow','ML','Deep Learning'] },
  'Lina Hassan': { avatar:'👩‍🎨', bio_ar:'مصممة UX محترفة.', bio_en:'Professional UX designer.', skills:['Figma','UI Design','UX Research'] },
  'Sara Moustafa': { avatar:'👩‍💼', bio_ar:'محللة بيانات.', bio_en:'Data analyst.', skills:['Python','Pandas','SQL','Tableau'] },
  'Khaled Farouk': { avatar:'👨‍💼', bio_ar:'خبير أمن سيبراني.', bio_en:'Cybersecurity expert.', skills:['Ethical Hacking','Penetration Testing'] },
};
export const courseInstructors = { 'web-dev':['Ahmed Sami'], 'ml':['Nour Ibrahim'], 'ux':['Lina Hassan'], 'data':['Sara Moustafa'], 'cyber':['Khaled Farouk'] };
export const coursesData = {
  'web-dev': { cat:'تطوير', catEn:'Development', name:'Full-Stack Web Development Bootcamp', meta:'★ 4.9 · 12,400 طالب · $89', img:'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&q=80', gradient:'linear-gradient(135deg,#1a2a4a,#0d1f3c)', emoji:'💻' },
  'ml': { cat:'ذكاء اصطناعي', catEn:'AI & ML', name:'Machine Learning with Python & TensorFlow', meta:'★ 4.8 · 9,200 طالب · $79', img:'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80', gradient:'linear-gradient(135deg,#1a2a1a,#0d2b0d)', emoji:'🤖' },
  'ux': { cat:'تصميم', catEn:'Design', name:'UI/UX Design Masterclass', meta:'★ 4.9 · 7,800 طالب · $69', img:'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80', gradient:'linear-gradient(135deg,#2a1a2a,#1f0d2b)', emoji:'🎨' },
  'data': { cat:'علم البيانات', catEn:'Data Science', name:'Data Analysis with Python & Pandas', meta:'★ 4.7 · 6,100 طالب · $59', img:'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80', gradient:'linear-gradient(135deg,#2a1a1a,#2b0d0d)', emoji:'📊' },
  'cyber': { cat:'أمن سيبراني', catEn:'Cybersecurity', name:'Ethical Hacking & Penetration Testing', meta:'★ 4.8 · 5,400 طالب · $99', img:'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80', gradient:'linear-gradient(135deg,#1a2a2a,#0d2b2a)', emoji:'🔒' },
};
export const COURSE_META = {
  'web-dev':{level:'intermediate',price:'paid',rating:4.9,students:'12,400',hours:80,cat:'dev'},
  'ml':{level:'advanced',price:'paid',rating:4.8,students:'9,200',hours:65,cat:'ai'},
  'ux':{level:'beginner',price:'paid',rating:4.9,students:'7,800',hours:55,cat:'design'},
  'data':{level:'intermediate',price:'paid',rating:4.7,students:'6,100',hours:50,cat:'ai'},
  'cyber':{level:'advanced',price:'paid',rating:4.8,students:'5,400',hours:70,cat:'cyber'},
};
export const SWAP_MATCHES = [
  {name:'Omar Khalil',avatar:'👨‍💻',teach:'React',learn:'Python',tags:['React','TypeScript'],pct:92},
  {name:'Lina Hassan',avatar:'👩‍🎨',teach:'Figma',learn:'ML',tags:['Figma','UI Design'],pct:87},
  {name:'Youssef Nasser',avatar:'👨‍💼',teach:'Marketing',learn:'Data Science',tags:['SEO','Analytics'],pct:74},
  {name:'Sara Moustafa',avatar:'👩‍💼',teach:'SQL',learn:'TensorFlow',tags:['SQL','Power BI'],pct:81},
];

export const BLOCKED_DOMAINS = ['gmail.com','yahoo.com','hotmail.com','outlook.com','live.com','icloud.com','aol.com','protonmail.com'];
