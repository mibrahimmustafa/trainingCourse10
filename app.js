/**
 * Hamat Educational - Course Application Controller
 * Next-Generation Frontend Architecture
 */

(function () {
  'use strict';

  // --- STATE ---
  const state = {
    lang: localStorage.getItem('hamat_lang') || 'en',
    completedActivities: new Set(JSON.parse(localStorage.getItem('hamat_completed') || '[]')),
    quizScores: JSON.parse(localStorage.getItem('hamat_quiz_scores') || '{}'),
    evaluationSubmitted: localStorage.getItem('hamat_eval_done') === 'true',
    isDrawerOpen: window.innerWidth > 1024,
    expandedSections: new Set(['section-0', 'section-1']),
    currentActivity: null,
    currentQuizIndex: 0,
    currentQuizAnswers: {}
  };

  // --- TRANSLATIONS DICTIONARY ---
  const i18n = {
    en: {
      siteTitle: "Course: The Art of Scientific research | Hamat Educational",
      home: "Home",
      navSupport: "Support & Training Policies",
      navVision: "Vision, Mission & Guidelines",
      complaints: "Complaints & Inquiries",
      courseSearch: "Course Search",
      trainerPolicy: "Trainer Development Policy",
      visionMission: "Vision & Mission",
      learnerGuideHealth: "Learner Guide (Healthcare)",
      instructorGuide: "Instructor Guide",
      learnerGuide: "Learner Guide",
      integrityGuide: "Academic Integrity & Anti-Cheating",
      teamContact: "Contact Support Team",
      guestNotice: "Guest Evaluation Mode",
      fullAccess: "Full Access Unlocked",
      courseIndexTitle: "Course index",
      expandAll: "Expand all",
      collapseAll: "Collapse all",
      resetProgress: "Reset Demo Progress",
      closeDrawer: "Close course index",
      courseProgress: "Course Progress",
      activitiesCompleted: "activities completed",
      viewCertificate: "View CME Certificate",
      completion: "Completion",
      completionStudentsMust: "Students must:",
      ruleView: "View",
      rulePass: "Pass quiz",
      ruleSubmit: "Submit survey",
      completedBadge: "Completed",
      markComplete: "Mark as Completed",
      nextLesson: "Next Lesson",
      previousLesson: "Previous",
      lectureNotes: "Lecture Takeaways & Notes",
      submitQuiz: "Submit Quiz",
      retakeQuiz: "Retake Quiz",
      quizScore: "Your Score",
      congratulations: "Congratulations! You passed this module.",
      tryAgain: "Review the lecture notes and try again.",
      explainTitle: "Clinical Rationale & Explanation:",
      certTitle: "Certificate of Completion",
      certSubtitle: "Continuing Medical Education (CME) Accreditation",
      certPresentedTo: "This is proudly presented to",
      certStatement: "for successfully mastering and completing the accredited clinical curriculum:",
      certHours: "15 CME Accredited Hours",
      certDate: "Date of Issuance",
      certId: "Verification Code",
      printCert: "Print / Save PDF",
      editRecipient: "Edit Participant Name",
      saveName: "Save",
      feedbackTitle: "Course Evaluation Survey",
      submitFeedback: "Submit Evaluation",
      policiesTitle: "Platform Policies & Governance",
      policiesBannerNotice: "If you continue browsing this website, you agree to our policies:",
      bannerContinue: "Continue",
      helpTooltip: "Need help? Click to view user guide & support.",
      searchPlaceholder: "Search course topics or policies...",
      noAnnouncements: "No additional announcements at this time.",
      close: "Close"
    },
    ar: {
      siteTitle: "دورة: فن البحث العلمي .. تمكين ممارسي الرعاية الصحية | هامات للتدريب",
      home: "الرئيسية",
      navSupport: "الدعم الفني والشكاوى وسياسة التدريب",
      navVision: "الرؤية والرسالة والأدلة الإرشادية",
      complaints: "الشكاوى والاستفسارات",
      courseSearch: "البحث في المقررات",
      trainerPolicy: "خطة التدريب وسياسة المدربين",
      visionMission: "الرؤية والرسالة",
      learnerGuideHealth: "دليل المتدرب الخاص بالقطاع الصحي",
      instructorGuide: "دليل المدربين",
      learnerGuide: "دليل المتدرب العام",
      integrityGuide: "آلية منع الغش وانتحال الهوية",
      teamContact: "التواصل مع فريق العمل",
      guestNotice: "وضع معاينة المشرف والتقييم",
      fullAccess: "كامل الصلاحيات متاحة بدون تسجيل",
      courseIndexTitle: "فهرس محتويات الدورة",
      expandAll: "توسيع الكل",
      collapseAll: "طي الكل",
      resetProgress: "إعادة تعيين التقدم",
      closeDrawer: "إغلاق الفهرس",
      courseProgress: "نسبة إنجاز الدورة",
      activitiesCompleted: "نشاط مكتمل",
      viewCertificate: "عرض شهادة الساعات المعتمدة",
      completion: "الإكمال",
      completionStudentsMust: "متطلبات المتدرب:",
      ruleView: "مشاهدة المحتوى",
      rulePass: "اجتياز الاختبار",
      ruleSubmit: "تسليم الاستبانة",
      completedBadge: "مكتمل",
      markComplete: "تحديد كمكتمل",
      nextLesson: "الدرس التالي",
      previousLesson: "السابق",
      lectureNotes: "ملاحظات ونقاط المحاضرة الإكلينيكية",
      submitQuiz: "تسليم الاختبار",
      retakeQuiz: "إعادة المحاولة",
      quizScore: "نتيجتك في الاختبار",
      congratulations: "تهانينا! لقد اجتزت هذا الاختبار بنجاح.",
      tryAgain: "يرجى مراجعة ملخص المحاضرة والمحاولة مرة أخرى.",
      explainTitle: "التفسير والتعليل العلمي الإكلينيكي:",
      certTitle: "شهادة إتمام برنامج تدريبي",
      certSubtitle: "معتمدة بساعات التعليم الطبي المستمر (CME)",
      certPresentedTo: "تشهد إدارة منصة هامات التعليمية بأن",
      certStatement: "قد أتم بنجاح واجتياز متطلبات البرنامج التدريبي التخصصي:",
      certHours: "15 ساعة تدريبية معتمدة",
      certDate: "تاريخ الإصدار",
      certId: "رقم التحقق والاعتماد",
      printCert: "طباعة / حفظ PDF",
      editRecipient: "تعديل اسم المتدرب",
      saveName: "حفظ",
      feedbackTitle: "استبانة تقييم الدورة والمنصة",
      submitFeedback: "إرسال التقييم",
      policiesTitle: "سياسات وضوابط المنصة",
      policiesBannerNotice: "استمرارك في تصفح واستخدام هذه المنصة يعد موافقة صريحة على السياسات المعتمدة:",
      bannerContinue: "موافق ومتابعة",
      helpTooltip: "بحاجة للمساعدة؟ انقر لعرض الدليل والدعم.",
      searchPlaceholder: "ابحث في محاور الدورة أو السياسات...",
      noAnnouncements: "لا توجد إعلانات إضافية حالياً.",
      close: "إغلاق"
    }
  };

  // --- HELPER FUNCTIONS ---
  function t(key) {
    return (i18n[state.lang] && i18n[state.lang][key]) || i18n.en[key] || key;
  }

  function saveState() {
    localStorage.setItem('hamat_lang', state.lang);
    localStorage.setItem('hamat_completed', JSON.stringify(Array.from(state.completedActivities)));
    localStorage.setItem('hamat_quiz_scores', JSON.stringify(state.quizScores));
    localStorage.setItem('hamat_eval_done', state.evaluationSubmitted ? 'true' : 'false');
  }

  // --- INITIALIZATION ---
  function init() {
    applyLanguage(state.lang, false);
    renderApp();
    setupGlobalEvents();
    updateProgressUI();
  }

  // --- LANGUAGE SWITCHER ---
  function applyLanguage(lang, reRender = true) {
    state.lang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.title = t('siteTitle');

    const langBtnText = document.getElementById('currentLangLabel');
    if (langBtnText) {
      langBtnText.textContent = lang === 'ar' ? 'العربية (ar)' : 'English (en)';
    }

    saveState();
    if (reRender) {
      renderApp();
      updateProgressUI();
    }
  }

  // --- RENDER APP ---
  function renderApp() {
    renderNavbar();
    renderCourseHero();
    renderDrawer();
    renderSections();
    renderPolicyBanner();
  }

  // 1. NAVBAR
  function renderNavbar() {
    const navSupportText = document.getElementById('navSupportText');
    const navVisionText = document.getElementById('navVisionText');
    const userNotice = document.getElementById('userNoticeText');
    const homeLink = document.getElementById('navHomeLink');

    if (navSupportText) navSupportText.textContent = t('navSupport');
    if (navVisionText) navVisionText.textContent = t('navVision');
    if (homeLink) homeLink.textContent = t('home');
    if (userNotice) {
      userNotice.innerHTML = `<strong>${t('guestNotice')}</strong> <span class="divider-vertical"></span> <span class="demo-badge"><i class="fa fa-unlock-alt"></i> ${t('fullAccess')}</span>`;
    }
  }

  // 2. COURSE HERO & TITLE
  function renderCourseHero() {
    const heroTitle = document.getElementById('courseMainTitle');
    const progressTitle = document.getElementById('progressTitleText');
    const certBtn = document.getElementById('quickCertBtn');

    if (heroTitle) {
      heroTitle.textContent = COURSE_DATA.title[state.lang] || COURSE_DATA.title.en;
    }
    if (progressTitle) {
      progressTitle.innerHTML = `<i class="fa fa-chart-line text-primary"></i> ${t('courseProgress')}`;
    }
    if (certBtn) {
      certBtn.innerHTML = `<i class="fa fa-award"></i> ${t('viewCertificate')}`;
    }
  }

  // 3. COURSE DRAWER (SIDEBAR)
  function renderDrawer() {
    const drawerContainer = document.getElementById('drawerSectionsList');
    const drawerTitle = document.getElementById('drawerTitleLabel');
    const drawerMenu = document.getElementById('drawerMenuContent');

    if (drawerTitle) drawerTitle.textContent = t('courseIndexTitle');

    if (drawerMenu) {
      drawerMenu.innerHTML = `
        <button class="drawer-menu-item" id="btnDrawerExpandAll"><i class="fa fa-angles-down"></i> ${t('expandAll')}</button>
        <button class="drawer-menu-item" id="btnDrawerCollapseAll"><i class="fa fa-angles-up"></i> ${t('collapseAll')}</button>
        <button class="drawer-menu-item" id="btnDrawerCompleteAll"><i class="fa fa-check-double text-success"></i> ${state.lang === 'ar' ? 'محاكاة إكمال الدورة 100%' : 'Simulate 100% Completion'}</button>
        <button class="drawer-menu-item" id="btnDrawerReset"><i class="fa fa-rotate-left"></i> ${t('resetProgress')}</button>
      `;
      document.getElementById('btnDrawerExpandAll').addEventListener('click', expandAllSections);
      document.getElementById('btnDrawerCollapseAll').addEventListener('click', collapseAllSections);
      document.getElementById('btnDrawerCompleteAll').addEventListener('click', completeAllForDemo);
      document.getElementById('btnDrawerReset').addEventListener('click', resetProgress);
    }

    if (!drawerContainer) return;
    drawerContainer.innerHTML = '';

    COURSE_DATA.sections.forEach((sec, idx) => {
      const isExpanded = state.expandedSections.has(sec.id);
      const isCompleted = sec.activities.every(a => state.completedActivities.has(a.id));

      const groupEl = document.createElement('div');
      groupEl.className = `drawer-section-group ${isExpanded ? 'expanded' : ''} ${isCompleted ? 'completed' : ''}`;
      groupEl.id = `drawer-group-${sec.id}`;

      const secTitleText = sec.title[state.lang] || sec.title.en;

      groupEl.innerHTML = `
        <div class="drawer-section-header" data-section-id="${sec.id}">
          <i class="fa fa-chevron-right drawer-chevron"></i>
          <span class="drawer-section-title" title="${secTitleText}">${secTitleText}</span>
          <i class="fa fa-check-circle section-check-icon"></i>
        </div>
        <ul class="drawer-activity-list" id="drawer-acts-${sec.id}"></ul>
      `;

      const actsList = groupEl.querySelector(`#drawer-acts-${sec.id}`);
      sec.activities.forEach(act => {
        const actDone = state.completedActivities.has(act.id);
        const actTitleText = act.title[state.lang] || act.title.en;
        const iconClass = act.type === 'url' ? 'fa-video' : (act.type === 'quiz' ? 'fa-clipboard-question' : (act.type === 'forum' ? 'fa-bullhorn' : 'fa-star'));

        const actItem = document.createElement('li');
        actItem.className = `drawer-activity-item ${actDone ? 'completed' : ''}`;
        actItem.dataset.activityId = act.id;
        actItem.innerHTML = `
          <i class="fa ${iconClass}"></i>
          <span class="drawer-activity-title" title="${actTitleText}">${actTitleText}</span>
          ${actDone ? '<i class="fa fa-check text-success ms-auto"></i>' : ''}
        `;
        actItem.addEventListener('click', (e) => {
          e.stopPropagation();
          scrollToSection(sec.id);
          openActivity(act, sec);
        });
        actsList.appendChild(actItem);
      });

      // Section header click in drawer
      groupEl.querySelector('.drawer-section-header').addEventListener('click', () => {
        toggleSection(sec.id);
        scrollToSection(sec.id);
      });

      drawerContainer.appendChild(groupEl);
    });
  }

  // 4. MAIN SECTIONS & ACTIVITIES ACCORDION
  function renderSections() {
    const sectionsContainer = document.getElementById('courseSectionsContainer');
    const toggleAllBtn = document.getElementById('toggleAllSectionsBtn');

    if (toggleAllBtn) {
      const allExpanded = COURSE_DATA.sections.every(s => state.expandedSections.has(s.id));
      toggleAllBtn.textContent = allExpanded ? t('collapseAll') : t('expandAll');
    }

    if (!sectionsContainer) return;
    sectionsContainer.innerHTML = '';

    COURSE_DATA.sections.forEach((sec) => {
      const isExpanded = state.expandedSections.has(sec.id);
      const secCard = document.createElement('article');
      secCard.className = `section-card ${isExpanded ? 'expanded' : ''}`;
      secCard.id = sec.id;

      const secTitleText = sec.title[state.lang] || sec.title.en;
      const secSummaryText = sec.summary[state.lang] || sec.summary.en;

      secCard.innerHTML = `
        <div class="section-card-header" data-section-id="${sec.id}">
          <div class="section-toggle-circle">
            <i class="fa fa-chevron-right"></i>
          </div>
          <div class="section-title-wrap">
            <h2 class="section-title">${secTitleText}</h2>
            ${secSummaryText ? `<p class="section-summary-text">${secSummaryText}</p>` : ''}
          </div>
        </div>
        <div class="section-card-body" id="body-${sec.id}">
          <div class="activities-container" id="acts-container-${sec.id}"></div>
        </div>
      `;

      // Header click
      secCard.querySelector('.section-card-header').addEventListener('click', () => {
        toggleSection(sec.id);
      });

      const actsContainer = secCard.querySelector(`#acts-container-${sec.id}`);
      sec.activities.forEach(act => {
        const isDone = state.completedActivities.has(act.id);
        const actTitleText = act.title[state.lang] || act.title.en;
        const iconType = act.type;

        const row = document.createElement('div');
        row.className = `activity-row activity-${act.id}`;
        row.dataset.activityId = act.id;

        let ruleText = t('ruleView');
        if (act.type === 'quiz') ruleText = t('rulePass');
        if (act.type === 'feedback') ruleText = t('ruleSubmit');

        row.innerHTML = `
          <div class="activity-left">
            <div class="activity-icon-container ${iconType}">
              <img src="${act.icon}" class="activity-icon-img" alt="${iconType}" onerror="this.src='assets/images/icon_url.svg'">
            </div>
            <a href="javascript:void(0)" class="activity-title-link">${actTitleText}</a>
          </div>
          <div class="activity-right">
            <div class="completion-container" id="comp-box-${act.id}">
              <button class="completion-pill-btn ${isDone ? 'done' : ''}" type="button">
                <span>${t('completion')}</span>
                <i class="fa fa-caret-down"></i>
                ${isDone ? '<i class="fa fa-check ms-1"></i>' : ''}
              </button>
              <div class="completion-dropdown-box">
                <div class="completion-header-text">${t('completionStudentsMust')}</div>
                <div class="completion-item-rule ${isDone ? 'active' : ''}">
                  <i class="fa ${isDone ? 'fa-check-circle text-success' : 'fa-circle-dot'}"></i>
                  <span>${ruleText}</span>
                </div>
              </div>
            </div>
          </div>
        `;

        // Click title opens activity
        row.querySelector('.activity-title-link').addEventListener('click', (e) => {
          e.preventDefault();
          openActivity(act, sec);
        });

        // Click completion pill shows dropdown
        const compBtn = row.querySelector('.completion-pill-btn');
        compBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const compContainer = row.querySelector('.completion-container');
          document.querySelectorAll('.completion-container.open').forEach(el => {
            if (el !== compContainer) el.classList.remove('open');
          });
          compContainer.classList.toggle('open');
        });

        actsContainer.appendChild(row);
      });

      sectionsContainer.appendChild(secCard);
    });
  }

  // 5. POLICY BOTTOM BANNER
  function renderPolicyBanner() {
    const banner = document.getElementById('policyBottomBanner');
    if (!banner) return;
    
    if (localStorage.getItem('hamat_policy_accepted') === 'true') {
      banner.style.display = 'none';
      return;
    }

    banner.style.display = 'flex';
    const bannerText = document.getElementById('policyBannerText');
    const continueBtn = document.getElementById('policyContinueBtn');

    if (bannerText) {
      bannerText.innerHTML = `
        ${t('policiesBannerNotice')}
        <a class="policy-banner-links" data-policy-id="8">الالتزام بمبادئ حقوق الملكية الفكرية وحقوق النشر</a> •
        <a class="policy-banner-links" data-policy-id="2">سياسة النزاهة الاكاديمية</a> •
        <a class="policy-banner-links" data-policy-id="10">سياسة الخصوصية و الاستخدام</a> •
        <a class="policy-banner-links" data-policy-id="4">سياسة الحضور الافتراضي</a> •
        <a class="policy-banner-links" data-policy-id="6">سياسة الدعم الفني</a> •
        <a class="policy-banner-links" data-policy-id="7">خطة التدريب</a> •
        <a class="policy-banner-links" data-policy-id="9">سياسات منع الغش او انتحال الهوية</a>
      `;

      bannerText.querySelectorAll('.policy-banner-links').forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const pid = parseInt(link.dataset.policyId);
          openPolicyModal(pid);
        });
      });
    }

    if (continueBtn) {
      continueBtn.textContent = t('bannerContinue');
      continueBtn.onclick = () => {
        localStorage.setItem('hamat_policy_accepted', 'true');
        banner.style.display = 'none';
      };
    }

    const closeBtn = document.getElementById('policyCloseBtn');
    if (closeBtn) {
      closeBtn.onclick = () => {
        banner.style.display = 'none';
      };
    }
  }

  // --- SECTION TOGGLING ---
  function toggleSection(secId) {
    if (state.expandedSections.has(secId)) {
      state.expandedSections.delete(secId);
    } else {
      state.expandedSections.add(secId);
    }
    syncSectionUI(secId);
  }

  function syncSectionUI(secId) {
    const isExpanded = state.expandedSections.has(secId);
    const card = document.getElementById(secId);
    const drawerGroup = document.getElementById(`drawer-group-${secId}`);

    if (card) {
      card.classList.toggle('expanded', isExpanded);
    }
    if (drawerGroup) {
      drawerGroup.classList.toggle('expanded', isExpanded);
    }
  }

  function expandAllSections() {
    COURSE_DATA.sections.forEach(s => state.expandedSections.add(s.id));
    COURSE_DATA.sections.forEach(s => syncSectionUI(s.id));
    const btn = document.getElementById('toggleAllSectionsBtn');
    if (btn) btn.textContent = t('collapseAll');
  }

  function collapseAllSections() {
    state.expandedSections.clear();
    COURSE_DATA.sections.forEach(s => syncSectionUI(s.id));
    const btn = document.getElementById('toggleAllSectionsBtn');
    if (btn) btn.textContent = t('expandAll');
  }

  function scrollToSection(secId) {
    const el = document.getElementById(secId);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  // --- PROGRESS TRACKING ---
  function updateProgressUI() {
    let totalTrackable = 0;
    COURSE_DATA.sections.forEach(s => {
      s.activities.forEach(a => {
        if (a.completion && a.completion.required) totalTrackable++;
      });
    });

    let completedCount = 0;
    COURSE_DATA.sections.forEach(s => {
      s.activities.forEach(a => {
        if (a.completion && a.completion.required && state.completedActivities.has(a.id)) {
          completedCount++;
        }
      });
    });

    const percent = totalTrackable > 0 ? Math.round((completedCount / totalTrackable) * 100) : 0;

    const progressFill = document.getElementById('courseProgressBar');
    const metricsLabel = document.getElementById('progressMetricsText');
    const quickCertBtn = document.getElementById('quickCertBtn');

    if (progressFill) progressFill.style.width = `${percent}%`;
    if (metricsLabel) metricsLabel.textContent = `${completedCount} / ${totalTrackable} (${percent}%)`;

    if (quickCertBtn) {
      // In demo mode, manager can always click to preview certificate!
      quickCertBtn.removeAttribute('disabled');
      const postTestDone = state.completedActivities.has('act-195');
      if (percent >= 70 || postTestDone) {
        quickCertBtn.classList.add('pulse-glow');
      } else {
        quickCertBtn.classList.remove('pulse-glow');
      }
    }

    // Update section check icons in drawer
    COURSE_DATA.sections.forEach(sec => {
      const secGroup = document.getElementById(`drawer-group-${sec.id}`);
      if (secGroup) {
        const isDone = sec.activities.every(a => state.completedActivities.has(a.id));
        secGroup.classList.toggle('completed', isDone);
      }
    });

    saveState();
  }

  function markActivityCompleted(actId) {
    state.completedActivities.add(actId);
    updateProgressUI();

    // Update card completion pill
    const actRow = document.querySelector(`.activity-${actId}`);
    if (actRow) {
      const pill = actRow.querySelector('.completion-pill-btn');
      if (pill) {
        pill.classList.add('done');
        pill.innerHTML = `<span>${t('completion')}</span> <i class="fa fa-caret-down"></i> <i class="fa fa-check ms-1"></i>`;
      }
      const rule = actRow.querySelector('.completion-item-rule');
      if (rule) {
        rule.classList.add('active');
        rule.querySelector('i').className = 'fa fa-check-circle text-success';
      }
    }

    // Update drawer item
    const drawerItem = document.querySelector(`.drawer-activity-item[data-activity-id="${actId}"]`);
    if (drawerItem) {
      drawerItem.classList.add('completed');
      if (!drawerItem.querySelector('.fa-check')) {
        drawerItem.insertAdjacentHTML('beforeend', '<i class="fa fa-check text-success ms-auto"></i>');
      }
    }
  }

  // --- ACTIVITY LAUNCHER ---
  function openActivity(act, sec) {
    state.currentActivity = { act, sec };

    if (act.type === 'url') {
      openVideoModal(act, sec);
    } else if (act.type === 'quiz') {
      openQuizModal(act, sec);
    } else if (act.type === 'forum') {
      openAnnouncementsModal(act);
    } else if (act.type === 'feedback') {
      openEvaluationModal(act);
    }
  }

  // --- 1. VIDEO MODAL ---
  function openVideoModal(act, sec) {
    const modal = document.getElementById('videoModal');
    const titleEl = document.getElementById('videoModalTitle');
    const playerWrap = document.getElementById('videoPlayerWrap');
    const summaryText = document.getElementById('videoSummaryText');
    const notesList = document.getElementById('videoNotesList');
    const markBtn = document.getElementById('btnMarkVideoComplete');
    const nextBtn = document.getElementById('btnNextFromVideo');

    const actTitle = act.title[state.lang] || act.title.en;
    titleEl.innerHTML = `<i class="fa fa-play-circle text-primary"></i> ${actTitle}`;

    const actNum = act.id.replace('act-', '');
    const localSrc = act.localVideo || `assets/videos/video_${actNum}.mp4`;

    // High performance local HTML5 video player
    playerWrap.innerHTML = `
      <video 
        id="courseLocalVideo" 
        controls 
        autoplay 
        playsinline 
        preload="metadata"
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: contain; background: #0f172a; border-radius: 8px;">
        <source src="${localSrc}" type="video/mp4">
        Your browser does not support local HTML5 video playback.
      </video>
    `;

    summaryText.textContent = act.summary || "";
    notesList.innerHTML = (act.notes || []).map(n => `<li>${n}</li>`).join('');

    const isAlreadyDone = state.completedActivities.has(act.id);
    updateVideoMarkBtn(markBtn, isAlreadyDone);

    markBtn.onclick = () => {
      markActivityCompleted(act.id);
      updateVideoMarkBtn(markBtn, true);
    };

    nextBtn.onclick = () => {
      markActivityCompleted(act.id);
      closeModal('videoModal');
      advanceToNextActivity(act, sec);
    };

    openModal('videoModal');
  }

  function updateVideoMarkBtn(btn, isDone) {
    if (isDone) {
      btn.className = 'btn btn-success';
      btn.innerHTML = `<i class="fa fa-check-circle"></i> ${t('completedBadge')}`;
    } else {
      btn.className = 'btn btn-outline';
      btn.innerHTML = `<i class="fa fa-check"></i> ${t('markComplete')}`;
    }
  }

  // --- 2. QUIZ MODAL & RUNNER ---
  function openQuizModal(act, sec) {
    state.currentQuizAnswers = {};
    const modal = document.getElementById('quizModal');
    const titleEl = document.getElementById('quizModalTitle');
    const bodyEl = document.getElementById('quizModalBody');
    const footerEl = document.getElementById('quizModalFooter');

    const actTitle = act.title[state.lang] || act.title.en;
    titleEl.innerHTML = `<i class="fa fa-clipboard-question text-danger"></i> ${actTitle}`;

    renderQuizQuestions(act, bodyEl, footerEl, sec);
    openModal('quizModal');
  }

  function renderQuizQuestions(act, bodyEl, footerEl, sec) {
    const questions = act.questions || [];
    let html = `
      <div class="quiz-progress-bar">
        <span>${questions.length} Questions</span>
        <span>Passing Score: 60%</span>
      </div>
      <form id="quizForm">
    `;

    questions.forEach((q, qIdx) => {
      html += `
        <div class="question-box" id="q-box-${qIdx}">
          <div class="question-text">${qIdx + 1}. ${q.question}</div>
          <div class="options-list">
            ${q.options.map((opt, oIdx) => `
              <label class="option-item" id="opt-label-${qIdx}-${oIdx}">
                <input type="radio" name="q_${qIdx}" value="${oIdx}" class="option-radio" required>
                <span class="option-text">${opt}</span>
              </label>
            `).join('')}
          </div>
          <div class="quiz-explanation-box" id="explain-${qIdx}">
            <strong>${t('explainTitle')}</strong> ${q.explanation}
          </div>
        </div>
      `;
    });

    html += `</form>`;
    bodyEl.innerHTML = html;

    // Attach selection handlers for styled options
    questions.forEach((_, qIdx) => {
      const radios = bodyEl.querySelectorAll(`input[name="q_${qIdx}"]`);
      radios.forEach(r => {
        r.addEventListener('change', () => {
          bodyEl.querySelectorAll(`label[id^="opt-label-${qIdx}-"]`).forEach(l => l.classList.remove('selected'));
          r.closest('.option-item').classList.add('selected');
        });
      });
    });

    footerEl.innerHTML = `
      <button type="button" class="btn btn-outline" id="btnCancelQuiz">${t('previousLesson')}</button>
      <button type="button" class="btn btn-primary" id="btnSubmitQuiz">${t('submitQuiz')}</button>
    `;

    document.getElementById('btnCancelQuiz').onclick = () => closeModal('quizModal');
    document.getElementById('btnSubmitQuiz').onclick = () => gradeQuiz(act, questions, bodyEl, footerEl, sec);
  }

  function gradeQuiz(act, questions, bodyEl, footerEl, sec) {
    let score = 0;
    let allAnswered = true;

    questions.forEach((q, qIdx) => {
      const selected = bodyEl.querySelector(`input[name="q_${qIdx}"]:checked`);
      if (!selected) {
        allAnswered = false;
        return;
      }
      const ansVal = parseInt(selected.value);
      state.currentQuizAnswers[qIdx] = ansVal;

      const explainBox = bodyEl.querySelector(`#explain-${qIdx}`);
      explainBox.style.display = 'block';

      const selectedLabel = bodyEl.querySelector(`#opt-label-${qIdx}-${ansVal}`);
      const correctLabel = bodyEl.querySelector(`#opt-label-${qIdx}-${q.correct}`);

      if (ansVal === q.correct) {
        score++;
        selectedLabel.style.borderColor = '#10b981';
        selectedLabel.style.backgroundColor = '#ecfdf5';
      } else {
        selectedLabel.style.borderColor = '#ef4444';
        selectedLabel.style.backgroundColor = '#fef2f2';
        if (correctLabel) {
          correctLabel.style.borderColor = '#10b981';
          correctLabel.style.backgroundColor = '#ecfdf5';
        }
      }
    });

    if (!allAnswered) {
      alert(state.lang === 'ar' ? 'يرجى الإجابة على جميع الأسئلة قبل التسليم.' : 'Please answer all questions before submitting.');
      return;
    }

    const pct = Math.round((score / questions.length) * 100);
    const passThreshold = act.isFinal ? 70 : 60;
    const passed = pct >= passThreshold;

    state.quizScores[act.id] = { score, total: questions.length, percent: pct, passed };

    if (passed) {
      markActivityCompleted(act.id);
    }

    footerEl.innerHTML = `
      <div class="d-flex align-items-center gap-3">
        <span class="fw-bold">${t('quizScore')}: ${score}/${questions.length} (${pct}%)</span>
        <span class="badge ${passed ? 'bg-success' : 'bg-danger'}">${passed ? t('congratulations') : t('tryAgain')}</span>
      </div>
      <div>
        ${!passed ? `<button type="button" class="btn btn-outline me-2" id="btnRetakeQuiz">${t('retakeQuiz')}</button>` : ''}
        <button type="button" class="btn btn-primary" id="btnDoneQuiz">${t('nextLesson')}</button>
      </div>
    `;

    if (!passed) {
      document.getElementById('btnRetakeQuiz').onclick = () => renderQuizQuestions(act, bodyEl, footerEl, sec);
    }
    document.getElementById('btnDoneQuiz').onclick = () => {
      closeModal('quizModal');
      advanceToNextActivity(act, sec);
    };
  }

  // --- 3. ANNOUNCEMENTS FORUM MODAL ---
  function openAnnouncementsModal(act) {
    const modal = document.getElementById('announcementsModal');
    const bodyEl = document.getElementById('announcementsBody');
    const annList = act.data && act.data.announcements ? act.data.announcements : [];

    bodyEl.innerHTML = `
      <div class="announcements-wrapper">
        ${annList.map(a => `
          <div class="announcement-item card p-3 mb-3 border">
            <h5 class="fw-bold text-primary mb-1"><i class="fa fa-bullhorn me-2"></i> ${a.title}</h5>
            <div class="text-muted small mb-2"><i class="fa fa-user-circle"></i> ${a.author} • <i class="fa fa-calendar-alt"></i> ${a.date}</div>
            <p class="mb-0 text-secondary">${a.body}</p>
          </div>
        `).join('')}
      </div>
    `;

    // Direct binding for all close buttons inside announcements modal
    modal.querySelectorAll('.modal-close-btn, .modal-close-btn-action, [data-dismiss="modal"]').forEach(btn => {
      btn.onclick = (e) => {
        if (e) e.preventDefault();
        closeModal(modal);
      };
    });

    markActivityCompleted(act.id);
    openModal('announcementsModal');
  }

  // --- 4. EVALUATION MODAL ---
  function openEvaluationModal(act) {
    const modal = document.getElementById('evaluationModal');
    const bodyEl = document.getElementById('evaluationBody');
    const footerEl = document.getElementById('evaluationFooter');

    const questions = act.questions || [];
    bodyEl.innerHTML = `
      <form id="evaluationForm">
        ${questions.map((q, idx) => {
          if (q.type === 'rating') {
            const qText = state.lang === 'ar' ? q.text_ar : q.text_en;
            return `
              <div class="mb-4 p-3 bg-light rounded border">
                <label class="form-label fw-bold d-block mb-2">${idx + 1}. ${qText}</label>
                <div class="star-rating d-flex gap-2">
                  ${[1, 2, 3, 4, 5].map(star => `
                    <label class="star-label cursor-pointer">
                      <input type="radio" name="${q.id}" value="${star}" class="d-none" required>
                      <i class="fa fa-star star-icon fs-4 text-warning" data-star="${star}"></i>
                    </label>
                  `).join('')}
                </div>
              </div>
            `;
          } else {
            const qText = state.lang === 'ar' ? q.text_ar : q.text_en;
            return `
              <div class="mb-3 p-3 bg-light rounded border">
                <label class="form-label fw-bold mb-2">${idx + 1}. ${qText}</label>
                <textarea class="form-control" name="${q.id}" rows="3" placeholder="${state.lang === 'ar' ? 'اكتب ملاحظاتك هنا...' : 'Enter your feedback here...'}"></textarea>
              </div>
            `;
          }
        }).join('')}
      </form>
    `;

    // Star hover & select behavior
    bodyEl.querySelectorAll('.star-rating').forEach(group => {
      const stars = group.querySelectorAll('.star-icon');
      const inputs = group.querySelectorAll('input[type="radio"]');

      inputs.forEach((inp, sIdx) => {
        inp.addEventListener('change', () => {
          stars.forEach((s, i) => {
            if (i <= sIdx) {
              s.classList.remove('fa-regular');
              s.classList.add('fa-solid');
            } else {
              s.classList.remove('fa-solid');
              s.classList.add('fa-regular');
            }
          });
        });
      });
    });

    footerEl.innerHTML = `
      <button type="button" class="btn btn-outline" id="btnCancelEval">${t('previousLesson')}</button>
      <button type="button" class="btn btn-success" id="btnSubmitEval"><i class="fa fa-paper-plane"></i> ${t('submitFeedback')}</button>
    `;

    document.getElementById('btnCancelEval').onclick = () => closeModal('evaluationModal');
    document.getElementById('btnSubmitEval').onclick = () => {
      state.evaluationSubmitted = true;
      markActivityCompleted(act.id);
      closeModal('evaluationModal');
      openCertificateModal();
    };

    openModal('evaluationModal');
  }

  // --- 5. CERTIFICATE MODAL & GENERATOR ---
  function openCertificateModal() {
    const modal = document.getElementById('certificateModal');
    const certName = document.getElementById('certRecipientName');
    const certCode = document.getElementById('certCodeVal');
    const certDate = document.getElementById('certDateVal');

    const defaultName = localStorage.getItem('hamat_user_name') || (state.lang === 'ar' ? 'د. محمد عبدالرحمن (مدير التقييم)' : 'Dr. Mohamed Abdelrahman (Evaluation Director)');
    if (certName) certName.textContent = defaultName;
    if (certCode) certCode.textContent = 'HAMAT-CME-2024-' + Math.floor(100000 + Math.random() * 900000);
    if (certDate) {
      const now = new Date();
      certDate.textContent = now.toLocaleDateString(state.lang === 'ar' ? 'ar-SA' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    }

    const printBtn = document.getElementById('btnPrintCertificate');
    if (printBtn) {
      printBtn.onclick = () => {
        window.print();
      };
    }

    const editNameBtn = document.getElementById('btnEditCertName');
    if (editNameBtn) {
      editNameBtn.onclick = () => {
        const newName = prompt(state.lang === 'ar' ? 'أدخل اسم المتدرب على الشهادة:' : 'Enter participant name for certificate:', certName.textContent);
        if (newName && newName.trim()) {
          certName.textContent = newName.trim();
          localStorage.setItem('hamat_user_name', newName.trim());
        }
      };
    }

    openModal('certificateModal');
  }

  // --- 6. POLICY MODAL ---
  function openPolicyModal(policyId) {
    const modal = document.getElementById('policyModal');
    const bodyEl = document.getElementById('policyModalBody');
    const titleEl = document.getElementById('policyModalTitle');

    const policies = window.POLICIES_DATA || [];
    const policy = policies.find(p => p.id === policyId) || policies[0];

    if (!policy) return;

    const pTitle = state.lang === 'ar' ? policy.title_ar : policy.title_en;
    titleEl.innerHTML = `<i class="fa fa-shield-halved text-primary"></i> ${pTitle}`;

    bodyEl.innerHTML = `
      <div class="policy-full-content" style="white-space: pre-line; line-height: 1.8; color: #334155;">
        ${policy.content}
      </div>
    `;

    // Direct binding for close buttons inside policy modal
    modal.querySelectorAll('.modal-close-btn, .modal-close-btn-action, [data-dismiss="modal"]').forEach(btn => {
      btn.onclick = (e) => {
        if (e) e.preventDefault();
        closeModal(modal);
      };
    });

    openModal('policyModal');
  }

  // --- 7. EXTRA MODAL (Vision, Guides, Contact) ---
  function openInfoModal(title, content) {
    const modal = document.getElementById('policyModal');
    const bodyEl = document.getElementById('policyModalBody');
    const titleEl = document.getElementById('policyModalTitle');

    titleEl.innerHTML = `<i class="fa fa-circle-info text-primary"></i> ${title}`;
    bodyEl.innerHTML = `
      <div style="white-space: pre-line; line-height: 1.8; color: #334155;">
        ${content}
      </div>
    `;

    // Direct binding for close buttons inside info modal
    modal.querySelectorAll('.modal-close-btn, .modal-close-btn-action, [data-dismiss="modal"]').forEach(btn => {
      btn.onclick = (e) => {
        if (e) e.preventDefault();
        closeModal(modal);
      };
    });

    openModal('policyModal');
  }

  // --- ADVANCE TO NEXT ACTIVITY ---
  function advanceToNextActivity(currentAct, currentSec) {
    // Find next activity
    let foundCurrent = false;
    let nextAct = null;
    let nextSec = null;

    for (const sec of COURSE_DATA.sections) {
      for (const act of sec.activities) {
        if (foundCurrent) {
          nextAct = act;
          nextSec = sec;
          break;
        }
        if (act.id === currentAct.id) {
          foundCurrent = true;
        }
      }
      if (nextAct) break;
    }

    if (nextAct && nextSec) {
      state.expandedSections.add(nextSec.id);
      syncSectionUI(nextSec.id);
      scrollToSection(nextSec.id);
      openActivity(nextAct, nextSec);
    } else {
      // Reached the end! Open certificate
      openCertificateModal();
    }
  }

  // --- MODAL UTILS ---
  function openModal(modalId) {
    const m = typeof modalId === 'string' ? document.getElementById(modalId) : modalId;
    if (m) {
      m.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal(modalRef) {
    const m = typeof modalRef === 'string' ? document.getElementById(modalRef) : modalRef;
    if (m) {
      m.classList.remove('open');
      document.body.style.overflow = '';
      // Stop video playback if it's the video modal
      if (m.id === 'videoModal') {
        const playerWrap = document.getElementById('videoPlayerWrap');
        if (playerWrap) {
          const vid = playerWrap.querySelector('video');
          if (vid) {
            vid.pause();
            vid.src = '';
            vid.load();
          }
          playerWrap.innerHTML = '';
        }
      }
    }
  }

  // Expose globally for HTML onclick attributes and external triggers
  window.openModal = openModal;
  window.closeModal = closeModal;

  // --- GLOBAL EVENTS & DROPDOWNS ---
  function setupGlobalEvents() {
    // Drawer Toggles
    const toggleDrawerBtn = document.getElementById('toggleDrawerBtn');
    const closeDrawerBtn = document.getElementById('closeDrawerBtn');
    const floatingToggle = document.getElementById('floatingDrawerOpenBtn');
    const drawerEl = document.getElementById('courseDrawer');
    const mainContent = document.getElementById('mainContentArea');

    function toggleDrawer() {
      state.isDrawerOpen = !state.isDrawerOpen;
      if (drawerEl) drawerEl.classList.toggle('closed', !state.isDrawerOpen);
      if (mainContent) mainContent.classList.toggle('expanded-full', !state.isDrawerOpen);
      if (floatingToggle) floatingToggle.style.display = state.isDrawerOpen ? 'none' : 'flex';
      if (window.innerWidth <= 1024) {
        drawerEl.classList.toggle('mobile-open', state.isDrawerOpen);
      }
    }

    if (toggleDrawerBtn) toggleDrawerBtn.onclick = toggleDrawer;
    if (closeDrawerBtn) closeDrawerBtn.onclick = toggleDrawer;
    if (floatingToggle) floatingToggle.onclick = toggleDrawer;

    // Language Toggle
    const langBtn = document.getElementById('langToggleBtn');
    const langDropdown = document.getElementById('langDropdownMenu');
    if (langBtn && langDropdown) {
      langBtn.onclick = (e) => {
        e.stopPropagation();
        langDropdown.parentElement.classList.toggle('open');
      };
      document.getElementById('langOptEn').onclick = (e) => {
        e.preventDefault();
        applyLanguage('en');
        langDropdown.parentElement.classList.remove('open');
      };
      document.getElementById('langOptAr').onclick = (e) => {
        e.preventDefault();
        applyLanguage('ar');
        langDropdown.parentElement.classList.remove('open');
      };
    }

    // Top Navigation Dropdowns
    document.querySelectorAll('.nav-dropdown-toggle').forEach(btn => {
      btn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const parent = btn.closest('.nav-item');
        document.querySelectorAll('.nav-item.open').forEach(p => {
          if (p !== parent) p.classList.remove('open');
        });
        parent.classList.toggle('open');
      };
    });

    // Drawer Options Menu (Three vertical dots)
    const drawerMenuBtn = document.getElementById('drawerActionsBtn');
    if (drawerMenuBtn) {
      drawerMenuBtn.onclick = (e) => {
        e.stopPropagation();
        drawerMenuBtn.closest('.drawer-actions-dropdown').classList.toggle('open');
      };
    }

    // Expand/Collapse All
    const toggleAllBtn = document.getElementById('toggleAllSectionsBtn');
    if (toggleAllBtn) {
      toggleAllBtn.onclick = () => {
        const allExpanded = COURSE_DATA.sections.every(s => state.expandedSections.has(s.id));
        if (allExpanded) {
          collapseAllSections();
        } else {
          expandAllSections();
        }
      };
    }

    // Quick Certificate button in progress bar
    const quickCertBtn = document.getElementById('quickCertBtn');
    if (quickCertBtn) {
      quickCertBtn.onclick = () => openCertificateModal();
    }

    // Floating Help Button
    const helpBtn = document.getElementById('floatingHelpBtn');
    if (helpBtn) {
      helpBtn.onclick = () => {
        const info = window.EXTRA_INFO_DATA && window.EXTRA_INFO_DATA.integrity_guide ? window.EXTRA_INFO_DATA.integrity_guide : "Hamat Educational Platform Help Center. For support contact support@alfsale.com";
        openInfoModal(state.lang === 'ar' ? 'مركز المساعدة والدعم الإرشادي' : 'Hamat Learning Help & Guidelines', info);
      };
    }

    // Close open menus when clicking outside
    document.addEventListener('click', (e) => {
      document.querySelectorAll('.nav-item.open').forEach(p => p.classList.remove('open'));
      document.querySelectorAll('.drawer-actions-dropdown.open').forEach(p => p.classList.remove('open'));
      document.querySelectorAll('.completion-container.open').forEach(p => p.classList.remove('open'));
    });

    // Setup direct click handlers for all static modal close buttons
    document.querySelectorAll('.modal-overlay').forEach(modal => {
      modal.querySelectorAll('.modal-close-btn, .modal-close-btn-action, [data-dismiss="modal"]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          closeModal(modal);
        });
      });
    });

    // Universal Modal Close Handler (Direct clicks, action buttons, and backdrop clicks)
    document.addEventListener('click', (e) => {
      // 1. Click on any close button or action button (like the 'Close' button inside modal-footer)
      const closeBtn = e.target.closest('.modal-close-btn, .modal-close-btn-action, .modal-backdrop-close, [data-dismiss="modal"]');
      if (closeBtn) {
        const modal = closeBtn.closest('.modal-overlay');
        if (modal) closeModal(modal);
        return;
      }

      // 2. Click on the dark backdrop outside modal card
      if (e.target.classList.contains('modal-overlay')) {
        closeModal(e.target);
      }
    });

    // ESC key closes any open modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const openModal = document.querySelector('.modal-overlay.open');
        if (openModal) closeModal(openModal);
      }
    });

    // Top Dropdown Link Bindings (Policies & Info)
    setupTopDropdownLinks();
  }

  function setupTopDropdownLinks() {
    // Support & Complaints menu
    const linkComplaints = document.getElementById('linkComplaints');
    if (linkComplaints) {
      linkComplaints.onclick = (e) => {
        e.preventDefault();
        openInfoModal(state.lang === 'ar' ? 'الشكاوى والاقتراحات' : 'Complaints & Inquiries', 
          state.lang === 'ar' ? 'تتيح منصة هامات للمتدربين تقديم الشكاوى والملاحظات الفنية والأكاديمية عبر نموذج الدعم المباشر، ويتم الرد والمعالجة خلال 24 ساعة عمل.' : 'Hamat Educational provides direct technical and academic dispute resolution within 24 working hours.');
      };
    }

    const linkTrainerPolicy = document.getElementById('linkTrainerPolicy');
    if (linkTrainerPolicy) {
      linkTrainerPolicy.onclick = (e) => {
        e.preventDefault();
        openPolicyModal(7); // Training plan
      };
    }

    // Vision, Mission & Guidelines menu
    const linkVision = document.getElementById('linkVision');
    if (linkVision) {
      linkVision.onclick = (e) => {
        e.preventDefault();
        const vText = window.EXTRA_INFO_DATA && window.EXTRA_INFO_DATA.vision_mission ? window.EXTRA_INFO_DATA.vision_mission : "الرؤية والرسالة لمنصة هامات التعليمية";
        openInfoModal(t('visionMission'), vText);
      };
    }

    const linkIntegrity = document.getElementById('linkIntegrity');
    if (linkIntegrity) {
      linkIntegrity.onclick = (e) => {
        e.preventDefault();
        openPolicyModal(2); // Academic integrity
      };
    }

    const linkLearnerGuide = document.getElementById('linkLearnerGuide');
    if (linkLearnerGuide) {
      linkLearnerGuide.onclick = (e) => {
        e.preventDefault();
        openInfoModal(t('learnerGuideHealth'), 
          state.lang === 'ar' ? 'دليل المتدرب الخاص بالقطاع الصحي: يتضمن إرشادات حضور المحاضرات الافتراضية، التفاعل في لوحات النقاش، واشتراطات الحصول على ساعات التعليم الطبي المستمر (CME).' : 'Learner Guide for Healthcare Workers: includes guidelines for virtual lecture attendance, discussion board engagement, and CME accredited credit requirements.');
      };
    }

    const linkInstructorGuide = document.getElementById('linkInstructorGuide');
    if (linkInstructorGuide) {
      linkInstructorGuide.onclick = (e) => {
        e.preventDefault();
        openInfoModal(t('instructorGuide'), 
          state.lang === 'ar' ? 'دليل المدربين: معايير تصميم المحتوى الرقمي، الإشراف على التقييمات، والالتزام بحقوق الملكية الفكرية والنزاهة الأكاديمية.' : 'Instructor Guide: Digital content standards, assessment supervision, and strict adherence to intellectual property.');
      };
    }

    const linkTeam = document.getElementById('linkTeam');
    if (linkTeam) {
      linkTeam.onclick = (e) => {
        e.preventDefault();
        openInfoModal(t('teamContact'), 
          state.lang === 'ar' ? 'فريق العمل والدعم الفني: متاح على مدار الساعة عبر البريد الإلكتروني support@alfsale.com ومن خلال قنوات التواصل المباشرة.' : 'Support & Academic Team: Available 24/7 via support@alfsale.com and live help channels.');
      };
    }
  }

  function completeAllForDemo() {
    COURSE_DATA.sections.forEach(sec => {
      sec.activities.forEach(act => {
        state.completedActivities.add(act.id);
      });
    });
    state.evaluationSubmitted = true;
    saveState();
    renderApp();
    updateProgressUI();
    openCertificateModal();
  }

  function resetProgress() {
    if (confirm(state.lang === 'ar' ? 'هل أنت متأكد من إعادة تعيين تقدم الدورة؟' : 'Are you sure you want to reset demo progress?')) {
      state.completedActivities.clear();
      state.quizScores = {};
      state.evaluationSubmitted = false;
      saveState();
      renderApp();
      updateProgressUI();
    }
  }

  // Auto init on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
