const base = {
  en: {
    nav_home:'Home', nav_about:'About', nav_courses:'Find Course', nav_swap:'Skill Swap', nav_profile:'My Profile',
    nav_login:'Login', nav_register:'Register',
    hero_tag:'🚀 #1 Learning Platform', hero_btn1:'Browse Courses', hero_btn2:'Our Story →',
    stat1:'Active Learners', stat2:'Expert Courses', stat3:'Satisfaction Rate', stat4:'Expert Instructors',
    why_tag:'Why Skill Swapping', why_title:'Built for Real Learning', pop_tag:'Popular Courses', pop_title:'Start With Our Best',
    about_tag:'Our Story', about_btn:'Start Learning Today', journey_tag:'Our Journey', journey_title:'How We Got Here',
    team_tag:'The Team', team_title:'Meet Our People', search_tag:'Course Library', search_title:'Find Your Next Skill',
    search_btn_text:'Search', login_title:'Welcome Back 👋', login_sub:'Sign in to continue', login_email:'Email Address',
    login_pass:'Password', login_remember:'Remember me', login_forgot:'Forgot password?', login_btn:'Sign In →',
    login_switch:"Don't have an account?", login_link:'Create one free', login_right_title:'Continue Learning',
    login_right_sub:'Your courses, progress, and certificates — all waiting.',
    reg_title:'Join Skill Swapping ✨', reg_sub:'Start your learning journey today', reg_fname:'First Name',
    reg_lname:'Last Name', reg_email:'Email Address', reg_pass:'Password', reg_hint:'Use 8+ characters',
    reg_terms:'By creating an account, you agree to our Terms of Service and Privacy Policy.',
    reg_btn:'Create Free Account →', reg_switch:'Already have an account?', reg_link:'Sign in',
    reg_right_title:'Start Learning Today', reg_right_sub:'Join 250,000+ learners. Free courses instantly.',
    role_label:'You are here to:', role_learner_title:'Take a Course', role_learner_desc:'Learn new skills',
    role_teacher_title:'Teach a Course', role_teacher_desc:'Share your expertise',
    exam_title:'🎓 Instructor Qualification Exam', exam_subtitle:'Prove your expertise',
    timer_label:'seconds', no_results_title:'No Results Found', no_results_sub:'Try different keywords',
    modal_instructors_label:'👨‍🏫 Certified Instructors', no_instructors:'No certified instructors yet.',
    enroll_btn:'Enroll in Course', toast_login_success:'✅ Login successful!',
    toast_fill_fields:'⚠️ Please fill in all required fields', toast_registered:'✅ Account created successfully!'
  },
  ar: {
    nav_home:'الرئيسية', nav_about:'من نحن', nav_courses:'ابحث عن كورس', nav_swap:'تبادل المهارات', nav_profile:'ملفي',
    nav_login:'تسجيل الدخول', nav_register:'إنشاء حساب',
    hero_tag:'🚀 منصة التعلم الأولى', hero_btn1:'استعرض الكورسات', hero_btn2:'قصتنا ←',
    stat1:'متعلم نشط', stat2:'كورس متخصص', stat3:'نسبة الرضا', stat4:'مدرب خبير',
    why_tag:'لماذا Skill Swapping', why_title:'مبنيّ للتعلم الحقيقي', pop_tag:'أشهر الكورسات', pop_title:'ابدأ بأفضل ما لدينا',
    about_tag:'قصتنا', about_btn:'ابدأ التعلم اليوم', journey_tag:'مسيرتنا', journey_title:'كيف وصلنا إلى هنا',
    team_tag:'فريقنا', team_title:'تعرّف على أعضاء الفريق', search_tag:'مكتبة الكورسات', search_title:'اعثر على مهارتك القادمة',
    search_btn_text:'بحث', login_title:'أهلاً بعودتك 👋', login_sub:'سجّل دخولك لمتابعة رحلتك', login_email:'البريد الإلكتروني',
    login_pass:'كلمة المرور', login_remember:'تذكّرني', login_forgot:'نسيت كلمة المرور؟', login_btn:'تسجيل الدخول ←',
    login_switch:'ليس لديك حساب؟', login_link:'أنشئ حساباً مجانياً', login_right_title:'أكمل تعلّمك',
    login_right_sub:'كورساتك وتقدمك وشهاداتك — كلها بانتظارك.',
    reg_title:'انضم إلى Skill Swapping ✨', reg_sub:'ابدأ رحلتك التعليمية اليوم', reg_fname:'الاسم الأول',
    reg_lname:'اسم العائلة', reg_email:'البريد الإلكتروني', reg_pass:'كلمة المرور', reg_hint:'استخدم 8 أحرف على الأقل',
    reg_terms:'بإنشاء حساب فأنت توافق على شروط الخدمة وسياسة الخصوصية.',
    reg_btn:'إنشاء حساب مجاني ←', reg_switch:'لديك حساب بالفعل؟', reg_link:'سجّل دخولك',
    reg_right_title:'ابدأ التعلم اليوم', reg_right_sub:'انضم لأكثر من 250,000 متعلم.',
    role_label:'أنت هنا لـ:', role_learner_title:'أخذ كورس', role_learner_desc:'تعلّم مهارات جديدة',
    role_teacher_title:'تقديم كورس', role_teacher_desc:'شارك خبرتك',
    exam_title:'🎓 امتحان تأهل المدرب', exam_subtitle:'أثبت خبرتك لتبدأ في تدريس الآخرين',
    timer_label:'ثانية', no_results_title:'لا توجد نتائج', no_results_sub:'جرّب كلمات بحث مختلفة',
    modal_instructors_label:'👨‍🏫 المدربون المعتمدون', no_instructors:'لا يوجد مدربون معتمدون بعد.',
    enroll_btn:'التسجيل في الكورس', toast_login_success:'✅ تم تسجيل الدخول بنجاح!',
    toast_fill_fields:'⚠️ يرجى ملء جميع الحقول المطلوبة', toast_registered:'✅ تم إنشاء الحساب بنجاح!'
  }
};

const extra = {
  en:{hero_h1:'Learn without <em>limits,</em> launch without limits',hero_sub:'Discover your potential with expert-led courses in tech, business and design.',all:'All courses',development:'Development','ai & ml':'AI & ML',design:'Design',cybersecurity:'Cybersecurity',free:'FREE',search_ph:'Search courses, topics, or instructors...',exam_start:'Start Instructor Exam',lang:'English',light:'Light',dark:'Dark',q:'Question',of:'of',correct:'✅ Correct!',wrong:'❌ Wrong answer',pass:'Congratulations! You Passed!',fail:'Almost There!'},
  ar:{hero_h1:'تعلّم بلا <em>حدود،</em> وانطلق بلا قيود',hero_sub:'اكتشف إمكاناتك مع كورسات يقودها خبراء في التقنية والأعمال والتصميم.',all:'كل الكورسات',development:'تطوير','ai & ml':'ذكاء اصطناعي',design:'تصميم',cybersecurity:'أمن سيبراني',free:'مجاني',search_ph:'ابحث عن كورسات أو موضوعات أو مدربين...',exam_start:'ابدأ امتحان المدرب',lang:'عربي',light:'فاتح',dark:'مظلم',q:'سؤال',of:'من',correct:'✅ إجابة صحيحة!',wrong:'❌ إجابة خاطئة',pass:'تهانينا! اجتزت الامتحان',fail:'اقتربت من النجاح!'},
  fr:{nav_home:'Accueil',nav_about:'À propos',nav_courses:'Trouver un cours',nav_swap:'Échange de compétences',nav_profile:'Mon profil',nav_login:'Connexion',nav_register:'Inscription',hero_tag:'🚀 N°1 de l\'apprentissage',hero_btn1:'Voir les cours',hero_btn2:'Notre histoire →',stat1:'Apprenants actifs',stat2:'Cours experts',stat3:'Taux de satisfaction',stat4:'Formateurs experts',hero_h1:'Apprenez sans <em>limites,</em> avancez sans freins',hero_sub:'Développez votre potentiel avec des cours animés par des experts.',search_title:'Trouvez votre prochaine compétence',search_btn_text:'Rechercher',search_ph:'Rechercher cours, sujets ou formateurs...',login_title:'Bon retour 👋',login_email:'Adresse e-mail',login_pass:'Mot de passe',login_btn:'Se connecter →',login_switch:'Pas de compte ?',login_link:'Créer un compte gratuit',toast_login_success:'✅ Connexion réussie !',toast_fill_fields:'⚠️ Veuillez remplir tous les champs',all:'Tous les cours',development:'Développement','ai & ml':'IA & ML',design:'Design',cybersecurity:'Cybersécurité',free:'GRATUIT',exam_title:'🎓 Examen de formateur',exam_subtitle:'Prouvez votre expertise',timer_label:'secondes',exam_start:'Passer l\'examen',lang:'Français',light:'Clair',dark:'Sombre',q:'Question',of:'sur',correct:'✅ Correct !',wrong:'❌ Mauvaise réponse',pass:'Félicitations ! Réussi !',fail:'Presque !',no_results_title:'Aucun résultat',no_results_sub:'Essayez d\'autres mots-clés'}
};

export const LANGS = { ar:{dir:'rtl'}, en:{dir:'ltr'}, fr:{dir:'ltr'} };
export const translations = { ar:{...base.ar,...extra.ar}, en:{...base.en,...extra.en}, fr:{...extra.fr} };
