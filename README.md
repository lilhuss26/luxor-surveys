# Luxor African Cinema Forum - Multilingual Survey System

A multilingual survey website for the Luxor African Cinema Forum, supporting Arabic, English, and French languages.

## 📁 Project Structure

```
luxor-surveys/
├── index.html              # Main landing page with 3 survey cards
├── survey1.html            # Day 1 survey (standalone)
├── survey2.html            # Day 2 survey (standalone)
├── survey3.html            # Full forum survey (standalone)
├── css/
│   └── styles.css          # Shared styling
├── js/
│   ├── translations.js     # All AR/EN/FR translations
│   └── survey.js           # Common survey functions
└── README.md               # This file
```

## 🌍 Features

- **Multilingual Support**: Arabic, English, and French
- **RTL/LTR Support**: Automatic text direction switching
- **User Information Collection**: Name and email before each survey
- **Independent Surveys**: Each survey can be accessed directly via its own link
- **Progress Tracking**: Visual progress bar for each survey
- **Beautiful Design**: Maintains the original elegant design
- **Responsive**: Works on all devices

## 🚀 How to Use

### Option 1: Main Landing Page
1. Open `index.html` in a web browser
2. Select your language (Arabic/English/French)
3. Enter your name and email
4. Click on any survey card to start

### Option 2: Direct Survey Links
You can send individual survey links directly:

- **Day 1 Survey**: `survey1.html`
  - Topic: Programming the Future (AI & African Cinema)
  - 9 questions, 5-7 minutes

- **Day 2 Survey**: `survey2.html`
  - Topic: Responsible & Collaborative Cinema
  - 9 questions, 5-7 minutes

- **Full Forum Survey**: `survey3.html`
  - Topic: Complete Forum Evaluation
  - 14 questions, 8-10 minutes

Each standalone survey includes:
- Language selection modal
- Name/email collection form
- Full survey functionality
- Thank you screen

## 📊 Survey Data Collection

When a user submits a survey, the data is logged to the browser console with:
- Survey ID (s1, s2, or s3)
- Selected language
- User information (name and email)
- All answers
- Timestamp

**To collect responses**, you need to:
1. Set up a backend server (e.g., PHP, Node.js, Python)
2. Modify the `submitSurvey()` function in `js/survey.js`
3. Send the data to your server endpoint

Example modification in `survey.js`:
```javascript
function submitSurvey(id) {
  const surveyData = {
    surveyId: id,
    language: currentLanguage,
    userInfo: userInfo,
    answers: answers[id],
    timestamp: new Date().toISOString()
  };
  
  // Send to your server
  fetch('https://your-server.com/api/submit-survey', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(surveyData)
  })
  .then(response => response.json())
  .then(data => {
    // Show thank you screen
    document.getElementById('survey-' + id).classList.remove('active');
    document.getElementById('thankyou').classList.add('active');
    window.scrollTo(0, 0);
  });
}
```

## 🔧 Customization

### Update Translations
Edit `js/translations.js` to modify or add translations for any language.

### Update Styling
Edit `css/styles.css` to change colors, fonts, or layout.

### Add New Questions
1. Add the question HTML in the appropriate survey file
2. Add the translation in `js/translations.js`
3. Update the total count in `survey.js` (totals object)

## 🌐 Deployment

### Local Testing
Simply open `index.html` in a web browser. All files work locally.

### Web Hosting
Upload all files to your web server maintaining the directory structure:
- Upload to root or subdirectory
- Ensure CSS and JS folders are accessible
- No server-side processing required (unless collecting responses)

### Recommended Hosting
- GitHub Pages
- Netlify
- Vercel
- Any static web hosting

## 📱 Browser Compatibility

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Design Features

- Elegant color scheme with gold accents
- Smooth animations and transitions
- Film strip decorative elements
- Postcard-style text input frames
- Emoji and star rating scales
- Progress indicators

## 📝 Survey Content

### Survey 1 - Day One (9 questions)
- AI in African Cinema
- Digital and Hybrid Programming
- Selection criteria for AI films
- Festival categories

### Survey 2 - Day Two (9 questions)
- Environmental Sustainability
- Festival Knowledge Exchange
- Partnership models
- Implementation recommendations

### Survey 3 - Full Forum (14 questions)
- Participant demographics
- Session evaluations (4 sessions)
- Recommendations quality
- Overall experience
- Future suggestions

## 🔒 Privacy

- User data is stored in browser sessionStorage (temporary)
- Data is cleared when browser session ends
- No cookies used
- No third-party tracking

## 💡 Tips

1. **Sharing Individual Surveys**: Send the direct link to survey1.html, survey2.html, or survey3.html
2. **Language Persistence**: Language selection is saved in sessionStorage during the session
3. **Testing**: Clear sessionStorage to reset and test the full flow again
4. **Mobile**: All surveys are fully responsive and work great on mobile devices

## 🆘 Troubleshooting

**Issue**: Language modal doesn't appear
- **Solution**: Clear browser cache and sessionStorage

**Issue**: Surveys don't display correctly
- **Solution**: Ensure all CSS and JS files are in the correct folders

**Issue**: Translations not working
- **Solution**: Check browser console for JavaScript errors

## 📞 Support

For questions or issues, contact the Luxor African Cinema Forum team.

---

**Version**: 1.0  
**Last Updated**: March 2026  
**License**: All rights reserved - Luxor African Cinema Forum
