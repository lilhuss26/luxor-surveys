const translations = {
  ar: {
    // Language Modal
    langModal: {
      title: "اختر لغتك",
      subtitle: "Select Your Language · Choisissez votre langue",
      arabic: "العربية",
      english: "English",
      french: "Français"
    },
    
    // User Info Form
    userInfo: {
      title: "معلوماتك",
      subtitle: "نحتاج بعض المعلومات قبل البدء",
      nameLabel: "الاسم",
      namePlaceholder: "أدخل اسمك الكامل",
      emailLabel: "البريد الإلكتروني",
      emailPlaceholder: "أدخل بريدك الإلكتروني",
      submit: "متابعة إلى الاستبيان",
      nameError: "الرجاء إدخال اسمك",
      emailError: "الرجاء إدخال بريد إلكتروني صحيح"
    },
    
    // Landing Page
    landing: {
      title: "ملتقى الأقصر للسينما الإفريقية",
      subtitle: "النسخة الثانية · 2026 · Luxor African Cinema Forum",
      
      survey1: {
        tag: "اليوم الأول · 31 مارس",
        title: "برمجة المستقبل",
        titleEn: "Programming the Future",
        desc: "الذكاء الاصطناعي في السينما الإفريقية · البرمجة الرقمية والهجينة",
        questions: "📋 9 أسئلة",
        time: "⏱ 5–7 دقائق",
        button: "ابدأ الاستبيان"
      },
      
      survey2: {
        tag: "اليوم الثاني · 1 أبريل",
        title: "سينما مسؤولة ومشتركة",
        titleEn: "Responsible & Collaborative Cinema",
        desc: "الاستدامة البيئية · تبادل الخبرات بين المهرجانات",
        questions: "📋 9 أسئلة",
        time: "⏱ 5–7 دقائق",
        button: "ابدأ الاستبيان"
      },
      
      survey3: {
        tag: "الملتقى كاملًا · ختامي",
        title: "الملتقى كما عشته",
        titleEn: "The Forum, As You Lived It",
        desc: "تقييم شامل للجلسات الأربع · جودة التوصيات · مقترحات النسخة القادمة",
        questions: "📋 14 سؤالاً",
        time: "⏱ 8–10 دقائق",
        button: "ابدأ الاستبيان"
      }
    },
    
    // Survey 1 - Day 1
    survey1: {
      header: {
        back: "← العودة",
        title: "برمجة المستقبل: الذكاء الاصطناعي في السينما الإفريقية",
        subtitle: "Programming the Future: AI & African Cinema"
      },
      progress: "سؤال",
      questions: {
        q1: {
          number: "سؤال 01",
          text: '"لن يُنهي الذكاء الاصطناعي السينما الإفريقية، بل سيكشف من يمتلك رؤية حقيقية ومن لا يمتلكها."',
          choices: [
            "أوافق تمامًا، الرؤية هي ما يميّز السينمائي",
            "أوافق جزئيًا، لكن الوصول للتقنية عامل حاسم أيضًا",
            "أختلف، الخطر حقيقي على صناع الأفلام الأفارقة",
            "أخرى"
          ]
        },
        q2: {
          number: "سؤال 02",
          text: "أيّ جلسة من جلستَي اليوم الأول كانت أكثر إثارةً لتفكيرك؟",
          choices: [
            "الجلسة الأولى: برمجة أفلام الذكاء الاصطناعي ومعايير الإبداع",
            "الجلسة الثانية: البرمجة الهجينة والتحول الرقمي",
            "كلتاهما بنفس القدر"
          ]
        },
        q3: {
          number: "سؤال 03",
          text: "ما المعيار الذي يجب أن يحتل مرتبة أعلى في لجنة الاختيار عند تقييم فيلم استخدم الذكاء الاصطناعي؟",
          choices: [
            "الرؤية الإخراجية الإنسانية وراء الأداة",
            "الابتكار الجمالي أو طريقة استخدام الذكاء الاصطناعي كلغة بصرية",
            "الشفافية الأخلاقية أو الإفصاح عن مصادر البيانات والصور المستخدمة",
            "الأثر على الجمهور الإفريقي المحلي والإقليمي"
          ]
        },
        q4: {
          number: "سؤال 04",
          text: "هل تعتقد أن المهرجانات الإفريقية يجب أن تُنشئ فئة مستقلة لأفلام الذكاء الاصطناعي؟",
          choices: [
            "نعم، فئة مستقلة",
            "لا، ندمجها مع الفئات القائمة",
            "يعتمد على نضج المهرجان",
            "لم أحسم رأيي بعد"
          ]
        },
        q5: {
          number: "سؤال 05",
          text: "كيف تصنف إحساسك تجاه البرمجة الهجينة في المهرجانات الإفريقية؟",
          emojis: [
            { emoji: "😰", label: "قلق" },
            { emoji: "🤔", label: "متردد" },
            { emoji: "🙂", label: "متفائل" },
            { emoji: "🔥", label: "متحمس" },
            { emoji: "🌍", label: "ضرورة حتمية" }
          ]
        },
        q6: {
          number: "سؤال 06",
          text: "إلى أي حد ينبغي أن تؤثر بيانات المشاهدة (نسب الحضور، التفاعل على المنصات) في القرارات البرمجية؟",
          placeholder: "شاركنا رأيك هنا..."
        },
        q7: {
          number: "سؤال 07",
          text: "ما الذي كان غائبًا أو لم يُناقش بما فيه الكفاية في جلستَي اليوم؟",
          placeholder: "شاركنا رأيك هنا..."
        },
        q8: {
          number: "سؤال 08",
          text: "اكتب الفكرة الواحدة التي ستحملها معك من هذا اليوم",
          placeholder: "اكتب هنا..."
        },
        q9: {
          number: "سؤال 09",
          text: "كيف تقيّم عمق النقاش الكلي في اليوم الأول؟",
          stars: [
            { value: "سطحي", label: "Surface-level" },
            { value: "مقبول", label: "Decent" },
            { value: "جيد", label: "Good" },
            { value: "عميق", label: "Deep" },
            { value: "استثنائي", label: "Exceptional" }
          ]
        }
      },
      submit: "إرسال استبيان اليوم الأول ←"
    },
    
    // Survey 2 - Day 2
    survey2: {
      header: {
        back: "← العودة",
        title: "سينما مسؤولة ومشتركة: الاستدامة البيئية وتبادل الخبرات",
        subtitle: "Responsible & Collaborative Cinema"
      },
      progress: "سؤال",
      questions: {
        q1: {
          number: "سؤال 01",
          text: "أين يقف مهرجانك أو مؤسستك اليوم في مسار الاستدامة البيئية؟",
          choices: [
            "بدأنا للتو — لا سياسة بيئية حتى الآن",
            "نفكر ونخطط",
            "نطبّق بعض الممارسات بالفعل"
          ]
        },
        q2: {
          number: "سؤال 02",
          text: "أيّ المقترحات العملية التي نوقشت حول الاستدامة بدا لك الأكثر قابلية للتطبيق فعلًا؟",
          placeholder: "شاركنا رأيك هنا..."
        },
        q3: {
          number: "سؤال 03",
          text: '"يجب أن يصدر كل مهرجان إفريقي سياسة بيئية مكتوبة خلال السنتين القادمتين." هل هذا ممكن في سياقك؟',
          choices: [
            "نعم، وهذا ما سأسعى لتحقيقه",
            "ممكن إذا توفرت الموارد والدعم التقني",
            "صعب في ظل تحديات التمويل الأساسية التي نواجهها",
            "الأولويات مختلفة، البنية التحتية أولًا"
          ]
        },
        q4: {
          number: "سؤال 04",
          text: "أيّ نموذج شراكة بدا لك الأكثر واقعية وفائدة في جلسة التعاون بين المهرجانات؟",
          placeholder: "شاركنا رأيك هنا..."
        },
        q5: {
          number: "سؤال 05",
          text: "اختر إجراءً واحدًا ستستكشف إمكانية تطبيقه في مؤسستك خلال العام القادم",
          choices: [
            "إطلاق برنامج حول البيئة والعدالة المناخية",
            "بناء شراكة برمجية مع مهرجان آخر في المنطقة",
            "وضع سياسة بيئية مكتوبة ولو أولية",
            "استخدام حاسبة الكربون في النسخة القادمة",
            "مشاركة تجربتنا مع مهرجانات أصغر"
          ]
        },
        q6: {
          number: "سؤال 06",
          text: "من كان غائبًا من المحادثة ويجب أن يكون حاضرًا؟",
          choices: [
            "مهرجانات من غرب أو وسط إفريقيا",
            "ممثلو مجتمعات متأثرة بالتغير المناخي",
            "مموّلون ومانحون",
            "صناع أفلام ناشئون من المهرجانات الأصغر",
            "التمثيل كان متوازنًا بشكل جيد"
          ]
        },
        q7: {
          number: "سؤال 07",
          text: "التوصية من اليوم الثاني التي تعتقد أنها قابلة للتطبيق فعلًا خلال عام",
          placeholder: "اكتب هنا..."
        },
        q8: {
          number: "سؤال 08",
          text: "كيف تقيّم عمق النقاش في جلستَي اليوم الثاني؟",
          stars: [
            { value: "سطحي", label: "Surface-level" },
            { value: "مقبول", label: "Decent" },
            { value: "جيد", label: "Good" },
            { value: "عميق", label: "Deep" },
            { value: "استثنائي", label: "Exceptional" }
          ]
        },
        q9: {
          number: "سؤال 09",
          text: "إذا كان بإمكانك توجيه نصيحة واحدة لفريق التنظيم للنسخة القادمة، ماذا ستقول؟",
          placeholder: "نصيحتك هنا..."
        }
      },
      submit: "إرسال استبيان اليوم الثاني ←"
    },
    
    // Survey 3 - Full Forum
    survey3: {
      header: {
        back: "← العودة",
        title: "الملتقى كما عشته",
        subtitle: "The Forum, As You Lived It — Full Evaluation"
      },
      progress: "سؤال",
      sections: {
        a: "أ — من أنت · Who You Are",
        b: "ب — الجلسات الأربع · The Four Sessions",
        c: "ج — التوصيات · The Recommendations",
        d: "د — التجربة · The Experience",
        e: "هـ — النظرة للأمام · Looking Forward"
      },
      questions: {
        q1: {
          number: "سؤال 01",
          text: "ما دورك المهني الأساسي؟",
          choices: [
            "مدير/ة مهرجان",
            "مبرمج/ة أفلام",
            "صانع/ة أفلام",
            "باحث/ة أو أكاديمي/ة"
          ]
        },
        q2: {
          number: "سؤال 02",
          text: "من أي منطقة تأتي؟",
          choices: [
            "شمال إفريقيا",
            "غرب إفريقيا",
            "شرق إفريقيا",
            "وسط / جنوب إفريقيا"
          ]
        },
        q3: {
          number: "سؤال 03",
          text: "حجم مؤسستك أو مهرجانك",
          choices: [
            "ناشئ — أقل من 5 سنوات",
            "متوسط — 5 إلى 15 سنة",
            "راسخ — أكثر من 15 سنة",
            "باحث مستقل / أكاديمي"
          ]
        },
        q4: {
          number: "سؤال 04",
          text: "قيّم عمق وجودة كل جلسة من الجلسات الأربع",
          sessions: [
            "① برمجة أفلام الذكاء الاصطناعي ومعايير الإبداع",
            "② البرمجة الهجينة والتحول الرقمي",
            "③ الاستدامة البيئية في المهرجانات",
            "④ تبادل الخبرات بين المهرجانات الجديدة والراسخة"
          ],
          stars: ["سطحي", "مقبول", "جيد", "عميق", "استثنائي"]
        },
        q5: {
          number: "سؤال 05",
          text: "كيف تقيّم تنوع وتوازن المتحدثين عبر الجلسات الأربع؟",
          choices: [
            "ممتاز — تنوع جغرافي ومهني حقيقي",
            "جيد مع بعض الفجوات الملحوظة",
            "هيمنت بعض المناطق أو التخصصات بشكل واضح",
            "التنوع كان ضعيفًا ويحتاج مراجعة جذرية"
          ]
        },
        q6: {
          number: "سؤال 06",
          text: "إلى أي حد كانت التوصيات الصادرة عن الملتقى محددة وقابلة للتطبيق؟",
          choices: [
            "عامة جدًا — تفتقر للتفاصيل التطبيقية",
            "متوسطة — تحتاج مزيدًا من التفصيل",
            "محددة جدًا وجاهزة للتطبيق"
          ]
        },
        q7: {
          number: "سؤال 07",
          text: "هل شعرت أن التوصيات انطلقت من واقع السينما الإفريقية أم متأثرة بنماذج عالمية؟",
          choices: [
            "منطلقة بعمق من الواقع الإفريقي",
            "مزيج، إفريقية المنطلق لكن عالمية التأثر",
            "طُبقت نماذج عالمية مع تكيّف إفريقي جزئي",
            "استيراد شبه كامل للنماذج الغربية أو الدولية"
          ]
        },
        q8: {
          number: "سؤال 08",
          text: "ما التوصية التي ترى أنها الأكثر قابلية للتأثير على مستقبل السينما الإفريقية؟",
          placeholder: "اذكرها وأخبرنا لماذا..."
        },
        q9: {
          number: "سؤال 09",
          text: "كيف تقيّم الجوانب التنظيمية والعملية للملتقى؟",
          aspects: [
            "التوقيت وتنظيم الجلسات",
            "إمكانية الوصول اللغوي (ترجمة، لغات المتاحة)",
            "المواد والوثائق المتاحة للمشاركين"
          ],
          stars: ["ضعيف", "مقبول", "جيد", "ممتاز"]
        },
        q10: {
          number: "سؤال 10",
          text: "كيف تصف تجربتك الكلية في الملتقى؟",
          emojis: [
            { emoji: "😔", label: "مخيّبة" },
            { emoji: "😐", label: "عادية" },
            { emoji: "🙂", label: "جيدة" },
            { emoji: "😊", label: "ممتازة" },
            { emoji: "🌟", label: "استثنائية" }
          ]
        },
        q11: {
          number: "سؤال 11",
          text: "ما الموضوع الذي يجب أن تتصدر به النسخة الثالثة من الملتقى؟",
          choices: [
            "تمويل السينما الإفريقية المستقلة في زمن المنصات الكبرى",
            "بناء جمهور السينما الإفريقية محليًا وعالميًا",
            "السينما الإفريقية والهوية بين التمثيل والنمطية",
            "التعليم السينمائي وأجيال القادمة من إفريقيا",
            "موضوع آخر سأذكره في الملاحظات"
          ]
        },
        q12: {
          number: "سؤال 12",
          text: "هل يجب أن يظل الملتقى يومين أم يمتد لأكثر؟",
          choices: [
            "يومان",
            "ثلاثة أيام",
            "يوم واحد مكثف",
            "هجين (حضوري وأونلاين متتالي)"
          ]
        },
        q13: {
          number: "سؤال 13",
          text: "ما أهم تغيير تقترحه على فريق التنظيم لجعل الملتقى أكثر تأثيرًا؟",
          choices: [
            "ورش عمل تطبيقية بجانب جلسات النقاش",
            "آليات متابعة واضحة لتنفيذ التوصيات بعد الملتقى",
            "توسيع التمثيل الجغرافي من القارة الإفريقية",
            "إنتاج وثيقة سياسات رسمية صادرة عن الملتقى",
            "إشراك جمهور المهرجان والمجتمع المحلي في الحوار"
          ]
        },
        q14: {
          number: "سؤال 14",
          text: "أي شيء لم يرد في الأسئلة السابقة وتريد إخباره لفريق التنظيم",
          placeholder: "الملتقى كما عشته، بكلماتك أنت..."
        }
      },
      submit: "إرسال التقييم الختامي ←"
    },
    
    // Thank You
    thankyou: {
      icon: "🎬",
      title: "شكرًا على مشاركتك",
      subtitle: "إجاباتك ستُشكّل قرارات النسخة القادمة من الملتقى — صوتك جزء من ذاكرة المهرجان.",
      subtitleEn: "Your responses will shape the next edition. Your voice is part of the festival's memory.",
      back: "← العودة إلى الاستبيانات"
    }
  },
  
  en: {
    // Language Modal
    langModal: {
      title: "Choose Your Language",
      subtitle: "اختر لغتك · Choisissez votre langue",
      arabic: "العربية",
      english: "English",
      french: "Français"
    },
    
    // User Info Form
    userInfo: {
      title: "Your Information",
      subtitle: "We need some information before starting",
      nameLabel: "Name",
      namePlaceholder: "Enter your full name",
      emailLabel: "Email",
      emailPlaceholder: "Enter your email address",
      submit: "Continue to Survey",
      nameError: "Please enter your name",
      emailError: "Please enter a valid email address"
    },
    
    // Landing Page
    landing: {
      title: "Luxor African Cinema Forum",
      subtitle: "Second Edition · 2026 · ملتقى الأقصر للسينما الإفريقية",
      
      survey1: {
        tag: "Day One · March 31",
        title: "Programming the Future",
        titleEn: "برمجة المستقبل",
        desc: "AI in African Cinema · Digital and Hybrid Programming",
        questions: "📋 9 Questions",
        time: "⏱ 5–7 minutes",
        button: "Start Survey"
      },
      
      survey2: {
        tag: "Day Two · April 1",
        title: "Responsible & Collaborative Cinema",
        titleEn: "سينما مسؤولة ومشتركة",
        desc: "Environmental Sustainability · Festival Knowledge Exchange",
        questions: "📋 9 Questions",
        time: "⏱ 5–7 minutes",
        button: "Start Survey"
      },
      
      survey3: {
        tag: "Full Forum · Final",
        title: "The Forum, As You Lived It",
        titleEn: "الملتقى كما عشته",
        desc: "Comprehensive evaluation of all four sessions · Quality of recommendations · Suggestions for next edition",
        questions: "📋 14 Questions",
        time: "⏱ 8–10 minutes",
        button: "Start Survey"
      }
    },
    
    // Survey 1 - Day 1
    survey1: {
      header: {
        back: "← Back",
        title: "Programming the Future: AI & African Cinema",
        subtitle: "برمجة المستقبل: الذكاء الاصطناعي في السينما الإفريقية"
      },
      progress: "Question",
      questions: {
        q1: {
          number: "Question 01",
          text: '"AI will not end African cinema; it will reveal who has a real vision and who does not."',
          choices: [
            "Strongly agree, vision is what distinguishes the filmmaker",
            "Partially agree, but access to technology is also crucial",
            "Disagree, the danger is real for African filmmakers",
            "Other"
          ]
        },
        q2: {
          number: "Question 02",
          text: "Which of the two Day One sessions was most thought-provoking for you?",
          choices: [
            "Session One: Programming AI Films and Creativity Standards",
            "Session Two: Hybrid Programming and Digital Transformation",
            "Both equally"
          ]
        },
        q3: {
          number: "Question 03",
          text: "What criterion should rank highest in the selection committee when evaluating a film that used AI?",
          choices: [
            "The human directorial vision behind the tool",
            "Aesthetic innovation or how AI is used as a visual language",
            "Ethical transparency or disclosure of data and image sources used",
            "Impact on local and regional African audiences"
          ]
        },
        q4: {
          number: "Question 04",
          text: "Do you think African festivals should create a separate category for AI films?",
          choices: [
            "Yes, a separate category",
            "No, integrate them with existing categories",
            "Depends on the festival's maturity",
            "I haven't decided yet"
          ]
        },
        q5: {
          number: "Question 05",
          text: "How would you classify your feeling toward hybrid programming in African festivals?",
          emojis: [
            { emoji: "😰", label: "Worried" },
            { emoji: "🤔", label: "Hesitant" },
            { emoji: "🙂", label: "Optimistic" },
            { emoji: "🔥", label: "Excited" },
            { emoji: "🌍", label: "Inevitable necessity" }
          ]
        },
        q6: {
          number: "Question 06",
          text: "To what extent should viewing data (attendance rates, platform engagement) influence programming decisions?",
          placeholder: "Share your thoughts here..."
        },
        q7: {
          number: "Question 07",
          text: "What was missing or not sufficiently discussed in today's two sessions?",
          placeholder: "Share your thoughts here..."
        },
        q8: {
          number: "Question 08",
          text: "Write the one idea you will carry with you from this day",
          placeholder: "Write here..."
        },
        q9: {
          number: "Question 09",
          text: "How do you rate the overall depth of discussion on Day One?",
          stars: [
            { value: "Surface-level", label: "سطحي" },
            { value: "Decent", label: "مقبول" },
            { value: "Good", label: "جيد" },
            { value: "Deep", label: "عميق" },
            { value: "Exceptional", label: "استثنائي" }
          ]
        }
      },
      submit: "Submit Day One Survey →"
    },
    
    // Survey 2 - Day 2
    survey2: {
      header: {
        back: "← Back",
        title: "Responsible & Collaborative Cinema: Environmental Sustainability and Knowledge Exchange",
        subtitle: "سينما مسؤولة ومشتركة: الاستدامة البيئية وتبادل الخبرات"
      },
      progress: "Question",
      questions: {
        q1: {
          number: "Question 01",
          text: "Where does your festival or institution stand today on the path to environmental sustainability?",
          choices: [
            "Just starting — no environmental policy yet",
            "Thinking and planning",
            "Already implementing some practices"
          ]
        },
        q2: {
          number: "Question 02",
          text: "Which practical proposals discussed about sustainability seemed most feasible to you?",
          placeholder: "Share your thoughts here..."
        },
        q3: {
          number: "Question 03",
          text: '"Every African festival should issue a written environmental policy within the next two years." Is this possible in your context?',
          choices: [
            "Yes, and this is what I will strive to achieve",
            "Possible if resources and technical support are available",
            "Difficult given the basic funding challenges we face",
            "Different priorities, infrastructure first"
          ]
        },
        q4: {
          number: "Question 04",
          text: "Which partnership model seemed most realistic and beneficial in the festival collaboration session?",
          placeholder: "Share your thoughts here..."
        },
        q5: {
          number: "Question 05",
          text: "Choose one action you will explore implementing in your institution within the next year",
          choices: [
            "Launch a program on environment and climate justice",
            "Build a programming partnership with another festival in the region",
            "Develop a written environmental policy, even if preliminary",
            "Use a carbon calculator in the next edition",
            "Share our experience with smaller festivals"
          ]
        },
        q6: {
          number: "Question 06",
          text: "Who was missing from the conversation and should have been present?",
          choices: [
            "Festivals from West or Central Africa",
            "Representatives of communities affected by climate change",
            "Funders and donors",
            "Emerging filmmakers from smaller festivals",
            "Representation was well balanced"
          ]
        },
        q7: {
          number: "Question 07",
          text: "The recommendation from Day Two that you think is actually feasible within a year",
          placeholder: "Write here..."
        },
        q8: {
          number: "Question 08",
          text: "How do you rate the depth of discussion in Day Two's sessions?",
          stars: [
            { value: "Surface-level", label: "سطحي" },
            { value: "Decent", label: "مقبول" },
            { value: "Good", label: "جيد" },
            { value: "Deep", label: "عميق" },
            { value: "Exceptional", label: "استثنائي" }
          ]
        },
        q9: {
          number: "Question 09",
          text: "If you could give one piece of advice to the organizing team for the next edition, what would you say?",
          placeholder: "Your advice here..."
        }
      },
      submit: "Submit Day Two Survey →"
    },
    
    // Survey 3 - Full Forum
    survey3: {
      header: {
        back: "← Back",
        title: "The Forum, As You Lived It",
        subtitle: "الملتقى كما عشته — Full Evaluation"
      },
      progress: "Question",
      sections: {
        a: "A — Who You Are · من أنت",
        b: "B — The Four Sessions · الجلسات الأربع",
        c: "C — The Recommendations · التوصيات",
        d: "D — The Experience · التجربة",
        e: "E — Looking Forward · النظرة للأمام"
      },
      questions: {
        q1: {
          number: "Question 01",
          text: "What is your primary professional role?",
          choices: [
            "Festival Director",
            "Film Programmer",
            "Filmmaker",
            "Researcher or Academic"
          ]
        },
        q2: {
          number: "Question 02",
          text: "Which region are you from?",
          choices: [
            "North Africa",
            "West Africa",
            "East Africa",
            "Central / Southern Africa"
          ]
        },
        q3: {
          number: "Question 03",
          text: "Size of your institution or festival",
          choices: [
            "Emerging — less than 5 years",
            "Medium — 5 to 15 years",
            "Established — more than 15 years",
            "Independent researcher / Academic"
          ]
        },
        q4: {
          number: "Question 04",
          text: "Rate the depth and quality of each of the four sessions",
          sessions: [
            "① Programming AI Films and Creativity Standards",
            "② Hybrid Programming and Digital Transformation",
            "③ Environmental Sustainability in Festivals",
            "④ Knowledge Exchange Between New and Established Festivals"
          ],
          stars: ["Surface-level", "Decent", "Good", "Deep", "Exceptional"]
        },
        q5: {
          number: "Question 05",
          text: "How do you rate the diversity and balance of speakers across the four sessions?",
          choices: [
            "Excellent — real geographical and professional diversity",
            "Good with some noticeable gaps",
            "Some regions or specializations clearly dominated",
            "Diversity was weak and needs fundamental review"
          ]
        },
        q6: {
          number: "Question 06",
          text: "To what extent were the recommendations from the forum specific and actionable?",
          choices: [
            "Too general — lacking implementation details",
            "Medium — needs more detail",
            "Very specific and ready to implement"
          ]
        },
        q7: {
          number: "Question 07",
          text: "Did you feel the recommendations originated from African cinema reality or were influenced by global models?",
          choices: [
            "Deeply rooted in African reality",
            "Mixed, African in origin but globally influenced",
            "Global models applied with partial African adaptation",
            "Almost complete import of Western or international models"
          ]
        },
        q8: {
          number: "Question 08",
          text: "What recommendation do you see as most likely to impact the future of African cinema?",
          placeholder: "Mention it and tell us why..."
        },
        q9: {
          number: "Question 09",
          text: "How do you rate the organizational and practical aspects of the forum?",
          aspects: [
            "Timing and session organization",
            "Language accessibility (translation, available languages)",
            "Materials and documents available to participants"
          ],
          stars: ["Poor", "Acceptable", "Good", "Excellent"]
        },
        q10: {
          number: "Question 10",
          text: "How would you describe your overall experience at the forum?",
          emojis: [
            { emoji: "😔", label: "Disappointing" },
            { emoji: "😐", label: "Average" },
            { emoji: "🙂", label: "Good" },
            { emoji: "😊", label: "Excellent" },
            { emoji: "🌟", label: "Exceptional" }
          ]
        },
        q11: {
          number: "Question 11",
          text: "What topic should the third edition of the forum lead with?",
          choices: [
            "Financing independent African cinema in the age of major platforms",
            "Building audiences for African cinema locally and globally",
            "African cinema and identity between representation and stereotyping",
            "Film education and the coming generations from Africa",
            "Another topic I will mention in the notes"
          ]
        },
        q12: {
          number: "Question 12",
          text: "Should the forum remain two days or extend longer?",
          choices: [
            "Two days",
            "Three days",
            "One intensive day",
            "Hybrid (in-person and online consecutive)"
          ]
        },
        q13: {
          number: "Question 13",
          text: "What is the most important change you suggest to the organizing team to make the forum more impactful?",
          choices: [
            "Practical workshops alongside discussion sessions",
            "Clear follow-up mechanisms to implement recommendations after the forum",
            "Expand geographical representation from the African continent",
            "Produce an official policy document issued by the forum",
            "Involve the festival audience and local community in the dialogue"
          ]
        },
        q14: {
          number: "Question 14",
          text: "Anything not covered in the previous questions that you want to tell the organizing team",
          placeholder: "The forum as you lived it, in your own words..."
        }
      },
      submit: "Submit Final Evaluation →"
    },
    
    // Thank You
    thankyou: {
      icon: "🎬",
      title: "Thank You for Your Participation",
      subtitle: "Your responses will shape the decisions of the next edition of the forum — your voice is part of the festival's memory.",
      subtitleEn: "إجاباتك ستُشكّل قرارات النسخة القادمة من الملتقى — صوتك جزء من ذاكرة المهرجان",
      back: "← Back to Surveys"
    }
  },
  
  fr: {
    // Language Modal
    langModal: {
      title: "Choisissez votre langue",
      subtitle: "اختر لغتك · Select Your Language",
      arabic: "العربية",
      english: "English",
      french: "Français"
    },
    
    // User Info Form
    userInfo: {
      title: "Vos informations",
      subtitle: "Nous avons besoin de quelques informations avant de commencer",
      nameLabel: "Nom",
      namePlaceholder: "Entrez votre nom complet",
      emailLabel: "Email",
      emailPlaceholder: "Entrez votre adresse email",
      submit: "Continuer vers l'enquête",
      nameError: "Veuillez entrer votre nom",
      emailError: "Veuillez entrer une adresse email valide"
    },
    
    // Landing Page
    landing: {
      title: "Forum du Cinéma Africain de Louxor",
      subtitle: "Deuxième Édition · 2026 · ملتقى الأقصر للسينما الإفريقية",
      
      survey1: {
        tag: "Premier Jour · 31 Mars",
        title: "Programmer l'Avenir",
        titleEn: "Programming the Future",
        desc: "L'IA dans le cinéma africain · Programmation numérique et hybride",
        questions: "📋 9 Questions",
        time: "⏱ 5–7 minutes",
        button: "Commencer l'enquête"
      },
      
      survey2: {
        tag: "Deuxième Jour · 1er Avril",
        title: "Cinéma Responsable et Collaboratif",
        titleEn: "Responsible & Collaborative Cinema",
        desc: "Durabilité environnementale · Échange de connaissances entre festivals",
        questions: "📋 9 Questions",
        time: "⏱ 5–7 minutes",
        button: "Commencer l'enquête"
      },
      
      survey3: {
        tag: "Forum Complet · Final",
        title: "Le Forum, Tel Que Vous L'avez Vécu",
        titleEn: "The Forum, As You Lived It",
        desc: "Évaluation complète des quatre sessions · Qualité des recommandations · Suggestions pour la prochaine édition",
        questions: "📋 14 Questions",
        time: "⏱ 8–10 minutes",
        button: "Commencer l'enquête"
      }
    },
    
    // Survey 1 - Day 1
    survey1: {
      header: {
        back: "← Retour",
        title: "Programmer l'Avenir : L'IA et le Cinéma Africain",
        subtitle: "Programming the Future: AI & African Cinema"
      },
      progress: "Question",
      questions: {
        q1: {
          number: "Question 01",
          text: '"L\'IA ne mettra pas fin au cinéma africain ; elle révélera qui a une vraie vision et qui ne l\'a pas."',
          choices: [
            "Tout à fait d'accord, la vision est ce qui distingue le cinéaste",
            "Partiellement d'accord, mais l'accès à la technologie est également crucial",
            "Pas d'accord, le danger est réel pour les cinéastes africains",
            "Autre"
          ]
        },
        q2: {
          number: "Question 02",
          text: "Laquelle des deux sessions du premier jour a été la plus stimulante pour vous ?",
          choices: [
            "Session 1 : Programmer les films IA et les normes de créativité",
            "Session 2 : Programmation hybride et transformation numérique",
            "Les deux également"
          ]
        },
        q3: {
          number: "Question 03",
          text: "Quel critère devrait être le plus important pour le comité de sélection lors de l'évaluation d'un film utilisant l'IA ?",
          choices: [
            "La vision humaine de réalisation derrière l'outil",
            "L'innovation esthétique ou la façon dont l'IA est utilisée comme langage visuel",
            "La transparence éthique ou la divulgation des sources de données et d'images utilisées",
            "L'impact sur les publics africains locaux et régionaux"
          ]
        },
        q4: {
          number: "Question 04",
          text: "Pensez-vous que les festivals africains devraient créer une catégorie séparée pour les films IA ?",
          choices: [
            "Oui, une catégorie séparée",
            "Non, les intégrer aux catégories existantes",
            "Dépend de la maturité du festival",
            "Je n'ai pas encore décidé"
          ]
        },
        q5: {
          number: "Question 05",
          text: "Comment classeriez-vous votre sentiment vis-à-vis de la programmation hybride dans les festivals africains ?",
          emojis: [
            { emoji: "😰", label: "Inquiet" },
            { emoji: "🤔", label: "Hésitant" },
            { emoji: "🙂", label: "Optimiste" },
            { emoji: "🔥", label: "Enthousiaste" },
            { emoji: "🌍", label: "Nécessité inévitable" }
          ]
        },
        q6: {
          number: "Question 06",
          text: "Dans quelle mesure les données de visionnage (taux de fréquentation, engagement sur les plateformes) devraient-elles influencer les décisions de programmation ?",
          placeholder: "Partagez vos réflexions ici..."
        },
        q7: {
          number: "Question 07",
          text: "Qu'est-ce qui manquait ou n'a pas été suffisamment discuté dans les deux sessions d'aujourd'hui ?",
          placeholder: "Partagez vos réflexions ici..."
        },
        q8: {
          number: "Question 08",
          text: "Écrivez l'idée unique que vous emporterez de cette journée",
          placeholder: "Écrivez ici..."
        },
        q9: {
          number: "Question 09",
          text: "Comment évaluez-vous la profondeur globale de la discussion du premier jour ?",
          stars: [
            { value: "Superficiel", label: "Surface-level" },
            { value: "Correct", label: "Decent" },
            { value: "Bon", label: "Good" },
            { value: "Profond", label: "Deep" },
            { value: "Exceptionnel", label: "Exceptional" }
          ]
        }
      },
      submit: "Soumettre l'enquête du premier jour →"
    },
    
    // Survey 2 - Day 2
    survey2: {
      header: {
        back: "← Retour",
        title: "Cinéma Responsable et Collaboratif : Durabilité Environnementale et Échange de Connaissances",
        subtitle: "Responsible & Collaborative Cinema"
      },
      progress: "Question",
      questions: {
        q1: {
          number: "Question 01",
          text: "Où se situe votre festival ou institution aujourd'hui sur le chemin de la durabilité environnementale ?",
          choices: [
            "Tout juste commencé — pas encore de politique environnementale",
            "En réflexion et planification",
            "Mise en œuvre de certaines pratiques déjà"
          ]
        },
        q2: {
          number: "Question 02",
          text: "Quelles propositions pratiques discutées sur la durabilité vous ont semblé les plus réalisables ?",
          placeholder: "Partagez vos réflexions ici..."
        },
        q3: {
          number: "Question 03",
          text: '"Chaque festival africain devrait publier une politique environnementale écrite dans les deux prochaines années." Est-ce possible dans votre contexte ?',
          choices: [
            "Oui, et c'est ce que je vais m'efforcer de réaliser",
            "Possible si les ressources et le soutien technique sont disponibles",
            "Difficile compte tenu des défis de financement de base auxquels nous sommes confrontés",
            "Priorités différentes, infrastructure d'abord"
          ]
        },
        q4: {
          number: "Question 04",
          text: "Quel modèle de partenariat vous a semblé le plus réaliste et bénéfique lors de la session de collaboration entre festivals ?",
          placeholder: "Partagez vos réflexions ici..."
        },
        q5: {
          number: "Question 05",
          text: "Choisissez une action que vous explorerez pour la mettre en œuvre dans votre institution au cours de l'année prochaine",
          choices: [
            "Lancer un programme sur l'environnement et la justice climatique",
            "Construire un partenariat de programmation avec un autre festival de la région",
            "Développer une politique environnementale écrite, même préliminaire",
            "Utiliser un calculateur de carbone lors de la prochaine édition",
            "Partager notre expérience avec des festivals plus petits"
          ]
        },
        q6: {
          number: "Question 06",
          text: "Qui manquait dans la conversation et aurait dû être présent ?",
          choices: [
            "Festivals d'Afrique de l'Ouest ou centrale",
            "Représentants des communautés affectées par le changement climatique",
            "Bailleurs de fonds et donateurs",
            "Cinéastes émergents de festivals plus petits",
            "La représentation était bien équilibrée"
          ]
        },
        q7: {
          number: "Question 07",
          text: "La recommandation du deuxième jour que vous pensez réellement réalisable dans un an",
          placeholder: "Écrivez ici..."
        },
        q8: {
          number: "Question 08",
          text: "Comment évaluez-vous la profondeur de la discussion dans les sessions du deuxième jour ?",
          stars: [
            { value: "Superficiel", label: "Surface-level" },
            { value: "Correct", label: "Decent" },
            { value: "Bon", label: "Good" },
            { value: "Profond", label: "Deep" },
            { value: "Exceptionnel", label: "Exceptional" }
          ]
        },
        q9: {
          number: "Question 09",
          text: "Si vous pouviez donner un conseil à l'équipe organisatrice pour la prochaine édition, que diriez-vous ?",
          placeholder: "Votre conseil ici..."
        }
      },
      submit: "Soumettre l'enquête du deuxième jour →"
    },
    
    // Survey 3 - Full Forum
    survey3: {
      header: {
        back: "← Retour",
        title: "Le Forum, Tel Que Vous L'avez Vécu",
        subtitle: "The Forum, As You Lived It — Évaluation Complète"
      },
      progress: "Question",
      sections: {
        a: "A — Qui Vous Êtes · Who You Are",
        b: "B — Les Quatre Sessions · The Four Sessions",
        c: "C — Les Recommandations · The Recommendations",
        d: "D — L'Expérience · The Experience",
        e: "E — Regard vers l'Avenir · Looking Forward"
      },
      questions: {
        q1: {
          number: "Question 01",
          text: "Quel est votre rôle professionnel principal ?",
          choices: [
            "Directeur/trice de festival",
            "Programmateur/trice de films",
            "Cinéaste",
            "Chercheur/se ou universitaire"
          ]
        },
        q2: {
          number: "Question 02",
          text: "De quelle région venez-vous ?",
          choices: [
            "Afrique du Nord",
            "Afrique de l'Ouest",
            "Afrique de l'Est",
            "Afrique centrale / australe"
          ]
        },
        q3: {
          number: "Question 03",
          text: "Taille de votre institution ou festival",
          choices: [
            "Émergent — moins de 5 ans",
            "Moyen — 5 à 15 ans",
            "Établi — plus de 15 ans",
            "Chercheur/se indépendant/e / Universitaire"
          ]
        },
        q4: {
          number: "Question 04",
          text: "Évaluez la profondeur et la qualité de chacune des quatre sessions",
          sessions: [
            "① Programmer les films IA et les normes de créativité",
            "② Programmation hybride et transformation numérique",
            "③ Durabilité environnementale dans les festivals",
            "④ Échange de connaissances entre festivals nouveaux et établis"
          ],
          stars: ["Superficiel", "Correct", "Bon", "Profond", "Exceptionnel"]
        },
        q5: {
          number: "Question 05",
          text: "Comment évaluez-vous la diversité et l'équilibre des intervenants à travers les quatre sessions ?",
          choices: [
            "Excellent — véritable diversité géographique et professionnelle",
            "Bon avec quelques lacunes notables",
            "Certaines régions ou spécialités ont clairement dominé",
            "La diversité était faible et nécessite une révision fondamentale"
          ]
        },
        q6: {
          number: "Question 06",
          text: "Dans quelle mesure les recommandations du forum étaient-elles spécifiques et réalisables ?",
          choices: [
            "Trop générales — manquant de détails de mise en œuvre",
            "Moyennes — nécessitent plus de détails",
            "Très spécifiques et prêtes à être mises en œuvre"
          ]
        },
        q7: {
          number: "Question 07",
          text: "Avez-vous eu le sentiment que les recommandations provenaient de la réalité du cinéma africain ou étaient influencées par des modèles mondiaux ?",
          choices: [
            "Profondément enracinées dans la réalité africaine",
            "Mixte, africaine à l'origine mais influencée mondialement",
            "Modèles mondiaux appliqués avec adaptation africaine partielle",
            "Importation presque complète de modèles occidentaux ou internationaux"
          ]
        },
        q8: {
          number: "Question 08",
          text: "Quelle recommandation voyez-vous comme la plus susceptible d'impacter l'avenir du cinéma africain ?",
          placeholder: "Mentionnez-la et dites-nous pourquoi..."
        },
        q9: {
          number: "Question 09",
          text: "Comment évaluez-vous les aspects organisationnels et pratiques du forum ?",
          aspects: [
            "Timing et organisation des sessions",
            "Accessibilité linguistique (traduction, langues disponibles)",
            "Matériaux et documents disponibles pour les participants"
          ],
          stars: ["Faible", "Acceptable", "Bon", "Excellent"]
        },
        q10: {
          number: "Question 10",
          text: "Comment décririez-vous votre expérience globale au forum ?",
          emojis: [
            { emoji: "😔", label: "Décevante" },
            { emoji: "😐", label: "Moyenne" },
            { emoji: "🙂", label: "Bonne" },
            { emoji: "😊", label: "Excellente" },
            { emoji: "🌟", label: "Exceptionnelle" }
          ]
        },
        q11: {
          number: "Question 11",
          text: "Quel sujet devrait ouvrir la troisième édition du forum ?",
          choices: [
            "Financement du cinéma africain indépendant à l'ère des grandes plateformes",
            "Construire des publics pour le cinéma africain localement et mondialement",
            "Cinéma africain et identité entre représentation et stéréotypes",
            "Éducation cinématographique et générations à venir d'Afrique",
            "Un autre sujet que je mentionnerai dans les notes"
          ]
        },
        q12: {
          number: "Question 12",
          text: "Le forum devrait-il rester deux jours ou s'étendre plus longtemps ?",
          choices: [
            "Deux jours",
            "Trois jours",
            "Un jour intensif",
            "Hybride (en personne et en ligne consécutifs)"
          ]
        },
        q13: {
          number: "Question 13",
          text: "Quel est le changement le plus important que vous suggérez à l'équipe organisatrice pour rendre le forum plus impactant ?",
          choices: [
            "Ateliers pratiques aux côtés des sessions de discussion",
            "Mécanismes de suivi clairs pour mettre en œuvre les recommandations après le forum",
            "Élargir la représentation géographique du continent africain",
            "Produire un document politique officiel émis par le forum",
            "Impliquer le public du festival et la communauté locale dans le dialogue"
          ]
        },
        q14: {
          number: "Question 14",
          text: "Quelque chose qui n'a pas été couvert dans les questions précédentes et que vous voulez dire à l'équipe organisatrice",
          placeholder: "Le forum tel que vous l'avez vécu, dans vos propres mots..."
        }
      },
      submit: "Soumettre l'évaluation finale →"
    },
    
    // Thank You
    thankyou: {
      icon: "🎬",
      title: "Merci pour Votre Participation",
      subtitle: "Vos réponses façonneront les décisions de la prochaine édition du forum — votre voix fait partie de la mémoire du festival.",
      subtitleEn: "Your responses will shape the next edition. Your voice is part of the festival's memory.",
      back: "← Retour aux enquêtes"
    }
  }
};
