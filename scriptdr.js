

// This file contains all the data that can change (courses, form URL)

const courses = [
      {
        id: "hifz-quran",
        title: "🌟 دورة حفظ القرآن الكريم 🌟",
        description: "دورة مخصصة لحفظ كتاب الله بطريقة منهجية وميسرة، مع التركيز على التلقين الصحيح والمراجعة المستمرة لضمان الحفظ المتقن.",
        marquee: "📢 سجّل الآن في دورة حفظ القرآن الكريم، وابدأ رحلتك مع كتاب الله!",
        objectives: [
          "التمكن من الحفظ اليومي للآيات.",
          "تطبيق منهجية المراجعة الفعالة.",
          "تجويد الآيات المحفوظة.",
          "ربط الحفظ بالتدبر والفهم."
        ],
        axes: [
          "منهجية الحفظ اليومي.",
          "أهمية المراجعة الدائمة.",
          "ربط المتشابهات اللفظية.",
          "تدريبات عملية على الحفظ.",
          "آداب حامل القرآن."
        ],
        instructors: [
          { name: "الشيخ محمد سعيد", expertise: "مقرئ مجاز" },
          { name: "الأستاذة خديجة أحمد", expertise: "معلمة قرآن" }
        ],
        testimonials: [
          { text: "الدورة كانت رائعة، ساعدتني على إنجاز جزء كبير من الحفظ في وقت قياسي.", name: "علي" }
        ],
        faq: [
          { question: "هل الدورة للمبتدئين؟", answer: "نعم، الدورة تناسب جميع المستويات، من المبتدئين إلى المتقدمين." }
        ],
        achievements: "حفظ أجزاء من القرآن الكريم.<br>تجويد سليم للحروف.<br>ثقة في الحفظ.<br>شهادة إتمام الدورة."
      },
      {
        id: "tasbit-quran",
        title: "🌟 دورة تثبيت القرآن الكريم 🌟",
        description: "دورة متخصصة لمساعدة الحفاظ على مراجعة وتثبيت ما حفظوه من كتاب الله، باستخدام تقنيات فعالة لضمان عدم النسيان وزيادة التمكن.",
        marquee: "📢 سجّل الآن في دورة تثبيت القرآن الكريم، وحافظ على ما حفظته بإتقان!",
        objectives: [
          "التمكن من تقنيات المراجعة الفعالة.",
          "ربط الآيات المتشابهة لزيادة التثبيت.",
          "القدرة على استحضار الآيات بسرعة.",
          "تعزيز الحفظ الحالي وتعميقه."
        ],
        axes: [
          "منهجية المراجعة اليومية والأسبوعية.",
          "تدريبات عملية على المتشابهات اللفظية.",
          "استخدام الخرائط الذهنية لتثبيت السور.",
          "تقنيات التلاوة المتقنة."
        ],
        instructors: [
          { name: "الشيخ محمود السيد", expertise: "مقرئ مجاز وخبير في التثبيت" }
        ],
        testimonials: [
          { text: "الدورة ساعدتني على استعادة ثقتي بحفظي، لم أعد أنسى كما كنت من قبل.", name: "يوسف" }
        ],
        faq: [
          { question: "هل الدورة للحفاظ فقط؟", answer: "نعم، الدورة موجهة خصيصًا لمن أتموا حفظ جزء من القرآن." }
        ],
        achievements: "التمكن من المراجعة الدائمة.<br>حفظ راسخ وثابت.<br>القدرة على استحضار الآيات في أي وقت.<br>شهادة معتمدة في تثبيت القرآن."
      },
      {
        id: "tajweed",
        title: "🌟 دورة التجويد والقراءات 🌟",
        description: "دورة شاملة لتعليم قواعد التجويد الأساسية والمتقدمة، مع شرح لأحكام النون الساكنة والتنوين، المدود، والمخارج والصفات، بهدف تلاوة القرآن الكريم تلاوة صحيحة ومتقنة.",
        marquee: "📢 سجّل الآن في دورة التجويد والقراءات، وحسّن تلاوتك للقرآن الكريم!",
        objectives: [
          "إتقان مخارج الحروف العربية وصفاتها.",
          "تطبيق أحكام التجويد الأساسية بشكل صحيح.",
          "فهم أحكام المدود وأنواعها.",
          "التمكن من تلاوة القرآن الكريم بتجويد سليم."
        ],
        axes: [
          "أحكام النون الساكنة والتنوين.",
          "أحكام الميم الساكنة.",
          "المخارج والصفات.",
          "المدود وأقسامها.",
          "الصفات اللازمة والعارضة للحروف."
        ],
        instructors: [
          { name: "الشيخ عبد الرحمن", expertise: "مقرئ مجاز في القراءات العشر" }
        ],
        testimonials: [
          { text: "الدورة كانت مفيدة جدًا، الآن أستطيع قراءة القرآن بشكل أفضل.", name: "فاطمة" },
          { text: "الشيخ ممتاز في الشرح وتبسيط المعلومة، أنصح بها بشدة.", name: "أحمد" }
        ],
        faq: [
          { question: "هل الدورة للمبتدئين؟", answer: "نعم، الدورة مصممة للمبتدئين وتتدرج إلى المستويات المتقدمة." }
        ],
        achievements: "تلاوة القرآن بشكل صحيح.<br>القدرة على تطبيق أحكام التجويد عمليًا.<br>الحصول على شهادة إتمام الدورة."
      },
      {
        id: "diploma-business",
        title: "🌟 دبلوم إدارة الأعمال 🌟",
        description: "دبلوم شامل يغطي جميع جوانب إدارة الأعمال الحديثة، من التخطيط الاستراتيجي والتسويق إلى الإدارة المالية والموارد البشرية.",
        marquee: "📢 دبلوم إدارة الأعمال: خطوتك الأولى نحو عالم الإدارة والقيادة الناجحة.",
        objectives: [
          "فهم المبادئ الأساسية للإدارة.",
          "تطوير مهارات التخطيط الاستراتيجي.",
          "إتقان أساسيات التسويق الرقمي.",
          "التعرف على الإدارة المالية والمحاسبة."
        ],
        axes: [
          "مقدمة في الإدارة الحديثة.",
          "التخطيط والتنظيم.",
          "القيادة والتحفيز.",
          "الموارد البشرية والإدارة المالية.",
          "التسويق والمبيعات."
        ],
        instructors: [
          { name: "الأستاذة نورا خالد", expertise: "مستشارة إدارية" }
        ],
        testimonials: [
          { text: "الدبلوم غير نظرتي تمامًا للإدارة، أصبح لدي خطة واضحة لمشروعي الخاص.", name: "علياء" }
        ],
        faq: [
          { question: "هل الدبلوم مناسب للمبتدئين؟", answer: "نعم، الدبلوم مصمم لجميع المستويات." }
        ],
        achievements: "فهم شامل لإدارة الأعمال.<br>شهادة دبلوم معتمدة.<br>بناء خطة عمل متكاملة.<br>القدرة على إدارة فريق عمل بنجاح."
      },
      {
        id: "diploma-graphic",
        title: "🌟 دبلوم الجرافيك ديزاين 🌟",
        description: "دبلوم متخصص يمنحك المهارات اللازمة لتصبح مصمم جرافيك محترف. ستتعلم أساسيات التصميم، استخدام برامج Adobe، وإنشاء تصاميم إبداعية للإعلانات والمواقع والتسويق.",
        marquee: "📢 دبلوم الجرافيك ديزاين: أطلق العنان لإبداعك وابدأ في تصميم عالمك الرقمي.",
        objectives: [
          "فهم نظريات الألوان والخطوط.",
          "إتقان برامج التصميم مثل Photoshop و Illustrator.",
          "إنشاء هوية بصرية كاملة للعلامات التجارية.",
          "تصميم إعلانات جذابة للمنصات المختلفة."
        ],
        axes: [
          "أساسيات التصميم الجرافيكي.",
          "التعامل مع برامج Adobe.",
          "تصميم الشعارات والهوية البصرية.",
          "تصميم الإعلانات والمنشورات.",
          "تطبيقات عملية على مشاريع حقيقية."
        ],
        instructors: [
          { name: "علياء مصطفى", expertise: "مصممة جرافيك بخبرة 10 سنوات" }
        ],
        testimonials: [
          { text: "أفضل دبلوم في التصميم، الآن أعمل على مشاريع حرة وأنا واثق من مهاراتي.", name: "سالم" },
          { text: "الشروحات مبسطة وعملية، تعلمت الكثير في وقت قصير.", name: "ريم" }
        ],
        faq: [
          { question: "هل أحتاج لخبرة سابقة؟", answer: "لا، الدبلوم مناسب للمبتدئين من الصفر." }
        ],
        achievements: "محفظة أعمال احترافية.<br>إتقان برامج التصميم الأساسية.<br>القدرة على العمل كمصمم حر.<br>شهادة دبلوم معتمدة."
      },
      {
        id: "diploma-cybersecurity",
        title: "🌟 دبلوم الأمن السيبراني 🌟",
        description: "دبلوم شامل يزودك بالمعرفة والمهارات اللازمة لحماية الأنظمة والشبكات والبيانات من التهديدات السيبرانية. ستتعلم كيفية تحليل المخاطر، واكتشاف الثغرات، وتطبيق أفضل الممارسات الأمنية.",
        marquee: "📢 دبلوم الأمن السيبراني: كن خط الدفاع الأول في عالم التكنولوجيا.",
        objectives: [
          "فهم أساسيات الأمن السيبراني.",
          "التعرف على أنواع الهجمات الإلكترونية وطرق الدفاع عنها.",
          "تطبيق تقنيات التشفير وحماية البيانات.",
          "إجراء تحليل للمخاطر الأمنية في الشبكات."
        ],
        axes: [
          "مقدمة في الأمن السيبراني.",
          "أمن الشبكات والخوادم.",
          "القرصنة الأخلاقية.",
          "حماية البيانات والخصوصية.",
          "الاستجابة للحوادث الأمنية."
        ],
        instructors: [
          { name: "مهندس أحمد ناصر", expertise: "خبير أمن سيبراني" }
        ],
        testimonials: [
          { text: "الدورة كانت مفصلة وعملية للغاية، تعلمت كيفية تأمين شبكتي المنزلية والبيانات الشخصية.", name: "محمد" }
        ],
        faq: [
          { question: "هل الدبلوم يتطلب خلفية في البرمجة؟", answer: "لا، الدبلوم مصمم ليناسب جميع الخلفيات، لكن يفضل وجود معرفة أساسية بالشبكات." }
        ],
        achievements: "فهم عميق للأمن السيبراني.<br>القدرة على تأمين الأنظمة والشبكات.<br>شهادة دبلوم معتمدة."
      },
      {
        id: "digital-content",
        title: "🌟 دورة صناعة المحتوى الرقمي 🌟",
        description: "دورة عملية لتعلم كيفية إنشاء محتوى جذاب ومؤثر لمختلف المنصات الرقمية. ستغطي الدورة كتابة النصوص، تصوير الفيديو، تحرير الصور، وكيفية التخطيط الاستراتيجي للمحتوى.",
        marquee: "📢 دورة صناعة المحتوى الرقمي: حوّل أفكارك إلى محتوى يجذب الجماهير.",
        objectives: [
          "تحديد الجمهور المستهدف وتفصيل المحتوى المناسب له.",
          "كتابة نصوص إبداعية ومؤثرة.",
          "تصوير وتحرير مقاطع فيديو احترافية.",
          "بناء استراتيجية محتوى متكاملة."
        ],
        axes: [
          "أنواع المحتوى الرقمي.",
          "التخطيط والبحث عن الأفكار.",
          "الكتابة الإبداعية ومبادئها.",
          "التصوير والمونتاج الاحترافي.",
          "نشر المحتوى وتحليل الأداء."
        ],
        instructors: [
          { name: "سارة عيسى", expertise: "صانعة محتوى رقمي" }
        ],
        testimonials: [
          { text: "الدورة كانت نقطة تحول بالنسبة لي، أصبحت أكثر ثقة في إنتاج محتوى عالي الجودة.", name: "ليلى" }
        ],
        faq: [
          { question: "هل يمكنني الانضمام إذا كنت لا أمتلك كاميرا احترافية؟", answer: "نعم، يمكنك استخدام كاميرا هاتفك الذكي للتدرب وتطبيق المهارات." }
        ],
        achievements: "خطة محتوى شخصية.<br>مهارات في التصوير والمونتاج.<br>القدرة على إنتاج محتوى جذاب.<br>شهادة مشاركة في الدورة."
      },
      {
        id: "negotiation",
        title: "🌟 دورة مهارات التفاوض والإقناع 🌟",
        description: "دورة مصممة لتطوير قدراتك في التفاوض والإقناع، سواء في بيئة العمل أو الحياة اليومية. ستتعلم كيف تفهم الطرف الآخر، وتستخدم الاستراتيجيات الصحيحة للوصول إلى اتفاقات تحقق المنفعة للجميع.",
        marquee: "📢 دورة مهارات التفاوض: تعلم كيف تحصل على ما تريد بذكاء واحترافية.",
        objectives: [
          "فهم أسس التفاوض الناجح.",
          "اكتشاف نقاط القوة والضعف في موقفك التفاوضي.",
          "التمكن من تقنيات الإقناع الفعالة.",
          "حل النزاعات والوصول إلى حلول وسط."
        ],
        axes: [
          "مبادئ التفاوض الاستراتيجي.",
          "فن الاستماع الفعال.",
          "لغة الجسد في التفاوض.",
          "تقنيات الإقناع الذهني والعاطفي.",
          "التفاوض في المواقف الصعبة."
        ],
        instructors: [
          { name: "د. يوسف الشريف", expertise: "مستشار ومدرب في الإدارة والتفاوض" }
        ],
        testimonials: [
          { text: "بعد هذه الدورة، أصبحت أثق بنفسي أكثر في المفاوضات التجارية.", name: "سامي" },
          { text: "دكتور يوسف رائع، الشرح كان مبسطًا وسهل التطبيق.", name: "نورة" }
        ],
        faq: [
          { question: "هل الدورة موجهة للمبيعات فقط؟", answer: "لا، المهارات التي يتم تعلمها يمكن تطبيقها في جميع جوانب الحياة المهنية والشخصية." }
        ],
        achievements: "القدرة على التفاوض بثقة.<br>مهارات إقناع عالية.<br>حل الخلافات بفعالية.<br>شهادة مشاركة في الدورة."
      },
  {
    id: "hifz",
    title: "🌟 دورة الحفظ السريع للقرآن الكريم – تثبيت وحفظ بإتقان 🌟",
    description: "هل ترغب في حفظ القرآن الكريم بسرعة وثبات، مع تثبيت آياته في ذهنك بفاعلية؟ انضم إلى دورة متخصصة في الحفظ السريع للقرآن، حيث تركز على أساليب وتقنيات حديثة تساعدك على الحفظ بشكل يومي ومنظم.",
    marquee: "📢 سجّل الآن في دورة 'الحفظ السريع للقرآن الكريم' قبل اكتمال العدد! خطوة نحو حفظ القرآن بإتقان وثقة، مع متابعة مستمرة وتوجيه شخصي.",
    objectives: [
      "إتقان الحفظ السريع للآيات القرآنية.",
      "تثبيت الحفظ باستخدام أساليب علمية ومنهجية.",
      "تحسين التركيز والقدرة على المراجعة اليومية.",
      "تعزيز الثقة في الحفظ والاستعداد للاختبارات القرآنية.",
      "تطوير عادة الحفظ المستمرة مع التدرج في الكمية والوقت."
    ],
    axes: [
      "مدخل إلى طرق الحفظ السريع وأساليبه.",
      "تنظيم جدول الحفظ اليومي والاسبوعي.",
      "أساليب التكرار والتثبيت الذهني.",
      "تقنيات التركيز والانتباه أثناء الحفظ.",
      "مراجعة دورية للآيات السابقة.",
      "تدريبات عملية على سور مختارة."
    ],
    instructors: [
      { name: "عبدالله محمد", expertise: "خبير في أساليب الحفظ السريع للقرآن." },
      { name: "فاطمة الزهراء", expertise: "مدربة معتمدة في تقنيات التثبيت الذهني." },
      { name: "أحمد علي", expertise: "مستشار في المراجعة المتقنة للقرآن الكريم." },
      { name: "نور عبد الرحمن", expertise: "متخصصة في مهارات تنظيم جدول الحفظ." },
      { name: "يوسف إبراهيم", expertise: "مدرب في التركيز أثناء الحفظ." },
      { name: "سارة خالد", expertise: "معلمة قرآن متخصصة في التدريبات العملية." }
    ],
    testimonials: [
      { text: "أصبحت أحفظ القرآن بسرعة دون نسيان.", name: "سلمى" },
      { text: "تعلمت كيفية تقسيم الحفظ ومتابعته يوميًا.", name: "محمد" },
      { text: "الدورة ساعدتني على تثبيت الحفظ بسهولة.", name: "فاطمة" },
      { text: "زاد حبي للقرآن مع التقدم الملحوظ في الحفظ.", name: "علي" },
      { text: "التقنيات العملية جعلت الحفظ ممتعًا ومنظمًا.", name: "يارا" },
      { text: "شعرت بالثقة في مراجعة كل ما حفظته.", name: "حسين" }
    ],
    faq: [
      { question: "ما هي مدة الدورة؟", answer: "المدة حسب إنجاز المتدرب، بمعدل ساعة يوميًا، خمسة أيام في الأسبوع." },
      { question: "هل الدورة مناسبة لجميع المستويات؟", answer: "نعم، الدورة تناسب المبتدئين والراغبين في تسريع الحفظ." },
      { question: "هل يوجد متابعة عملية؟", answer: "نعم، هناك متابعة مستمرة وتدريبات عملية على الآيات لحفظ أكثر فعالية." }
    ],
    achievements: "حفظ القرآن الكريم بسرعة وثبات.<br>القدرة على مراجعة وتثبيت الحفظ بسهولة.<br>اكتساب مهارات تنظيم الوقت وتقسيم الحفظ.<br>زيادة التركيز والانتباه أثناء الحفظ.<br>شهادة معتمدة تثبت اجتياز الدورة وإتقان أسلوب الحفظ السريع."
  },
  {
    id: "sanad",
    title: "🌟 دورة السند المتصل بالقرآن الكريم – إجازة برواية حفص عن عاصم 🌟",
    description: "انضم إلى دورة متخصصة في قراءة القرآن الكريم على يد مشايخ متخصصين، لتتقن القراءة وتفوز بإجازة رسمية برواية حفص عن عاصم، لتصل إلى السند المتصل برسول الله ﷺ.",
    marquee: "📢 سجّل الآن في دورة السند المتصل بالقرآن الكريم قبل اكتمال العدد! فرصة للحصول على إجازة برواية حفص عن عاصم.",
    objectives: [
      "تجويد القرآن الكريم وتلاوته بالقواعد الصحيحة.",
      "تعلم أحكام التلاوة الأساسية والمتقدمة.",
      "تطبيق مخارج الحروف وصفاتها بدقة.",
      "التلاوة على يد مشايخ متخصصين ومتقنين للقراءات.",
      "الحصول على إجازة (سند متصل) برواية حفص عن عاصم."
    ],
    axes: [
      "مراجعة أساسيات علم التجويد.",
      "تطبيق عملي لأحكام المدود، الغنة، والإدغام.",
      "التدرب على قراءة القرآن كاملاً مع التصويب من الشيخ.",
      "تصحيح التلاوة وتصويب الأخطاء الشائعة.",
      "ختم القرآن كاملاً على يد الشيخ للحصول على الإجازة."
    ],
    instructors: [
      { name: "الشيخ عبد الرحمن", expertise: "مجاز في القراءات العشر" },
      { name: "الشيخة أم يوسف", expertise: "متخصصة في أحكام التجويد" }
    ],
    testimonials: [
      { text: "دورة رائعة، تعلمت فيها الكثير من أحكام التجويد وحصلت على السند بفضل الله.", name: "أحمد" },
      { text: "الشيخ كان صبورًا ومتقنًا جداً، التجربة كانت ممتازة.", name: "ليلى" },
      { text: "أصبحت تلاوتي للقرآن أفضل بكثير، وأنصح بها كل مهتم.", name: "فراس" }
    ],
    faq: [
      { question: "كم تستغرق الدورة؟", answer: "تعتمد المدة على مستوى المتدرب وجهده، لكنها عادة ما تكون من 6 إلى 12 شهرًا." },
      { question: "هل يجب أن أكون حافظاً للقرآن؟", answer: "لا يشترط ذلك، لكن يفضل أن يكون لديك خلفية جيدة في القراءة." },
      { question: "هل الإجازة معتمدة؟", answer: "نعم، الإجازة تكون بسند متصل عن رسول الله ﷺ." }
    ],
    achievements: "إتقان تلاوة القرآن الكريم.<br>القدرة على تعليم غيرك أحكام التجويد.<br>الحصول على إجازة برواية حفص عن عاصم.<br>الوصول إلى السند المتصل بالرسول ﷺ.<br>زيادة الثقة في القراءة والعمل على نشر كتاب الله."
  }
];

const scriptURL = 'https://script.google.com/macros/s/AKfycbztWgyn56xZxcgj3S9TVLnR47CfEFluzCX8q-VDL3THa-NCZCBsyEm9Hk2UyjyV39DMuw/exec';




/*
هذه قائمة بجميع معرفات (IDs) الدورات وأسمائها العربية.
يمكنك استخدام هذه القائمة عند إضافة دورات جديدة إلى الكود.
تأكد من أن المعرف الذي تضيفه في الكود يطابق أحد المعرفات هنا.

"hifz-quran": "حفظ القرآن الكريم",
"tasbit-quran": "تثبيت القرآن الكريم",
"tajweed": "التجويد والقراءات",
"ijazah": "إجازة القرآن",
"tafsir": "التفسير وعلوم القرآن",
"specific-groups": "دورات لفئات معينة",
"hadith-sciences": "علوم الحديث الشريف",
"advanced-tajweed": "علوم التجويد المتقدم",
"quick-memorization": "الحفظ السريع للقرآن الكريم",
"diploma-business": "دبلوم إدارة الأعمال",
"diploma-accounting": "دبلوم المحاسبة المالية",
"diploma-graphic": "دبلوم الجرافيك ديزاين",
"diploma-marketing": "دبلوم التسويق الرقمي",
"diploma-cybersecurity": "دبلوم الأمن السيبراني",
"diploma-development": "دبلوم تطوير الأعمال",
"diploma-english": "دبلوم اللغة الإنجليزية",
"diploma-ai": "دبلوم الذكاء الاصطناعي",
"data-analysis": "دبلوم تحليل البيانات",
"ai-marketing": "دبلوم التسويق عبر الذكاء الاصطناعي",
"diploma-entrepreneurship": "دبلوم ريادة الأعمال الرقمية",
"advanced-cybersecurity": "دبلوم الأمن السيبراني المتقدم",
"diploma-genius": "دبلوم صناعة العباقرة",
"human-development": "تنمية بشرية",
"personality-building": "بناء الشخصية",
"team-building": "بناء الفريق",
"become-trainer": "كيف تصبح مدربًا",
"thinking-skills": "مهارات التفكير الأساسية",
"thinking-integration": "دمج مهارات التفكير",
"talented": "اكتشاف ورعاية الموهوبين",
"communication": "مهارات الاتصال والتواصل",
"training-methods": "أساليب التدريب",
"management-art": "فن الإدارة",
"emotional-intelligence": "الذكاء العاطفي وإدارة المشاعر",
"modern-leadership": "القيادة والإدارة الحديثة",
"negotiation": "مهارات التفاوض والإقناع",
"time-management": "إدارة الوقت وزيادة الإنتاجية",
"creative-thinking": "التفكير الإبداعي وحل المشكلات",
"programming-basics": "أساسيات البرمجة",
"computer-courses": "دورات الحاسوب",
"icdl": "الرخصة الدولية لقيادة الحاسوب",
"advanced-python": "البرمجة المتقدمة",
"mobile-development": "تطوير تطبيقات الموبايل",
"game-development": "تطوير الألعاب",
"ui-ux": "تصميم واجهات (UX/UI)",
"ethical-hacking": "الاختراق الأخلاقي",
"drawing": "الرسم",
"photography": "التصوير",
"video-editing": "المونتاج",
"graphics": "الجرافيكس",
"candles": "صناعة الشموع",
"incense": "صناعة البخور",
"sewing": "الخياطة والتصميم",
"resin-making": "فن صناعة الريزن",
"digital-content": "صناعة المحتوى الرقمي",
"ai-design": "التصميم عبر الذكاء الاصطناعي",
"creative-writing": "فنون الكتابة الإبداعية الحديثة",
"advanced-video": "تصوير ومونتاج الفيديو المتقدم",
"marketing-strategy": "استراتيجية التسويق",
"digital-ads": "تصميم الإعلانات الرقمية",
"pharmacy": "الصيدلية الرقمية",
"customer-service": "خدمة العملاء وإدارة المبيعات",
"etiquette": "الإتيكيت (الأنثى السعيدة)",
"first-aid": "دورة الإسعافات الأولية",
"cooking": "دورة الطبخ",
"online-earning": "دورة الربح من الإنترنت",
"leadership": "التدريب القيادي وتطوير الذات",
"reading-approach": "نهج القراءة",
"active-learning": "التعلم النشط",
"planning": "التخطيط الفصلي واليومي",
"classroom-assessment": "التقويم الصفي",
"specifications": "جدول المواصفات",
"question-building": "أسلوب بناء الأسئلة الاختبارية",
"class-management": "إدارة الصف",
"problem-solving": "حل المشكلات الصفية",
"supervision": "أساليب الإشراف التربوي",
"math-teaching": "مهارات تدريس الرياضيات",
"math-strategies": "استراتيجيات تعلم الرياضيات",
"primary-teaching": "أساليب تدريس الصفوف الأولية",
"digital-learning": "أساليب التعليم الرقمي",
"curriculum-design": "تصميم المناهج",
"gamification": "التعليم التفاعلي",
"e-assessment": "التقييم والتقويم الإلكتروني",
"strengthening": "دورات تقوية",
"strategic-planning": "التخطيط الاستراتيجي",
"swot": "رباعية سوات في التخطيط",
"networking": "أساليب التشبيك",
"civil-society-roles": "أدوار منظمات المجتمع المدني",
"hendra": "الهندرة",
"feasibility-study": "دراسة جدوى المشاريع",
"commercial-correspondence": "المراسلات التجارية (ar-E)",
"social-campaigns": "إدارة الحملات الاجتماعية",
"community-leadership": "القيادة المجتمعية",
"strategic-planning-advanced": "التخطيط الاستراتيجي",
"anti-corruption": "الحوكمة ومكافحة الفساد",
"pmp": "المشاريع الاحترافية (PMP)",
"advanced-accounting": "المحاسبة الإدارية المتقدمة",
"entrepreneurship-innovation": "ريادة الأعمال والابتكار",
"trading": "التداول والاستثمار الرقمي",
"startup-feasibility": "دراسة جدوى المشاريع الناشئة"
*/



// This file contains all the functions and logic for the page

// Function to get the course ID from the URL
function getCourseIdFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('id');
}

// Function to find course data by ID
function findCourseById(id) {
  return courses.find(course => course.id === id);
}

// Function to populate the page with course data
function populatePage(course) {
  // Update the page title
  document.getElementById('page-title').textContent = course.title.replace(/<[^>]*>?/gm, '');

  // Update Hero section
  document.getElementById('hero-title').innerHTML = course.title;
  document.getElementById('hero-description').textContent = course.description;
  
  // Update Marquee
  document.getElementById('marquee-text').textContent = course.marquee;

  // Update Course About
  document.getElementById('course-about').textContent = course.description;

  // Update Objectives list
  const objectivesList = document.getElementById('objectives-list');
  objectivesList.innerHTML = ''; // Clear previous content
  course.objectives.forEach(obj => {
    const li = document.createElement('li');
    li.innerHTML = `<i class="fas fa-bullseye"></i> ${obj}`;
    objectivesList.appendChild(li);
  });

  // Update Axes list
  const axesList = document.getElementById('axes-list');
  axesList.innerHTML = ''; // Clear previous content
  course.axes.forEach(axis => {
    const li = document.createElement('li');
    li.innerHTML = `<i class="fas fa-calendar-alt"></i> ${axis}`;
    axesList.appendChild(li);
  });
  
  // Update Achievements text
  document.getElementById('achievements-text').innerHTML = course.achievements;

  // Update hidden form field
  const courseNameInput = document.getElementById('course-name-input');
  if (courseNameInput) {
    courseNameInput.value = course.title.replace(/<[^>]*>?/gm, '').trim();
  }

  // Populate Instructors Slider
  const instructorsSlider = document.getElementById('instructors-slider');
  const instructorDotsContainer = instructorsSlider.querySelector('.instructor-dots');
  instructorsSlider.querySelectorAll('.instructor-slide').forEach(slide => slide.remove());
  
  course.instructors.forEach((instructor, index) => {
      const slideDiv = document.createElement('div');
      slideDiv.classList.add('instructor-slide');
      if (index === 0) slideDiv.classList.add('active');
      slideDiv.innerHTML = `
          <div class="instructor-card">
              <img src="https://i.ibb.co/L519VjL/certificate.png" alt="صورة المدرب">
              <h4>${instructor.name}</h4>
              <p>${instructor.expertise}</p>
          </div>
      `;
      instructorsSlider.insertBefore(slideDiv, instructorDotsContainer);
  });

  // Populate Testimonials Slider
  const testimonialsSlider = document.getElementById('testimonials-slider');
  const testimonialDotsContainer = testimonialsSlider.querySelector('.testimonial-dots');
  testimonialsSlider.querySelectorAll('.testimonial-slide').forEach(slide => slide.remove());

  course.testimonials.forEach((testimonial, index) => {
    const slideDiv = document.createElement('div');
    slideDiv.classList.add('testimonial-slide');
    if (index === 0) slideDiv.classList.add('active');
    slideDiv.innerHTML = `
      <p class="testimonial-text">"${testimonial.text}"</p>
      <p>– ${testimonial.name}</p>
    `;
    testimonialsSlider.insertBefore(slideDiv, testimonialDotsContainer);
  });
  
  // Populate FAQ section
  const faqContainer = document.getElementById('faq-container');
  faqContainer.innerHTML = ''; // Clear previous content
  course.faq.forEach(item => {
    const faqItem = document.createElement('div');
    faqItem.classList.add('faq-item');
    faqItem.innerHTML = `
      <div class="faq-question">${item.question} <i class="fas fa-chevron-down"></i></div>
      <div class="faq-answer">${item.answer}</div>
    `;
    faqContainer.appendChild(faqItem);
  });
  
  // Re-initialize dynamic scripts
  AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  initSliders();
  initFaqToggle();
}

// Sliders and FAQ functions (from previous code, updated for dynamic content)
function initSliders() {
    const testimonialSlides = document.querySelectorAll('#testimonials-slider .testimonial-slide');
    const testimonialDotsContainer = document.querySelector('#testimonials-slider .testimonial-dots');
    let currentTestimonial = 0;
    
    // Clear previous interval if it exists
    if (window.testimonialInterval) clearInterval(window.testimonialInterval);

    function nextTestimonial() {
      testimonialSlides[currentTestimonial].classList.remove('active');
      currentTestimonial = (currentTestimonial + 1) % testimonialSlides.length;
      testimonialSlides[currentTestimonial].classList.add('active');
      updateTestimonialDots();
    }
    
    function updateTestimonialDots() {
      testimonialDotsContainer.innerHTML = '';
      testimonialSlides.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (i === currentTestimonial) dot.classList.add('active');
        dot.addEventListener('click', () => {
          clearInterval(window.testimonialInterval);
          testimonialSlides[currentTestimonial].classList.remove('active');
          currentTestimonial = i;
          testimonialSlides[currentTestimonial].classList.add('active');
          updateTestimonialDots();
          window.testimonialInterval = setInterval(nextTestimonial, 4000);
        });
        testimonialDotsContainer.appendChild(dot);
      });
    }
    if (testimonialSlides.length > 0) {
        updateTestimonialDots();
        window.testimonialInterval = setInterval(nextTestimonial, 4000);
    }
  
    const instructorSlides = document.querySelectorAll('#instructors-slider .instructor-slide');
    const instructorDotsContainer = document.querySelector('#instructors-slider .instructor-dots');
    let currentInstructor = 0;
    if (window.instructorInterval) clearInterval(window.instructorInterval);
    
    function nextInstructor() {
        instructorSlides[currentInstructor].classList.remove('active');
        currentInstructor = (currentInstructor + 1) % instructorSlides.length;
        instructorSlides[currentInstructor].classList.add('active');
        updateInstructorDots();
    }
    
    function updateInstructorDots() {
      instructorDotsContainer.innerHTML = '';
      instructorSlides.forEach((_, i) => {
          const dot = document.createElement('span');
          dot.classList.add('dot');
          if (i === currentInstructor) dot.classList.add('active');
          dot.addEventListener('click', () => {
              clearInterval(window.instructorInterval);
              instructorSlides[currentInstructor].classList.remove('active');
              currentInstructor = i;
              instructorSlides[currentInstructor].classList.add('active');
              updateInstructorDots();
              window.instructorInterval = setInterval(nextInstructor, 5000);
          });
          instructorDotsContainer.appendChild(dot);
      });
    }
    if (instructorSlides.length > 0) {
        updateInstructorDots();
        window.instructorInterval = setInterval(nextInstructor, 5000);
    }
}

function initFaqToggle() {
    document.querySelectorAll('.faq-question').forEach(q => q.addEventListener('click', ()=>{
        const parentItem = q.closest('.faq-item');
        const answer = parentItem.querySelector('.faq-answer');
        const isVisible = answer.style.display === 'block';
    
        document.querySelectorAll('.faq-answer').forEach(ans => {
            ans.style.display = 'none';
            ans.closest('.faq-item').querySelector('.faq-question').classList.remove('active');
        });
    
        if (!isVisible) {
          answer.style.display = 'block';
          q.classList.add('active');
        }
      }));
}

// Main function to run on page load
document.addEventListener('DOMContentLoaded', () => {
  const courseId = getCourseIdFromUrl();
  const courseData = findCourseById(courseId);

  if (courseData) {
    populatePage(courseData);
  } else {
    // Handle case where course is not found
    document.body.innerHTML = '<h1>عفواً، لم يتم العثور على الدورة المطلوبة.</h1><p>يرجى التأكد من الرابط والمحاولة مرة أخرى.</p>';
  }

  // Form submission and sticky button logic
  const stickyRegisterBtn = document.querySelector('.sticky-register-btn');
  const stickyWhatsappBtn = document.querySelector('.sticky-whatsapp-btn');
  const footer = document.querySelector('footer');

  window.addEventListener('scroll', ()=>{ 
    const isAtBottom = window.innerHeight + window.scrollY >= footer.offsetTop - 50;
    if (window.scrollY > 300 && !isAtBottom) {
        stickyRegisterBtn.classList.remove('hidden');
        stickyWhatsappBtn.classList.remove('hidden');
        stickyRegisterBtn.style.display = 'block';
    } else {
        stickyRegisterBtn.classList.add('hidden');
        stickyWhatsappBtn.classList.add('hidden');
    }
  });

  const scriptURL = 'https://script.google.com/macros/s/AKfycbw5SQuYxkVhgkcXMFWcq1oVRXTpJlCTDQVvM6rkGGEbm7yg42Vh4VXVZRSirUg3k85oNQ/exec';
  const form = document.forms['form'];
  const submitButton = form.querySelector('button[type="submit"]');
  let formDataStored = {};

  window.submitForm = function(e) {
    e.preventDefault();
    
    const formData = new FormData(form);
    const phoneInput = form.querySelector('input[name="phone"]');
    formData.set('phone', phoneInput.value.replace(/\s/g, ''));
    
    for (let [key, value] of formData.entries()) {
        formDataStored[key] = value;
    }
    
    submitButton.disabled = true;
    submitButton.textContent = 'جاري الإرسال...';
    
    fetch(scriptURL, { method: 'POST', body: formData})
      .then(response => {
        const message = generateWhatsAppMessage(formDataStored);
        const encodedMessage = encodeURIComponent(message);
        const whatsappLink = `https://wa.me/967778185189?text=${encodedMessage}`;
        window.location.href = whatsappLink;
      })
      .catch(error => {
        alert('حدث خطأ أثناء الإرسال. حاول مرة أخرى.');
      })
      .finally(() => {
        submitButton.disabled = false;
        submitButton.textContent = 'إرسال البيانات';
      });
  }

  function generateWhatsAppMessage(data) {
    const courseTitle = document.getElementById('page-title').textContent;
    return `السلام عليكم، تم التسجيل في دورة "${courseTitle}".
الاسم: ${data.name}
الجنس: ${data.gender}
العمر: ${data.age}
البلد: ${data.country}
رقم الهاتف: ${data.phone}
رابط التيليجرام: ${data.Telegram}
أرجو إتمام التسجيل في الدورة.`;
  }
});

