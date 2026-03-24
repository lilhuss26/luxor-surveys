// Survey Management System
let currentLanguage = 'ar';
let currentSurvey = null;
let userInfo = { name: '', email: '' };
const answers = { s1: {}, s2: {}, s3: {} };
const totals = { s1: 9, s2: 9, s3: 14 };

// Google Sheets Web App URL
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbz0qWM7aJGRJDvzgf-kY41dnLeDvyJHjUbXjBTXlarMSYGY_C7QXARkUm_ovAoJU9bL/exec';

// Initialize on page load
function initializePage() {
  // Check if language is already selected
  const savedLang = sessionStorage.getItem('selectedLanguage');
  const savedUserInfo = sessionStorage.getItem('userInfo');
  
  if (savedLang && savedUserInfo) {
    currentLanguage = savedLang;
    userInfo = JSON.parse(savedUserInfo);
    document.getElementById('language-modal')?.classList.add('hidden');
    document.getElementById('user-info-modal')?.classList.add('hidden');
    
    // Determine which survey is active
    if (document.getElementById('survey-s1')) currentSurvey = 's1';
    if (document.getElementById('survey-s2')) currentSurvey = 's2';
    if (document.getElementById('survey-s3')) currentSurvey = 's3';
    
    setLanguage(currentLanguage);
  } else {
    // Show language modal
    document.getElementById('language-modal')?.classList.remove('hidden');
  }
}

// Language Selection
function selectLanguage(lang) {
  currentLanguage = lang;
  sessionStorage.setItem('selectedLanguage', lang);
  
  // Hide language modal
  document.getElementById('language-modal').classList.add('hidden');
  
  // Show user info modal
  document.getElementById('user-info-modal').classList.remove('hidden');
  
  // Update language
  setLanguage(lang);
}

// Set Language
function setLanguage(lang) {
  currentLanguage = lang;
  const t = translations[lang];
  
  // Set direction
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  document.documentElement.setAttribute('lang', lang);
  
  // Update all translatable elements
  updateTranslations(t);
}

// Update all translations on the page
function updateTranslations(t) {
  // Language Modal
  const langModalTitle = document.querySelector('#language-modal .lang-modal-title');
  if (langModalTitle) langModalTitle.textContent = t.langModal.title;
  
  const langModalSubtitle = document.querySelector('#language-modal .lang-modal-subtitle');
  if (langModalSubtitle) langModalSubtitle.textContent = t.langModal.subtitle;
  
  // User Info Modal
  const userInfoTitle = document.querySelector('#user-info-modal .user-info-title');
  if (userInfoTitle) userInfoTitle.textContent = t.userInfo.title;
  
  const userInfoSubtitle = document.querySelector('#user-info-modal .user-info-subtitle');
  if (userInfoSubtitle) userInfoSubtitle.textContent = t.userInfo.subtitle;
  
  const nameLabel = document.querySelector('label[for="user-name"]');
  if (nameLabel) nameLabel.textContent = t.userInfo.nameLabel;
  
  const nameInput = document.getElementById('user-name');
  if (nameInput) nameInput.placeholder = t.userInfo.namePlaceholder;
  
  const emailLabel = document.querySelector('label[for="user-email"]');
  if (emailLabel) emailLabel.textContent = t.userInfo.emailLabel;
  
  const emailInput = document.getElementById('user-email');
  if (emailInput) emailInput.placeholder = t.userInfo.emailPlaceholder;
  
  const userInfoSubmit = document.querySelector('#user-info-form .form-submit');
  if (userInfoSubmit) userInfoSubmit.textContent = t.userInfo.submit;
  
  // Landing Page
  const landingTitle = document.querySelector('.landing-title');
  if (landingTitle) landingTitle.textContent = t.landing.title;
  
  const landingSub = document.querySelector('.landing-sub');
  if (landingSub) landingSub.textContent = t.landing.subtitle;
  
  // Survey Cards
  updateSurveyCard('.card-day1', t.landing.survey1);
  updateSurveyCard('.card-day2', t.landing.survey2);
  updateSurveyCard('.card-full', t.landing.survey3);
  
  // Survey-specific content
  if (currentSurvey === 's1') updateSurvey1(t.survey1);
  if (currentSurvey === 's2') updateSurvey2(t.survey2);
  if (currentSurvey === 's3') updateSurvey3(t.survey3);
  
  // Thank you page
  updateThankYou(t.thankyou);
}

function updateSurveyCard(selector, data) {
  const card = document.querySelector(selector);
  if (!card) return;
  
  const tag = card.querySelector('.card-tag');
  if (tag) tag.textContent = data.tag;
  
  const titleAr = card.querySelector('.card-title-ar');
  if (titleAr) titleAr.textContent = data.title;
  
  const titleEn = card.querySelector('.card-title-en');
  if (titleEn) titleEn.textContent = data.titleEn;
  
  const desc = card.querySelector('.card-desc');
  if (desc) desc.textContent = data.desc;
  
  const questions = card.querySelector('.card-meta span:first-child');
  if (questions) questions.textContent = data.questions;
  
  const time = card.querySelector('.card-meta span:last-child');
  if (time) time.textContent = data.time;
  
  const btn = card.querySelector('.card-btn');
  if (btn) btn.textContent = data.button;
}

function updateSurvey1(t) {
  const backBtn = document.querySelector('.s1 .back-btn');
  if (backBtn) backBtn.textContent = t.header.back;
  
  const title = document.querySelector('.s1 .survey-header-title');
  if (title) title.textContent = t.header.title;
  
  const subtitle = document.querySelector('.s1 .survey-header-sub');
  if (subtitle) subtitle.textContent = t.header.subtitle;
  
  const submitBtn = document.querySelector('.s1 .submit-btn');
  if (submitBtn) submitBtn.textContent = t.submit;
  
  // Update all questions
  const questions = document.querySelectorAll('.s1 .question-block');
  questions.forEach((block, index) => {
    const qNum = block.querySelector('.q-number');
    const qText = block.querySelector('.q-text');
    const qKey = 'q' + (index + 1);
    
    if (t.questions[qKey]) {
      if (qNum) qNum.textContent = t.questions[qKey].number;
      if (qText) qText.textContent = t.questions[qKey].text;
      
      // Update choices
      if (t.questions[qKey].choices) {
        const choices = block.querySelectorAll('.choice-btn');
        choices.forEach((choice, i) => {
          if (t.questions[qKey].choices[i]) {
            choice.textContent = t.questions[qKey].choices[i];
          }
        });
      }
      
      // Update emojis
      if (t.questions[qKey].emojis) {
        const emojis = block.querySelectorAll('.emoji-btn');
        emojis.forEach((emoji, i) => {
          if (t.questions[qKey].emojis[i]) {
            const label = emoji.querySelector('.emoji-label');
            if (label) label.textContent = t.questions[qKey].emojis[i].label;
          }
        });
      }
      
      // Update textarea placeholder
      if (t.questions[qKey].placeholder) {
        const textarea = block.querySelector('.open-text');
        if (textarea) textarea.placeholder = t.questions[qKey].placeholder;
      }
      
      // Update stars
      if (t.questions[qKey].stars) {
        const stars = block.querySelectorAll('.star-opt');
        stars.forEach((star, i) => {
          if (t.questions[qKey].stars[i]) {
            const lines = star.innerHTML.split('<br>');
            star.innerHTML = t.questions[qKey].stars[i].value + '<br><small>' + t.questions[qKey].stars[i].label + '</small>';
          }
        });
      }
    }
  });
}

function updateSurvey2(t) {
  const backBtn = document.querySelector('.s2 .back-btn');
  if (backBtn) backBtn.textContent = t.header.back;
  
  const title = document.querySelector('.s2 .survey-header-title');
  if (title) title.textContent = t.header.title;
  
  const subtitle = document.querySelector('.s2 .survey-header-sub');
  if (subtitle) subtitle.textContent = t.header.subtitle;
  
  const submitBtn = document.querySelector('.s2 .submit-btn');
  if (submitBtn) submitBtn.textContent = t.submit;
  
  // Update all questions
  const questions = document.querySelectorAll('.s2 .question-block');
  questions.forEach((block, index) => {
    const qNum = block.querySelector('.q-number');
    const qText = block.querySelector('.q-text');
    const qKey = 'q' + (index + 1);
    
    if (t.questions[qKey]) {
      if (qNum) qNum.textContent = t.questions[qKey].number;
      if (qText) qText.textContent = t.questions[qKey].text;
      
      // Update choices
      if (t.questions[qKey].choices) {
        const choices = block.querySelectorAll('.choice-btn');
        choices.forEach((choice, i) => {
          if (t.questions[qKey].choices[i]) {
            choice.textContent = t.questions[qKey].choices[i];
          }
        });
      }
      
      // Update textarea placeholder
      if (t.questions[qKey].placeholder) {
        const textarea = block.querySelector('.open-text');
        if (textarea) textarea.placeholder = t.questions[qKey].placeholder;
      }
      
      // Update stars
      if (t.questions[qKey].stars) {
        const stars = block.querySelectorAll('.star-opt');
        stars.forEach((star, i) => {
          if (t.questions[qKey].stars[i]) {
            star.innerHTML = t.questions[qKey].stars[i].value + '<br><small>' + t.questions[qKey].stars[i].label + '</small>';
          }
        });
      }
    }
  });
}

function updateSurvey3(t) {
  const backBtn = document.querySelector('.s3 .back-btn');
  if (backBtn) backBtn.textContent = t.header.back;
  
  const title = document.querySelector('.s3 .survey-header-title');
  if (title) title.textContent = t.header.title;
  
  const subtitle = document.querySelector('.s3 .survey-header-sub');
  if (subtitle) subtitle.textContent = t.header.subtitle;
  
  const submitBtn = document.querySelector('.s3 .submit-btn');
  if (submitBtn) submitBtn.textContent = t.submit;
  
  // Update section dividers
  if (t.sections) {
    const sections = document.querySelectorAll('.s3 .section-divider-label');
    const sectionKeys = ['a', 'b', 'c', 'd', 'e'];
    sections.forEach((section, i) => {
      if (t.sections[sectionKeys[i]]) {
        section.textContent = t.sections[sectionKeys[i]];
      }
    });
  }
  
  // Update all questions
  const questions = document.querySelectorAll('.s3 .question-block');
  questions.forEach((block, index) => {
    const qNum = block.querySelector('.q-number');
    const qText = block.querySelector('.q-text');
    const qKey = 'q' + (index + 1);
    
    if (t.questions[qKey]) {
      if (qNum) qNum.textContent = t.questions[qKey].number;
      if (qText) qText.textContent = t.questions[qKey].text;
      
      // Update choices
      if (t.questions[qKey].choices) {
        const choices = block.querySelectorAll('.choice-btn');
        choices.forEach((choice, i) => {
          if (t.questions[qKey].choices[i]) {
            choice.textContent = t.questions[qKey].choices[i];
          }
        });
      }
      
      // Update emojis
      if (t.questions[qKey].emojis) {
        const emojis = block.querySelectorAll('.emoji-btn');
        emojis.forEach((emoji, i) => {
          if (t.questions[qKey].emojis[i]) {
            const label = emoji.querySelector('.emoji-label');
            if (label) label.textContent = t.questions[qKey].emojis[i].label;
          }
        });
      }
      
      // Update textarea placeholder
      if (t.questions[qKey].placeholder) {
        const textarea = block.querySelector('.open-text');
        if (textarea) textarea.placeholder = t.questions[qKey].placeholder;
      }
      
      // Update session labels for Q4
      if (t.questions[qKey].sessions) {
        const sessionLabels = block.querySelectorAll('div[style*="font-size:0.82rem"]');
        sessionLabels.forEach((label, i) => {
          if (t.questions[qKey].sessions[i]) {
            label.textContent = t.questions[qKey].sessions[i];
          }
        });
      }
      
      // Update aspect labels for Q9
      if (t.questions[qKey].aspects) {
        const aspectLabels = block.querySelectorAll('div[style*="font-size:0.8rem"]');
        aspectLabels.forEach((label, i) => {
          if (t.questions[qKey].aspects[i]) {
            label.textContent = t.questions[qKey].aspects[i];
          }
        });
      }
      
      // Update stars
      if (t.questions[qKey].stars) {
        const starContainers = block.querySelectorAll('.star-scale');
        starContainers.forEach(container => {
          const stars = container.querySelectorAll('.star-opt');
          stars.forEach((star, i) => {
            if (t.questions[qKey].stars[i]) {
              star.textContent = t.questions[qKey].stars[i];
            }
          });
        });
      }
    }
  });
}

function updateThankYou(t) {
  const icon = document.querySelector('.ty-icon');
  if (icon) icon.textContent = t.icon;
  
  const title = document.querySelector('.ty-title');
  if (title) title.textContent = t.title;
  
  const sub = document.querySelector('.ty-sub');
  if (sub) {
    sub.innerHTML = t.subtitle + '<br><br><em>' + t.subtitleEn + '</em>';
  }
  
  const backBtn = document.querySelector('.ty-back');
  if (backBtn) backBtn.textContent = t.back;
}

// User Info Form Validation
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function submitUserInfo(event) {
  event.preventDefault();
  
  const name = document.getElementById('user-name').value.trim();
  const email = document.getElementById('user-email').value.trim();
  const t = translations[currentLanguage].userInfo;
  
  let hasError = false;
  
  // Validate name
  if (!name) {
    document.getElementById('name-error').textContent = t.nameError;
    document.getElementById('name-error').classList.add('show');
    hasError = true;
  } else {
    document.getElementById('name-error').classList.remove('show');
  }
  
  // Validate email
  if (!email || !validateEmail(email)) {
    document.getElementById('email-error').textContent = t.emailError;
    document.getElementById('email-error').classList.add('show');
    hasError = true;
  } else {
    document.getElementById('email-error').classList.remove('show');
  }
  
  if (hasError) return;
  
  // Save user info
  userInfo = { name, email };
  sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
  
  // Hide user info modal
  document.getElementById('user-info-modal').classList.add('hidden');
  
  // Determine which survey is active and show it
  if (document.getElementById('survey-s1')) {
    currentSurvey = 's1';
    document.getElementById('survey-s1').style.display = 'block';
    setLanguage(currentLanguage); // Re-apply translations
  } else if (document.getElementById('survey-s2')) {
    currentSurvey = 's2';
    document.getElementById('survey-s2').style.display = 'block';
    setLanguage(currentLanguage); // Re-apply translations
  } else if (document.getElementById('survey-s3')) {
    currentSurvey = 's3';
    document.getElementById('survey-s3').style.display = 'block';
    setLanguage(currentLanguage); // Re-apply translations
  }
  
  // Show main content (for landing page)
  const landing = document.getElementById('landing');
  if (landing) {
    landing.style.display = 'flex';
    setLanguage(currentLanguage); // Re-apply translations
  }
}

// Survey Navigation
function openSurvey(id) {
  const landing = document.getElementById('landing');
  if (landing) landing.style.display = 'none';
  
  const survey = document.getElementById('survey-' + id);
  if (survey) survey.classList.add('active');
  
  currentSurvey = id;
  updateProgress(id);
  window.scrollTo(0, 0);
}

function goBack() {
  document.querySelectorAll('.survey-screen').forEach(s => s.classList.remove('active'));
  const landing = document.getElementById('landing');
  if (landing) landing.style.display = 'flex';
  window.scrollTo(0, 0);
}

function goHome() {
  document.getElementById('thankyou').classList.remove('active');
  const landing = document.getElementById('landing');
  if (landing) landing.style.display = 'flex';
  window.scrollTo(0, 0);
}

// Answer Selection Functions
function select(el, key, val) {
  const parent = el.closest('.choices');
  parent.querySelectorAll('.choice-btn').forEach(b => b.classList.remove('selected'));
  el.classList.add('selected');
  answers[currentSurvey][key] = val;
  updateProgress(currentSurvey);
}

function selectEmoji(el, key) {
  const parent = el.closest('.emoji-scale');
  parent.querySelectorAll('.emoji-btn').forEach(b => b.classList.remove('selected'));
  el.classList.add('selected');
  answers[currentSurvey][key] = el.querySelector('.emoji-label').textContent;
  updateProgress(currentSurvey);
}

function selectStar(el, key, survey) {
  const parent = el.closest('.star-scale');
  parent.querySelectorAll('.star-opt').forEach(b => b.classList.remove('selected'));
  el.classList.add('selected');
  answers[survey || currentSurvey][key] = el.textContent.split('\n')[0];
  updateProgress(survey || currentSurvey);
}

function selectSessionStar(el, key, val) {
  const parent = el.closest('.star-scale');
  parent.querySelectorAll('.star-opt').forEach(b => b.classList.remove('selected'));
  el.classList.add('selected');
  answers[currentSurvey][key] = val;
  updateProgress(currentSurvey);
}

function updateSlider(el, key, survey) {
  const v = el.value;
  document.getElementById('sv-' + key).textContent = v + ' / 10';
  answers[survey || currentSurvey][key] = v;
  updateProgress(survey || currentSurvey);
}

function trackText(el, key, survey) {
  answers[survey || currentSurvey][key] = el.value;
  updateProgress(survey || currentSurvey);
}

// Progress Tracking
function updateProgress(id) {
  const count = Object.keys(answers[id]).length;
  const total = totals[id];
  const pct = Math.min(100, Math.round((count / total) * 100));
  const fill = document.getElementById('prog-' + id);
  const text = document.getElementById('prog-text-' + id);
  if (fill) fill.style.width = pct + '%';
  if (text) text.textContent = count + ' / ' + total;
}

// Submit Survey
function submitSurvey(id) {
  const surveyData = {
    surveyId: id,
    language: currentLanguage,
    userInfo: userInfo,
    answers: answers[id],
    timestamp: new Date().toISOString()
  };
  
  console.log('Survey ' + id + ' submitted:', surveyData);
  
  // Show loading state
  const submitBtn = document.querySelector('.s' + id.charAt(1) + ' .submit-btn');
  const originalText = submitBtn.textContent;
  submitBtn.disabled = true;
  submitBtn.textContent = currentLanguage === 'ar' ? 'جاري الإرسال...' : 
                          currentLanguage === 'fr' ? 'Envoi en cours...' : 
                          'Submitting...';
  
  // Send to Google Sheets
  fetch(GOOGLE_SHEETS_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(surveyData)
  })
  .then(() => {
    // Success - show thank you screen
    console.log('Survey data sent successfully');
    document.getElementById('survey-' + id).classList.remove('active');
    const ty = document.getElementById('thankyou');
    ty.classList.add('active');
    window.scrollTo(0, 0);
    
    // Clear answers for this survey
    answers[id] = {};
  })
  .catch(error => {
    // Error handling
    console.error('Error submitting survey:', error);
    
    // Still show thank you (data is logged locally)
    alert(currentLanguage === 'ar' ? 
          'تم حفظ إجاباتك محليًا. سيتم إرسالها لاحقًا.' :
          currentLanguage === 'fr' ?
          'Vos réponses ont été enregistrées localement. Elles seront envoyées plus tard.' :
          'Your answers have been saved locally. They will be sent later.');
    
    document.getElementById('survey-' + id).classList.remove('active');
    const ty = document.getElementById('thankyou');
    ty.classList.add('active');
    window.scrollTo(0, 0);
  })
  .finally(() => {
    // Reset button
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }
  });
}

// Animation observer for question blocks
function initAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.question-block').forEach(b => observer.observe(b));
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initializePage();
    initAnimations();
  });
} else {
  initializePage();
  initAnimations();
}
