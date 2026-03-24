/**
 * Google Apps Script to Receive Survey Data
 * 
 * INSTRUCTIONS:
 * 1. After creating the sheets with create-sheets.gs
 * 2. Add this code to the SAME Apps Script project
 * 3. Save the project
 * 4. Deploy as Web App:
 *    - Click "Deploy" > "New deployment"
 *    - Click gear icon > Select "Web app"
 *    - Description: "Survey Data Receiver"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone"
 *    - Click "Deploy"
 *    - Copy the Web App URL
 * 5. Use the Web App URL in your survey website
 */

/**
 * Handle POST requests from survey submissions
 */
function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Get the spreadsheet
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    
    // Route to appropriate sheet based on survey ID
    let result;
    if (data.surveyId === 's1') {
      result = saveDay1Data(ss, data);
    } else if (data.surveyId === 's2') {
      result = saveDay2Data(ss, data);
    } else if (data.surveyId === 's3') {
      result = saveFullForumData(ss, data);
    } else {
      throw new Error('Invalid survey ID');
    }
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Survey data saved successfully',
        submissionId: result.submissionId
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Handle GET requests (for testing)
 */
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: 'ok',
      message: 'Survey Data Receiver is running',
      timestamp: new Date().toISOString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Save Day 1 Survey data
 */
function saveDay1Data(ss, data) {
  const sheet = ss.getSheetByName('Day 1 Survey');
  if (!sheet) {
    throw new Error('Day 1 Survey sheet not found');
  }
  
  const submissionId = generateSubmissionId();
  const timestamp = new Date();
  const answers = data.answers;
  
  // Prepare row data
  const rowData = [
    timestamp,                    // A: Timestamp
    data.language,                // B: Language
    data.userInfo.name,           // C: Name
    data.userInfo.email,          // D: Email
    submissionId,                 // E: Submission_ID
    answers.q1 || '',             // F: Q1_AI_Opinion
    answers.q2 || '',             // G: Q2_Session_Preference
    answers.q3 || '',             // H: Q3_Selection_Criteria
    answers.q4 || '',             // I: Q4_Separate_Category
    answers.q5 || '',             // J: Q5_Hybrid_Feeling
    answers.q6 || '',             // K: Q6_Data_Influence
    answers.q7 || '',             // L: Q7_Missing_Topics
    answers.q8 || '',             // M: Q8_Key_Idea
    answers.q9 || '',             // N: Q9_Discussion_Depth
    getClientIp()                 // O: IP_Address
  ];
  
  // Append the row
  sheet.appendRow(rowData);
  
  return { submissionId: submissionId };
}

/**
 * Save Day 2 Survey data
 */
function saveDay2Data(ss, data) {
  const sheet = ss.getSheetByName('Day 2 Survey');
  if (!sheet) {
    throw new Error('Day 2 Survey sheet not found');
  }
  
  const submissionId = generateSubmissionId();
  const timestamp = new Date();
  const answers = data.answers;
  
  // Prepare row data
  const rowData = [
    timestamp,                    // A: Timestamp
    data.language,                // B: Language
    data.userInfo.name,           // C: Name
    data.userInfo.email,          // D: Email
    submissionId,                 // E: Submission_ID
    answers['q2-1'] || '',        // F: Q1_Sustainability_Status
    answers['q2-2'] || '',        // G: Q2_Practical_Proposals
    answers.q3 || '',             // H: Q3_Policy_Feasibility
    answers['q4-s2'] || '',       // I: Q4_Partnership_Model
    answers.q5 || '',             // J: Q5_Action_Plan
    answers.q6 || '',             // K: Q6_Missing_Voices
    answers['q7-s2'] || '',       // L: Q7_Feasible_Recommendation
    answers['q8-s2'] || '',       // M: Q8_Discussion_Depth
    answers['q9-s2'] || '',       // N: Q9_Advice_To_Organizers
    getClientIp()                 // O: IP_Address
  ];
  
  // Append the row
  sheet.appendRow(rowData);
  
  return { submissionId: submissionId };
}

/**
 * Save Full Forum Survey data
 */
function saveFullForumData(ss, data) {
  const sheet = ss.getSheetByName('Full Forum Survey');
  if (!sheet) {
    throw new Error('Full Forum Survey sheet not found');
  }
  
  const submissionId = generateSubmissionId();
  const timestamp = new Date();
  const answers = data.answers;
  
  // Prepare row data
  const rowData = [
    timestamp,                    // A: Timestamp
    data.language,                // B: Language
    data.userInfo.name,           // C: Name
    data.userInfo.email,          // D: Email
    submissionId,                 // E: Submission_ID
    answers.p1 || '',             // F: Q1_Professional_Role
    answers.p2 || '',             // G: Q2_Region
    answers.p3 || '',             // H: Q3_Institution_Size
    answers['s4-1'] || '',        // I: Q4_Session1_Rating
    answers['s4-2'] || '',        // J: Q4_Session2_Rating
    answers['s4-3'] || '',        // K: Q4_Session3_Rating
    answers['s4-4'] || '',        // L: Q4_Session4_Rating
    answers['q5-s3'] || '',       // M: Q5_Speaker_Diversity
    answers['q6-s3'] || '',       // N: Q6_Recommendations_Specificity
    answers['q7-s3'] || '',       // O: Q7_Recommendations_Origin
    answers['q8-s3'] || '',       // P: Q8_Most_Impactful_Recommendation
    answers['log-1'] || '',       // Q: Q9_Timing_Rating
    answers['log-2'] || '',       // R: Q9_Language_Access_Rating
    answers['log-3'] || '',       // S: Q9_Materials_Rating
    answers['q10-s3'] || '',      // T: Q10_Overall_Experience
    answers['q11-s3'] || '',      // U: Q11_Next_Edition_Topic
    answers['q12-s3'] || '',      // V: Q12_Forum_Duration
    answers['q13-s3'] || '',      // W: Q13_Key_Change_Suggestion
    answers['q14-s3'] || '',      // X: Q14_Additional_Comments
    getClientIp()                 // Y: IP_Address
  ];
  
  // Append the row
  sheet.appendRow(rowData);
  
  return { submissionId: submissionId };
}

/**
 * Generate a unique submission ID
 */
function generateSubmissionId() {
  const timestamp = new Date().getTime();
  const random = Math.random().toString(36).substring(2, 9);
  return `SUB-${timestamp}-${random}`.toUpperCase();
}

/**
 * Get client IP address (best effort)
 */
function getClientIp() {
  try {
    // This is limited in Apps Script, but we try
    return Session.getTemporaryActiveUserKey() || 'N/A';
  } catch (e) {
    return 'N/A';
  }
}

/**
 * Test function to verify setup
 */
function testSetup() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheets = ['Day 1 Survey', 'Day 2 Survey', 'Full Forum Survey'];
  
  let message = 'Setup Check:\n\n';
  let allGood = true;
  
  sheets.forEach(sheetName => {
    const sheet = ss.getSheetByName(sheetName);
    if (sheet) {
      message += `✓ ${sheetName} - Found\n`;
    } else {
      message += `✗ ${sheetName} - Missing!\n`;
      allGood = false;
    }
  });
  
  if (allGood) {
    message += '\n✓ All sheets are ready!';
  } else {
    message += '\n✗ Please run setupSurveySheets first';
  }
  
  SpreadsheetApp.getUi().alert('Setup Status', message, SpreadsheetApp.getUi().ButtonSet.OK);
}

/**
 * Add test data for verification
 */
function addTestData() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // Test Day 1
  const testData1 = {
    surveyId: 's1',
    language: 'en',
    userInfo: { name: 'Test User', email: 'test@example.com' },
    answers: {
      q1: 'Strongly agree, vision is what distinguishes the filmmaker',
      q2: 'Session One: Programming AI Films and Creativity Standards',
      q3: 'The human directorial vision behind the tool',
      q4: 'Yes, a separate category',
      q5: 'Excited',
      q6: 'Test response for data influence',
      q7: 'Test response for missing topics',
      q8: 'Test key idea',
      q9: 'Deep'
    },
    timestamp: new Date().toISOString()
  };
  
  saveDay1Data(ss, testData1);
  
  SpreadsheetApp.getUi().alert(
    'Test Data Added',
    'A test submission has been added to Day 1 Survey.\nCheck the sheet to verify the data appears correctly.',
    SpreadsheetApp.getUi().ButtonSet.OK
  );
}
