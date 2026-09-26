/**
 * Hamat Educational - Course Data Store
 * Course: The Art of Scientific research .. Empowering Healthcare Workers to Enhance Community Well-being 
 * 1st part Scientific Research Through Time: Lessons from the Past, Visions for the Future
 */

const COURSE_DATA = {
  id: 10,
  cmeHours: 15,
  title: {
    en: "The Art of Scientific research .. Empowering Healthcare Workers to Enhance Community Well-being 1st part Scientific Research Through Time: Lessons from the Past, Visions for the Future",
    ar: "فن البحث العلمي .. تمكين ممارسي الرعاية الصحية لتعزيز رفاهية المجتمع - الجزء الأول: البحث العلمي عبر الزمن: دروس من الماضي، ورؤى للمستقبل"
  },
  institution: {
    en: "Hamat Training & Development",
    ar: "هامات للتدريب والتطوير"
  },
  description: {
    en: "An accredited professional medical research curriculum designed to empower physicians, nurses, pharmacists, and allied healthcare professionals with essential clinical research methodologies, ethical authorship, and impactful scientific writing.",
    ar: "برنامج تدريبي معتمد مصمم لتمكين الأطباء والممارسين الصحيين من إتقان منهجيات البحث السريري، وأخلاقيات التأليف والاعتماد، والنشر العلمي المؤثر."
  },
  
  // 13 Sections matching alfsale.com/course/view.php?id=10
  sections: [
    {
      id: "section-0",
      number: 0,
      title: {
        en: "General",
        ar: "عام"
      },
      summary: {
        en: "Course notices, announcements, and administrative guidelines.",
        ar: "إعلانات الدورة والتوجيهات الإدارية والإرشادية."
      },
      activities: [
        {
          id: "act-167",
          type: "forum",
          title: {
            en: "Announcements",
            ar: "لوحة الإعلانات والتنبيهات"
          },
          icon: "assets/images/icon_forum.svg",
          completion: {
            required: false,
            rule: "View"
          },
          data: {
            announcements: [
              {
                id: 1,
                title: "Welcome to The Art of Scientific Research Course",
                author: "Course Director & Medical Education Committee",
                date: "2024-05-15",
                body: "Welcome to this specialized healthcare research program accredited for 15 CME hours. Participants are encouraged to complete each module sequentially, watch all 14 instructional videos, and complete the module quizzes prior to the final post-test."
              },
              {
                id: 2,
                title: "CME Accreditation & Verification Guidelines",
                author: "Academic Accreditation Unit",
                date: "2024-05-18",
                body: "To receive your CME Certificate of Completion, you must achieve at least 70% on the final comprehensive Post-Test and submit the Activity Evaluation feedback survey. The certificate is issued automatically upon passing."
              },
              {
                id: 3,
                title: "Technical Support & Inquiries",
                author: "Hamat Learning Support Team",
                date: "2024-05-20",
                body: "Our technical support team is available 24/7 to assist you. If you face any issues accessing videos or taking quizzes, please contact support via the top menu."
              }
            ]
          }
        }
      ]
    },
    {
      id: "section-1",
      number: 1,
      title: {
        en: "Introdcution : Research Gap and Cycle",
        ar: "مقدمة: فجوة البحث ودورة البحث العلمي"
      },
      summary: {
        en: "Introduction to clinical inquiry, identifying unanswered questions in medical literature, and understanding the scientific cycle.",
        ar: "مقدمة للبحث السريري وتحديد الفجوات المعرفية في الأدبيات الطبية وفهم دورة البحث المتواصلة."
      },
      activities: [
        {
          id: "act-168",
          type: "url",
          title: {
            en: "Introdcution : Research Gap and Cycle",
            ar: "محاضرة: فجوة البحث ودورة البحث العلمي"
          },
          icon: "assets/images/icon_url.svg",
          youtubeId: "C8-ZQx0wmUk",
          duration: "12:45",
          completion: {
            required: true,
            rule: "View"
          },
          summary: "Explores the fundamental nature of clinical scientific research, identifying knowledge gaps in healthcare, formulating hypotheses, and walking through the iterative cycle of evidence generation.",
          notes: [
            "A research gap exists where current medical evidence is insufficient, contradictory, or missing for specific patient cohorts.",
            "The research cycle begins with clinical observation, moves through rigorous literature review, hypothesis development, data collection, and dissemination.",
            "Conclusions of one study should open doors for subsequent investigations, perpetuating the healthcare advancement cycle."
          ]
        },
        {
          id: "act-169",
          type: "quiz",
          title: {
            en: "Quiz",
            ar: "اختبار فجوة ودورة البحث العلمي"
          },
          icon: "assets/images/icon_quiz.svg",
          completion: {
            required: true,
            rule: "Pass (>= 60%)"
          },
          questions: [
            {
              question: "What is the primary definition of a 'Research Gap' in clinical scientific inquiry?",
              options: [
                "A software error during data analysis in statistical packages",
                "An unanswered question, missing evidence, or unexplored problem in current clinical literature",
                "A delay in receiving hospital ethics committee approval",
                "A budget shortage during clinical trial procurement"
              ],
              correct: 1,
              explanation: "A research gap represents an unexplored or inadequately addressed question in existing literature that warrants systematic investigation to improve clinical practice."
            },
            {
              question: "In the clinical scientific research cycle, what step directly follows identifying a clinical problem?",
              options: [
                "Publishing conclusions immediately in a medical journal",
                "Comprehensive literature review and hypothesis formulation",
                "Discarding institutional clinical guidelines",
                "Recruiting patients without protocol definition"
              ],
              correct: 1,
              explanation: "Once a clinical problem is identified, a thorough literature review is crucial to understand current evidence and formulate a testable hypothesis."
            },
            {
              question: "Why is the research process described as an iterative 'cycle' rather than a linear line?",
              options: [
                "Because findings of an investigation inevitably reveal new questions and guide subsequent inquiry",
                "Because researchers must always repeat the exact same protocol each year",
                "Because funding agencies require perpetual grant reapplications",
                "Because medical guidelines cannot be modified once set"
              ],
              correct: 0,
              explanation: "The scientific method is continuous; evidence and conclusions from one study provide the foundation for new clinical questions and advancements."
            }
          ]
        }
      ]
    },
    {
      id: "section-2",
      number: 2,
      title: {
        en: "The Art Of Asking Clinical Research Question",
        ar: "فن صياغة السؤال البحثي الإكلينيكي"
      },
      summary: {
        en: "Mastering the PICO framework and FINER criteria to construct focused, clinically relevant, and feasible research questions.",
        ar: "إتقان إطار PICO ومعايير FINER لصياغة أسئلة بحثية سريرية محددة وقابلة للتطبيق."
      },
      activities: [
        {
          id: "act-170",
          type: "url",
          title: {
            en: "The Art Of Asking Clinical Research Question",
            ar: "محاضرة: فن صياغة السؤال البحثي الإكلينيكي"
          },
          icon: "assets/images/icon_url.svg",
          youtubeId: "fGnLc_M8c9s",
          duration: "14:20",
          completion: {
            required: true,
            rule: "View"
          },
          summary: "Focuses on transforming everyday clinical curiosity into rigorous, focused research questions using frameworks such as PICO (Population, Intervention, Comparison, Outcome) and FINER criteria.",
          notes: [
            "PICO Framework: Population / Patient problem, Intervention, Comparison / Control, Outcome.",
            "FINER Criteria: Feasible, Interesting, Novel, Ethical, and Relevant.",
            "A well-structured research question dictates the choice of study design, statistical power, and recruitment strategy."
          ]
        },
        {
          id: "act-171",
          type: "quiz",
          title: {
            en: "Quiz",
            ar: "اختبار صياغة السؤال البحثي"
          },
          icon: "assets/images/icon_quiz.svg",
          completion: {
            required: true,
            rule: "Pass (>= 60%)"
          },
          questions: [
            {
              question: "What does the PICO framework stand for in clinical research design?",
              options: [
                "Patient/Population, Intervention, Comparison, Outcome",
                "Protocol, Investigation, Clinical trial, Observation",
                "Pharmacy, Infection, Control, Operational costs",
                "Peer-review, Impact factor, Citation, Overview"
              ],
              correct: 0,
              explanation: "PICO is the gold-standard framework: Patient/Population, Intervention, Comparison/Control, and Outcome."
            },
            {
              question: "According to the FINER criteria, what does the letter 'F' signify?",
              options: [
                "Funded by commercial pharmaceutical grants",
                "Feasible (in terms of patient sample, time, technical expertise, and resources)",
                "Fast-track publication capability in high-impact journals",
                "Formatted in AMA referencing style"
              ],
              correct: 1,
              explanation: "Feasibility assesses whether the investigator has the sample size, expertise, equipment, and time required to complete the study."
            },
            {
              question: "Which of the following represents a well-formulated clinical research question?",
              options: [
                "Is diabetes a dangerous disease worldwide?",
                "In adult diabetic patients, does SGLT2 inhibitor therapy reduce cardiovascular mortality compared to metformin monotherapy?",
                "Why do patients develop complications in hospitals?",
                "Can medical science eradicate metabolic syndrome tomorrow?"
              ],
              correct: 1,
              explanation: "The second option explicitly identifies Population (adult diabetics), Intervention (SGLT2 inhibitors), Comparison (metformin monotherapy), and Outcome (cardiovascular mortality)."
            }
          ]
        }
      ]
    },
    {
      id: "section-3",
      number: 3,
      title: {
        en: "The Importance Of Knowing Your Readers",
        ar: "أهمية معرفة الجمهور والقراء المستهدفين"
      },
      summary: {
        en: "Aligning scientific discourse, tone, and practical implications with your target readership.",
        ar: "مواءمة الخطاب العلمي والأسلوب والدلالات العملية مع القراء والجمهور المستهدف."
      },
      activities: [
        {
          id: "act-172",
          type: "url",
          title: {
            en: "The Importance Of Knowing Your Readers",
            ar: "محاضرة: أهمية معرفة الجمهور والقراء"
          },
          icon: "assets/images/icon_url.svg",
          youtubeId: "RSDVmYhRKZc",
          duration: "11:15",
          completion: {
            required: true,
            rule: "View"
          },
          summary: "Discusses tailoring scientific discourse to target audiences: general clinicians, subspecialists, policymakers, patients, and journal editorial boards.",
          notes: [
            "Identify the reader's primary concern: clinical utility for doctors, policy implications for health managers, or mechanistic depth for basic scientists.",
            "Write the abstract and conclusion to clearly address 'So what does this mean for clinical practice?'.",
            "Tailor technical jargon to match the journal's multidisciplinary or subspecialty readership."
          ]
        },
        {
          id: "act-173",
          type: "quiz",
          title: {
            en: "Quiz",
            ar: "اختبار معرفة القراء"
          },
          icon: "assets/images/icon_quiz.svg",
          completion: {
            required: true,
            rule: "Pass (>= 60%)"
          },
          questions: [
            {
              question: "Why is analyzing target journal readership vital before drafting a scientific manuscript?",
              options: [
                "To copy the sentence structures of other authors without citation",
                "To ensure the depth of clinical terminology and practical takeaways match the audience's professional needs",
                "To inflate the journal's commercial subscription revenue",
                "To bypass peer review requirements"
              ],
              correct: 1,
              explanation: "Tailoring the manuscript ensures that research findings are presented effectively to clinicians and researchers positioned to utilize them."
            },
            {
              question: "How should a clinical paper aimed at primary care practitioners differ from one aimed at subspecialist surgical researchers?",
              options: [
                "Primary care papers emphasize actionable diagnostic and referral pathways; subspecialist papers dive deeply into micro-techniques and sub-analyses",
                "Both papers should be written identically without adjustments",
                "Primary care papers do not require statistical validation",
                "Subspecialist journals do not require background literature"
              ],
              correct: 0,
              explanation: "Primary care physicians prioritize actionable decision-making, while subspecialists require granular procedural and pathophysiological specifics."
            }
          ]
        }
      ]
    },
    {
      id: "section-4",
      number: 4,
      title: {
        en: "Willing To Learn The First Step In Clinical Research",
        ar: "الرغبة في التعلم: الخطوة الأولى في البحث الإكلينيكي"
      },
      summary: {
        en: "Developing the growth mindset, research resilience, and mentorship relationships essential for clinical investigators.",
        ar: "بناء عقلية النمو والفضول العلمي وبناء شبكات الإرشاد والتوجيه في البيئة السريرية."
      },
      activities: [
        {
          id: "act-174",
          type: "url",
          title: {
            en: "Willing To Learn The First Step In Clinical Research",
            ar: "محاضرة: الرغبة في التعلم الخطوة الأولى في البحث"
          },
          icon: "assets/images/icon_url.svg",
          youtubeId: "jEhbIrZlgTE",
          duration: "13:30",
          completion: {
            required: true,
            rule: "View"
          },
          summary: "Cultivating intellectual curiosity, research resilience, mentorship networks, and evidence-based medicine habits in busy clinical environments.",
          notes: [
            "Research is a learned skill that improves with iterative practice, critical reading, and mentor feedback.",
            "Overcoming rejection in peer review is a universal milestone for every successful scientific investigator.",
            "Collaborating with multidisciplinary teams (statisticians, epidemiologists, senior clinicians) enhances project quality."
          ]
        },
        {
          id: "act-175",
          type: "quiz",
          title: {
            en: "Quiz",
            ar: "اختبار الرغبة في التعلم"
          },
          icon: "assets/images/icon_quiz.svg",
          completion: {
            required: true,
            rule: "Pass (>= 60%)"
          },
          questions: [
            {
              question: "Which mindset is most essential for a healthcare worker embarking on clinical research?",
              options: [
                "A fixed belief that only senior professors can publish",
                "Intellectual curiosity, openness to constructive critique, and proactive mentorship engagement",
                "Rushing to draft conclusions before collecting verified clinical data",
                "Prioritizing high publication counts over research integrity"
              ],
              correct: 1,
              explanation: "Curiosity, resilience, and receptiveness to peer critique form the foundation of a successful clinical investigator."
            },
            {
              question: "What is the primary role of an academic research mentor?",
              options: [
                "Writing all sections of the paper on behalf of the trainee",
                "Providing methodological guidance, ethical oversight, and navigational support through peer-review challenges",
                "Guaranteeing immediate manuscript acceptance without revision",
                "Restricting the trainee from reading international publications"
              ],
              correct: 1,
              explanation: "Mentors steer the trainee through research design, ethical challenges, data analysis, and the peer review process."
            }
          ]
        }
      ]
    },
    {
      id: "section-5",
      number: 5,
      title: {
        en: "Understanding of title section",
        ar: "فهم وصياغة عنوان البحث العلمي"
      },
      summary: {
        en: "Anatomy of high-impact research titles, indexing terminology, and Medical Subject Headings (MeSH).",
        ar: "تشريح العناوين البحثية الفعالة ومصطلحات الفهرسة الطبية والكلمات المفتاحية MeSH."
      },
      activities: [
        {
          id: "act-176",
          type: "url",
          title: {
            en: "Understanding of title section part 1",
            ar: "محاضرة: فهم وصياغة عنوان البحث (الجزء الأول)"
          },
          icon: "assets/images/icon_url.svg",
          youtubeId: "yTx7HRJwLhk",
          duration: "10:50",
          completion: {
            required: true,
            rule: "View"
          },
          summary: "Deconstructs the anatomy of effective scientific titles: informative vs descriptive vs interrogative titles, clarity, and SEO/indexing optimization.",
          notes: [
            "Titles are the single most frequently read part of any scientific paper.",
            "Informative titles summarize the principal finding, while descriptive titles outline the topic and study design.",
            "Avoid non-standard acronyms and unnecessary filler words ('A Study of...', 'Investigation Into...')."
          ]
        },
        {
          id: "act-178",
          type: "url",
          title: {
            en: "Understanding of title section part 2",
            ar: "محاضرة: فهم وصياغة عنوان البحث (الجزء الثاني)"
          },
          icon: "assets/images/icon_url.svg",
          youtubeId: "1-9GqdOZUoM",
          duration: "12:10",
          completion: {
            required: true,
            rule: "View"
          },
          summary: "Practical exercises in refining weak titles, removing jargon and filler words, and incorporating MeSH keywords for maximum visibility.",
          notes: [
            "Include study design in title when recommended by reporting guidelines (e.g. 'A Randomized Controlled Trial', 'A Cohort Study').",
            "Optimize title keywords for PubMed, Scopus, and Google Scholar indexing algorithms."
          ]
        },
        {
          id: "act-177",
          type: "quiz",
          title: {
            en: "quiz",
            ar: "اختبار صياغة عنوان البحث"
          },
          icon: "assets/images/icon_quiz.svg",
          completion: {
            required: true,
            rule: "Pass (>= 60%)"
          },
          questions: [
            {
              question: "Which characteristic is fundamental to a high-impact clinical research title?",
              options: [
                "Being deliberately vague to trigger curiosity",
                "Concise, accurate representation of the population, intervention/exposure, and design",
                "Including non-standard acronyms and local slang",
                "Exceeding 50 words to explain every sub-analysis"
              ],
              correct: 1,
              explanation: "Effective titles convey the core population, variables, and study design without fluff or ambiguity."
            },
            {
              question: "Why is integrating Medical Subject Headings (MeSH) keywords into the title and abstract critical?",
              options: [
                "To enhance discovery, indexing, and citations in databases like PubMed and MEDLINE",
                "To comply with local hospital copyright regulations",
                "To lower the word count of the discussion section",
                "To avoid the need for institutional ethics approval"
              ],
              correct: 0,
              explanation: "Standardized MeSH indexing ensures researchers and clinicians searching academic databases can find and cite the paper."
            }
          ]
        }
      ]
    },
    {
      id: "section-6",
      number: 6,
      title: {
        en: "Bibliometrics and Altmetrics: Measuring the Impact of Knowledge",
        ar: "المقاييس الببليومترية والمقاييس البديلة: قياس أثر المعرفة"
      },
      summary: {
        en: "Evaluating academic impact: Impact Factor, h-index, CiteScore, and modern Altmetric attention scores.",
        ar: "تقييم الأثر الأكاديمي: معامل التأثير، ومؤشر هيرش h-index، ونقاط Altmetric البديلة."
      },
      activities: [
        {
          id: "act-179",
          type: "url",
          title: {
            en: "Bibliometrics and Altmetrics: Measuring the Impact of Knowledge",
            ar: "محاضرة: المقاييس الببليومترية والبديلة لقياس الأثر"
          },
          icon: "assets/images/icon_url.svg",
          youtubeId: "_wzE8SLiRyo",
          duration: "15:40",
          completion: {
            required: true,
            rule: "View"
          },
          summary: "Comprehensive overview of impact evaluation metrics: h-index, i10-index, Journal Impact Factor (JIF), alongside Altmetric attention scores (social media mentions, policy citations, news outlets).",
          notes: [
            "Journal Impact Factor (JIF) reflects the average citations of articles in that journal over a 2-year window.",
            "The h-index evaluates an individual researcher's output and citation impact simultaneously.",
            "Altmetrics measures real-time societal dissemination, policy citations, and public engagement."
          ]
        },
        {
          id: "act-180",
          type: "quiz",
          title: {
            en: "Quiz",
            ar: "اختبار المقاييس الببليومترية والبديلة"
          },
          icon: "assets/images/icon_quiz.svg",
          completion: {
            required: true,
            rule: "Pass (>= 60%)"
          },
          questions: [
            {
              question: "What does an investigator's 'h-index' of 12 indicate?",
              options: [
                "The author has published exactly 12 papers in total",
                "The author has published at least 12 papers, each of which has received at least 12 citations",
                "The author has 12 papers currently under peer review",
                "The author has 12 registered co-investigators"
              ],
              correct: 1,
              explanation: "An h-index of h means an author has h publications with at least h citations each, balancing quantity and impact."
            },
            {
              question: "How does 'Altmetrics' fundamentally differ from traditional citation bibliometrics?",
              options: [
                "Altmetrics captures immediate broader societal impact (news, policy briefs, public health mentions), whereas bibliometrics tracks scholarly citations over years",
                "Altmetrics applies only to retracted papers",
                "Altmetrics is calculated exclusively by commercial book publishers",
                "Bibliometrics evaluates social media engagement"
              ],
              correct: 0,
              explanation: "Altmetrics captures rapid dissemination across mainstream news, policy documents, Wikipedia, and social channels."
            }
          ]
        }
      ]
    },
    {
      id: "section-7",
      number: 7,
      title: {
        en: "How To Develop a Good Research Question",
        ar: "كيفية تطوير وتحديد سؤال بحثي متميز"
      },
      summary: {
        en: "Translating clinical problems into answerable, focused research objectives with measurable endpoints.",
        ar: "تحويل المشكلات السريرية إلى أهداف بحثية محددة ونقاط نهاية قابلة للقياس."
      },
      activities: [
        {
          id: "act-181",
          type: "url",
          title: {
            en: "How To Develop a Good Research Question",
            ar: "محاضرة: كيف تطور سؤالاً بحثياً متميزاً"
          },
          icon: "assets/images/icon_url.svg",
          youtubeId: "p1nzOgzxIS4",
          duration: "14:05",
          completion: {
            required: true,
            rule: "View"
          },
          summary: "Step-by-step methodology for moving from broad clinical observations to specific, measurable, ethically sound research hypotheses.",
          notes: [
            "Start from real clinical challenges or conflicting outcomes seen in everyday practice.",
            "Ensure the outcome is clinically meaningful (e.g. mortality, complication rates, quality of life) rather than solely surrogate markers.",
            "Assess sample size feasibility early to avoid underpowered studies."
          ]
        },
        {
          id: "act-182",
          type: "quiz",
          title: {
            en: "Quiz",
            ar: "اختبار تطوير السؤال البحثي"
          },
          icon: "assets/images/icon_quiz.svg",
          completion: {
            required: true,
            rule: "Pass (>= 60%)"
          },
          questions: [
            {
              question: "When developing a clinical research hypothesis, which step ensures the outcome is methodologically sound?",
              options: [
                "Selecting clear primary and secondary endpoints with predefined measurement criteria",
                "Keeping the outcome undefined until data is gathered",
                "Relying solely on anecdotal impressions from colleagues",
                "Omitting control groups to save time"
              ],
              correct: 0,
              explanation: "A rigorous research question requires clearly defined, objective, and reproducible primary and secondary endpoints."
            }
          ]
        }
      ]
    },
    {
      id: "section-8",
      number: 8,
      title: {
        en: "Deciding On Area of Research Approval",
        ar: "تحديد واعتماد مجالات البحث والموافقات الأخلاقية"
      },
      summary: {
        en: "Ethical compliance, Institutional Review Boards (IRB), Good Clinical Practice (GCP), and patient data security.",
        ar: "الموافقات الأخلاقية ولجان الأخلاقيات IRB والممارسات السريرية الجيدة GCP وأمن البيانات."
      },
      activities: [
        {
          id: "act-183",
          type: "url",
          title: {
            en: "Deciding On Area of Research Approval",
            ar: "محاضرة: الموافقات الأخلاقية ولجان الأخلاقيات"
          },
          icon: "assets/images/icon_url.svg",
          youtubeId: "Is1J61QVjZQ",
          duration: "13:50",
          completion: {
            required: true,
            rule: "View"
          },
          summary: "Navigating Institutional Review Boards (IRB), regulatory compliance (Saudi FDA, GCP guidelines), data protection laws, and conflict of interest disclosures.",
          notes: [
            "Never initiate patient data collection prior to receiving formal written IRB approval.",
            "Informed consent must detail voluntary participation, risks, benefits, and data confidentiality protections.",
            "Retrospective chart reviews still require IRB waiver or expedited review according to local regulations."
          ]
        },
        {
          id: "act-184",
          type: "quiz",
          title: {
            en: "quiz",
            ar: "اختبار الموافقات الأخلاقية ولجان IRB"
          },
          icon: "assets/images/icon_quiz.svg",
          completion: {
            required: true,
            rule: "Pass (>= 60%)"
          },
          questions: [
            {
              question: "What is the primary mandate of an Institutional Review Board (IRB) / Ethics Committee?",
              options: [
                "To evaluate grammar and typesetting in submitted manuscripts",
                "To protect the rights, safety, dignity, and confidentiality of human research subjects",
                "To negotiate commercial licensing royalties with pharmaceutical vendors",
                "To set the author sequence on publication"
              ],
              correct: 1,
              explanation: "The core mission of an IRB is safeguarding patient welfare, ethical proportionality, and informed consent compliance."
            }
          ]
        }
      ]
    },
    {
      id: "section-9",
      number: 9,
      title: {
        en: "Who should be an author?",
        ar: "من يستحق صفة المؤلف؟ معايير التأليف العلمي"
      },
      summary: {
        en: "ICMJE guidelines, avoiding honorary/gift authorship, and acknowledging contributors ethically.",
        ar: "معايير التأليف الدولية ICMJE وتجنب التأليف الشرفي والتوثيق الأخلاقي للمساهمين."
      },
      activities: [
        {
          id: "act-185",
          type: "url",
          title: {
            en: "Who should be an author?",
            ar: "محاضرة: من يستحق صفة المؤلف العلمي؟"
          },
          icon: "assets/images/icon_url.svg",
          youtubeId: "aNkGVREJLJQ",
          duration: "16:20",
          completion: {
            required: true,
            rule: "View"
          },
          summary: "Deep dive into International Committee of Medical Journal Editors (ICMJE) criteria for authorship, addressing gift authorship, ghost authorship, and contributor acknowledgments.",
          notes: [
            "ICMJE 4 Mandatory Criteria: (1) Substantial contribution to conception/design or acquisition/analysis of data; (2) Drafting or critically revising the manuscript; (3) Final approval of the version to be published; (4) Agreement to be accountable for all aspects of the work.",
            "Honorary or 'Gift Authorship' (listing senior staff who did not contribute) is a serious breach of academic integrity.",
            "Individuals providing technical help, lab space, or general supervision belong in the Acknowledgments section."
          ]
        },
        {
          id: "act-186",
          type: "quiz",
          title: {
            en: "Quiz",
            ar: "اختبار معايير التأليف العلمي"
          },
          icon: "assets/images/icon_quiz.svg",
          completion: {
            required: true,
            rule: "Pass (>= 60%)"
          },
          questions: [
            {
              question: "According to the ICMJE criteria, which of the following is REQUIRED to qualify as an author?",
              options: [
                "Simply holding the title of hospital department chairman",
                "Satisfying all 4 ICMJE criteria: intellectual contribution, drafting/revising, final approval, and accountability",
                "Providing financial sponsorship without reviewing data",
                "Formatting the bibliography into EndNote style"
              ],
              correct: 1,
              explanation: "All 4 ICMJE criteria must be satisfied together. Mere administrative or financial presence does not qualify for authorship."
            },
            {
              question: "What is 'Gift Authorship' and why does it violate scientific ethics?",
              options: [
                "Giving authorship to someone who made no intellectual contribution, typically due to seniority or prestige",
                "Donating clinical trial research funds to a charitable trust",
                "Allowing open-access distribution of datasets",
                "Acknowledging statistical consultants in the manuscript"
              ],
              correct: 0,
              explanation: "Gift authorship misrepresents academic accountability and violates core research integrity guidelines."
            }
          ]
        }
      ]
    },
    {
      id: "section-10",
      number: 10,
      title: {
        en: "Key concepts in authorship",
        ar: "مفاهيم جوهرية في أخلاقيات ومسؤوليات التأليف"
      },
      summary: {
        en: "First author, senior author, corresponding author duties, and CRediT contributor taxonomy.",
        ar: "المؤلف الأول والمؤلف المراسل ومسؤوليات التواصل وتصنيف المساهمات CRediT."
      },
      activities: [
        {
          id: "act-187",
          type: "url",
          title: {
            en: "Key concepts in authorship",
            ar: "محاضرة: مفاهيم جوهرية في أخلاقيات التأليف"
          },
          icon: "assets/images/icon_url.svg",
          youtubeId: "vqP4Smq7oEw",
          duration: "12:40",
          completion: {
            required: true,
            rule: "View"
          },
          summary: "Corresponding author duties, first author versus senior author roles, author contribution statements (CRediT taxonomy), and resolving authorship disputes.",
          notes: [
            "First author typically leads data analysis and draft writing.",
            "Senior/last author usually provides principal clinical oversight and conceptual mentorship.",
            "Corresponding author handles submission, reviewer revisions, and post-publication queries."
          ]
        },
        {
          id: "act-188",
          type: "quiz",
          title: {
            en: "Quiz",
            ar: "اختبار مفاهيم التأليف الجوهرية"
          },
          icon: "assets/images/icon_quiz.svg",
          completion: {
            required: true,
            rule: "Pass (>= 60%)"
          },
          questions: [
            {
              question: "What is the primary role of the 'Corresponding Author' during and following manuscript publication?",
              options: [
                "Managing communication with journal editors, coordinating revisions, and addressing scientific inquiries from readers",
                "Covering all conference registration fees for the team",
                "Making all diagnostic decisions for trial participants",
                "Withholding reviewer feedback from co-authors"
              ],
              correct: 0,
              explanation: "The corresponding author represents the research group in all official interactions with the journal and scientific community."
            }
          ]
        }
      ]
    },
    {
      id: "section-11",
      number: 11,
      title: {
        en: "Becoming a publisher serial writer",
        ar: "الاحترافية في النشر العلمي المتتابع"
      },
      summary: {
        en: "Building a prolific publishing routine, responding to reviewer critiques, and avoiding predatory journals.",
        ar: "بناء روتين بحثي ونشر مستدام، والرد على المحكمين، وتجنب المجلات المفترسة."
      },
      activities: [
        {
          id: "act-189",
          type: "url",
          title: {
            en: "Becoming a publisher serial writer part 1",
            ar: "محاضرة: الاحترافية في النشر المتتابع (الجزء 1: بناء العادات البحثية)"
          },
          icon: "assets/images/icon_url.svg",
          youtubeId: "6TiCPu4NjhU",
          duration: "11:45",
          completion: {
            required: true,
            rule: "View"
          },
          summary: "Developing sustainable clinical writing habits, time management strategies for practicing healthcare workers, and managing research pipelines.",
          notes: [
            "Carve out protected writing blocks (e.g. 30 minutes daily) rather than waiting for nonexistent large free days.",
            "Keep an active project pipeline across stages: idea, ethics approval, data gathering, writing, peer review."
          ]
        },
        {
          id: "act-190",
          type: "url",
          title: {
            en: "Becoming a publisher serial writer part 2",
            ar: "محاضرة: الاحترافية في النشر المتتابع (الجزء 2: التعامل مع مراجعات الأقران)"
          },
          icon: "assets/images/icon_url.svg",
          youtubeId: "ZtbWP2p47Mc",
          duration: "13:15",
          completion: {
            required: true,
            rule: "View"
          },
          summary: "Responding constructively to peer reviewer critiques, crafting persuasive rebuttal letters, and handling manuscript rejections.",
          notes: [
            "View peer review as free expert consultancy to enhance your manuscript's quality.",
            "Write courteous, point-by-point rebuttal letters detailing exact text and line changes."
          ]
        },
        {
          id: "act-191",
          type: "url",
          title: {
            en: "Becoming a publisher serial writer part 3",
            ar: "محاضرة: الاحترافية في النشر المتتابع (الجزء 3: تجنب المجلات المفترسة)"
          },
          icon: "assets/images/icon_url.svg",
          youtubeId: "RuWsI3C61xI",
          duration: "14:50",
          completion: {
            required: true,
            rule: "View"
          },
          summary: "Strategic journal selection, predatory journal identification (Think-Check-Submit checklist), and building international collaborative networks.",
          notes: [
            "Beware of unsolicited spam emails promising 48-hour acceptance in return for rapid payment.",
            "Verify journal indexing in DOAJ, Scopus, Web of Science, and PubMed before submission."
          ]
        },
        {
          id: "act-192",
          type: "quiz",
          title: {
            en: "Quiz",
            ar: "اختبار الاحترافية في النشر المتتابع"
          },
          icon: "assets/images/icon_quiz.svg",
          completion: {
            required: true,
            rule: "Pass (>= 60%)"
          },
          questions: [
            {
              question: "When composing a point-by-point response to peer reviewer comments, which practice is recommended?",
              options: [
                "Professional, courteous, systematic responses quoting the exact revisions made with line numbers",
                "Dismissing reviewer comments as irrelevant",
                "Ignoring critical feedback that demands additional clarification",
                "Submitting complaints to the journal's commercial advertisers"
              ],
              correct: 0,
              explanation: "A structured, polite, and precise point-by-point rebuttal shows scholarly professionalism and accelerates acceptance."
            },
            {
              question: "Which warning sign is a hallmark of a 'Predatory Journal'?",
              options: [
                "Rigorous peer review lasting 8-12 weeks with multiple revisions",
                "Aggressive unsolicited email spam promising guaranteed publication within 48 hours for a quick fee without genuine peer review",
                "Indexed in Scopus, MEDLINE, and Web of Science",
                "An editorial board composed of prominent, verifiable university professors"
              ],
              correct: 1,
              explanation: "Predatory journals solicit submissions aggressively, charge publishing fees, and bypass legitimate peer-review."
            }
          ]
        }
      ]
    },
    {
      id: "section-12",
      number: 12,
      title: {
        en: "Post Test & Evaluation",
        ar: "الاختبار البعدي الشامل وتقييم الدورة"
      },
      summary: {
        en: "Final comprehensive examination (10 questions), course feedback evaluation, and instant CME certificate issuance.",
        ar: "الاختبار النهائي الشامل (10 أسئلة) وتقييم الدورة وإصدار شهادة الساعات المعتمدة."
      },
      activities: [
        {
          id: "act-195",
          type: "quiz",
          title: {
            en: "Post Test",
            ar: "الاختبار البعدي النهائي (Post Test)"
          },
          icon: "assets/images/icon_quiz.svg",
          completion: {
            required: true,
            rule: "Pass (>= 70%)"
          },
          isFinal: true,
          questions: [
            {
              question: "What is the primary rationale for conducting a comprehensive literature review before drafting a clinical protocol?",
              options: [
                "To establish the current evidence boundary and identify unanswered research gaps",
                "To fulfill word count minimums for funding grants",
                "To replace the need for patient informed consent",
                "To guarantee an editorial board position in a journal"
              ],
              correct: 0,
              explanation: "Literature reviews ground the investigation in verified science, preventing duplication and pinpointing genuine clinical knowledge gaps."
            },
            {
              question: "In the PICO search framework, what does the letter 'C' stand for?",
              options: [
                "Clinical Trial",
                "Comparison or Control group",
                "Copyright License",
                "Citation Count"
              ],
              correct: 1,
              explanation: "C represents the Comparison or Control group against which the intervention is measured."
            },
            {
              question: "Which criterion of the FINER framework addresses whether the research can be completed with available resources?",
              options: [
                "Feasible",
                "Interesting",
                "Novel",
                "Ethical"
              ],
              correct: 0,
              explanation: "Feasibility verifies that sample size, diagnostic equipment, investigator expertise, and funding are sufficient."
            },
            {
              question: "What is a major pitfall to avoid when writing a scientific title?",
              options: [
                "Specifying the clinical study design",
                "Using non-standard abbreviations and unnecessary filler phrases like 'A Study Into...'",
                "Using MeSH keywords",
                "Mentioning the patient cohort"
              ],
              correct: 1,
              explanation: "Filler phrases and obscure acronyms clutter titles and hamper automated database retrieval."
            },
            {
              question: "If an investigator has an h-index of 15, what does this mathematically mean?",
              options: [
                "The investigator has 15 total published articles",
                "The investigator has 15 publications that have each earned at least 15 citations",
                "The investigator has published in 15 different international journals",
                "The investigator has 15 years of clinical practice experience"
              ],
              correct: 1,
              explanation: "An h-index of 15 signifies at least 15 publications with at least 15 citations each."
            },
            {
              question: "Why are Altmetric Attention Scores increasingly tracked alongside traditional bibliometrics?",
              options: [
                "Because they reflect immediate real-time societal dissemination across news outlets, policy documents, and public discussions",
                "Because they replace the need for peer review entirely",
                "Because they determine drug pricing in hospitals",
                "Because they only measure retractions"
              ],
              correct: 0,
              explanation: "Altmetrics measures immediate societal and multi-channel dissemination beyond purely academic citations."
            },
            {
              question: "Under the ICMJE guidelines, who qualifies to be named as an author on a clinical paper?",
              options: [
                "Anyone who provided financial funding for the clinical department",
                "Individuals who made substantial intellectual contributions across design, drafting, final approval, and accountability",
                "Only the senior medical director of the facility",
                "Any hospital staff member who asks to be included"
              ],
              correct: 1,
              explanation: "ICMJE requires satisfying all 4 intellectual contribution criteria. Administrative support alone belongs in Acknowledgments."
            },
            {
              question: "What is 'Gift Authorship' considered in medical publishing ethics?",
              options: [
                "A respected mentorship tradition",
                "A violation of academic integrity and misattribution of scientific accountability",
                "An open-access fee waiver incentive",
                "A requirement for CME accreditation"
              ],
              correct: 1,
              explanation: "Gift authorship misrepresents academic accountability and is an ethics violation."
            },
            {
              question: "What is the primary responsibility of an Institutional Review Board (IRB)?",
              options: [
                "Safeguarding the safety, rights, and well-being of human research subjects",
                "Checking grammar and spelling in the discussion section",
                "Setting the pricing of medications tested in trials",
                "Allocating author sequence on publication drafts"
              ],
              correct: 0,
              explanation: "The ethical core of an IRB is patient protection, informed consent, and risk minimization."
            },
            {
              question: "Which feature distinguishes a legitimate peer-reviewed medical journal from a predatory publisher?",
              options: [
                "Guaranteed publication within 24 hours of payment without revision",
                "Rigorous peer review by independent experts, transparent editorial governance, and indexing in DOAJ/MEDLINE/Scopus",
                "Unsolicited email spam praising your credentials",
                "Absence of any retraction or ethical policies"
              ],
              correct: 1,
              explanation: "Legitimate journals adhere to peer review, editorial independence, and international bibliographic indexing."
            }
          ]
        },
        {
          id: "act-194",
          type: "feedback",
          title: {
            en: "Activity Evaluation",
            ar: "استبانة تقييم الدورة التدريبية"
          },
          icon: "assets/images/icon_feedback.svg",
          completion: {
            required: true,
            rule: "Submit Survey"
          },
          questions: [
            {
              id: "q_obj",
              type: "rating",
              text_en: "To what extent were the stated clinical research objectives achieved?",
              text_ar: "ما مدى تحقق أهداف الدورة التدريبية في مجال البحث السريري؟"
            },
            {
              id: "q_content",
              type: "rating",
              text_en: "How would you rate the quality, depth, and relevance of the instructional videos?",
              text_ar: "كيف تقيّم جودة ومحتوى الفيديوهات التعليمية وشموليتها؟"
            },
            {
              id: "q_instructor",
              type: "rating",
              text_en: "How effective was the instructional delivery and clarity of explanations?",
              text_ar: "ما مدى فعالية أسلوب الشرح ووضوح المادة العلمية؟"
            },
            {
              id: "q_platform",
              type: "rating",
              text_en: "How seamless and user-friendly was your experience navigating this learning platform?",
              text_ar: "كيف كانت تجربتك في تصفح واستخدام منصة التعلم التفاعلية؟"
            },
            {
              id: "q_comments",
              type: "text",
              text_en: "Additional recommendations or areas of interest for future CME courses:",
              text_ar: "مقترحات وملاحظات لتطوير البرامج التدريبية القادمة:"
            }
          ]
        }
      ]
    }
  ]
};

// Expose globally
if (typeof window !== 'undefined') {
  window.COURSE_DATA = COURSE_DATA;
}
