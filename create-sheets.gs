/**
 * Google Apps Script to Create Survey Sheets
 * 
 * INSTRUCTIONS:
 * 1. Open your Google Sheet
 * 2. Go to Extensions > Apps Script
 * 3. Delete any existing code
 * 4. Paste this entire code
 * 5. Save (Ctrl+S or Cmd+S)
 * 6. Run the function: setupSurveySheets
 * 7. Authorize the script when prompted
 * 
 * This will create 3 sheets with proper headers and formatting
 */

function setupSurveySheets() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // Delete default sheet if it exists
  const defaultSheet = ss.getSheetByName('Sheet1');
  if (defaultSheet && ss.getSheets().length > 1) {
    ss.deleteSheet(defaultSheet);
  }
  
  // Create the three survey sheets
  createDay1Sheet(ss);
  createDay2Sheet(ss);
  createFullForumSheet(ss);
  
  // Show completion message
  SpreadsheetApp.getUi().alert(
    'Setup Complete!',
    'All 3 survey sheets have been created successfully:\n\n' +
    '• Day 1 Survey\n' +
    '• Day 2 Survey\n' +
    '• Full Forum Survey\n\n' +
    'You can now set up the web app to receive survey responses.',
    SpreadsheetApp.getUi().ButtonSet.OK
  );
}

function createDay1Sheet(ss) {
  // Delete existing sheet if it exists
  let sheet = ss.getSheetByName('Day 1 Survey');
  if (sheet) {
    ss.deleteSheet(sheet);
  }
  
  // Create new sheet
  sheet = ss.insertSheet('Day 1 Survey');
  
  // Set up headers
  const headers = [
    'Timestamp',
    'Language',
    'Name',
    'Email',
    'Submission_ID',
    'Q1_AI_Opinion',
    'Q2_Session_Preference',
    'Q3_Selection_Criteria',
    'Q4_Separate_Category',
    'Q5_Hybrid_Feeling',
    'Q6_Data_Influence',
    'Q7_Missing_Topics',
    'Q8_Key_Idea',
    'Q9_Discussion_Depth',
    'IP_Address'
  ];
  
  // Write headers
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // Format header row
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setBackground('#C9A84C');
  headerRange.setFontColor('#FFFFFF');
  headerRange.setFontWeight('bold');
  headerRange.setHorizontalAlignment('center');
  
  // Set column widths
  sheet.setColumnWidth(1, 150); // Timestamp
  sheet.setColumnWidth(2, 80);  // Language
  sheet.setColumnWidth(3, 150); // Name
  sheet.setColumnWidth(4, 200); // Email
  sheet.setColumnWidth(5, 150); // Submission_ID
  for (let i = 6; i <= 14; i++) {
    sheet.setColumnWidth(i, 250); // Questions
  }
  sheet.setColumnWidth(15, 120); // IP_Address
  
  // Freeze header row
  sheet.setFrozenRows(1);
  
  // Add data validation for Language column
  const languageRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(['ar', 'en', 'fr'], true)
    .build();
  sheet.getRange(2, 2, 1000, 1).setDataValidation(languageRule);
}

function createDay2Sheet(ss) {
  // Delete existing sheet if it exists
  let sheet = ss.getSheetByName('Day 2 Survey');
  if (sheet) {
    ss.deleteSheet(sheet);
  }
  
  // Create new sheet
  sheet = ss.insertSheet('Day 2 Survey');
  
  // Set up headers
  const headers = [
    'Timestamp',
    'Language',
    'Name',
    'Email',
    'Submission_ID',
    'Q1_Sustainability_Status',
    'Q2_Practical_Proposals',
    'Q3_Policy_Feasibility',
    'Q4_Partnership_Model',
    'Q5_Action_Plan',
    'Q6_Missing_Voices',
    'Q7_Feasible_Recommendation',
    'Q8_Discussion_Depth',
    'Q9_Advice_To_Organizers',
    'IP_Address'
  ];
  
  // Write headers
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // Format header row
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setBackground('#4A7C59');
  headerRange.setFontColor('#FFFFFF');
  headerRange.setFontWeight('bold');
  headerRange.setHorizontalAlignment('center');
  
  // Set column widths
  sheet.setColumnWidth(1, 150); // Timestamp
  sheet.setColumnWidth(2, 80);  // Language
  sheet.setColumnWidth(3, 150); // Name
  sheet.setColumnWidth(4, 200); // Email
  sheet.setColumnWidth(5, 150); // Submission_ID
  for (let i = 6; i <= 14; i++) {
    sheet.setColumnWidth(i, 250); // Questions
  }
  sheet.setColumnWidth(15, 120); // IP_Address
  
  // Freeze header row
  sheet.setFrozenRows(1);
  
  // Add data validation for Language column
  const languageRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(['ar', 'en', 'fr'], true)
    .build();
  sheet.getRange(2, 2, 1000, 1).setDataValidation(languageRule);
}

function createFullForumSheet(ss) {
  // Delete existing sheet if it exists
  let sheet = ss.getSheetByName('Full Forum Survey');
  if (sheet) {
    ss.deleteSheet(sheet);
  }
  
  // Create new sheet
  sheet = ss.insertSheet('Full Forum Survey');
  
  // Set up headers
  const headers = [
    'Timestamp',
    'Language',
    'Name',
    'Email',
    'Submission_ID',
    'Q1_Professional_Role',
    'Q2_Region',
    'Q3_Institution_Size',
    'Q4_Session1_Rating',
    'Q4_Session2_Rating',
    'Q4_Session3_Rating',
    'Q4_Session4_Rating',
    'Q5_Speaker_Diversity',
    'Q6_Recommendations_Specificity',
    'Q7_Recommendations_Origin',
    'Q8_Most_Impactful_Recommendation',
    'Q9_Timing_Rating',
    'Q9_Language_Access_Rating',
    'Q9_Materials_Rating',
    'Q10_Overall_Experience',
    'Q11_Next_Edition_Topic',
    'Q12_Forum_Duration',
    'Q13_Key_Change_Suggestion',
    'Q14_Additional_Comments',
    'IP_Address'
  ];
  
  // Write headers
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // Format header row
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setBackground('#8B4367');
  headerRange.setFontColor('#FFFFFF');
  headerRange.setFontWeight('bold');
  headerRange.setHorizontalAlignment('center');
  
  // Set column widths
  sheet.setColumnWidth(1, 150); // Timestamp
  sheet.setColumnWidth(2, 80);  // Language
  sheet.setColumnWidth(3, 150); // Name
  sheet.setColumnWidth(4, 200); // Email
  sheet.setColumnWidth(5, 150); // Submission_ID
  for (let i = 6; i <= 24; i++) {
    sheet.setColumnWidth(i, 250); // Questions
  }
  sheet.setColumnWidth(25, 120); // IP_Address
  
  // Freeze header row
  sheet.setFrozenRows(1);
  
  // Add data validation for Language column
  const languageRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(['ar', 'en', 'fr'], true)
    .build();
  sheet.getRange(2, 2, 1000, 1).setDataValidation(languageRule);
  
  // Add data validation for rating columns (1-5)
  const ratingRule = SpreadsheetApp.newDataValidation()
    .requireNumberBetween(1, 5)
    .build();
  sheet.getRange(2, 9, 1000, 4).setDataValidation(ratingRule); // Q4 ratings
  
  // Add data validation for Q9 ratings (1-4)
  const rating4Rule = SpreadsheetApp.newDataValidation()
    .requireNumberBetween(1, 4)
    .build();
  sheet.getRange(2, 17, 1000, 3).setDataValidation(rating4Rule); // Q9 ratings
}

/**
 * Create a menu when the spreadsheet opens
 */
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('Survey Setup')
    .addItem('Create Survey Sheets', 'setupSurveySheets')
    .addSeparator()
    .addItem('Deploy Web App', 'showDeployInstructions')
    .addToUi();
}

function showDeployInstructions() {
  const ui = SpreadsheetApp.getUi();
  ui.alert(
    'Deploy Web App Instructions',
    'To receive survey data:\n\n' +
    '1. Click "Deploy" > "New deployment"\n' +
    '2. Click gear icon > Select "Web app"\n' +
    '3. Description: "Survey Data Receiver"\n' +
    '4. Execute as: "Me"\n' +
    '5. Who has access: "Anyone"\n' +
    '6. Click "Deploy"\n' +
    '7. Copy the Web App URL\n' +
    '8. Use this URL in your survey website code',
    ui.ButtonSet.OK
  );
}
