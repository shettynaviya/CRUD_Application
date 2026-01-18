/**
 * Google Apps Script Web App bound to Google Sheet
 */

function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('CRUD Web App')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getSheetData() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('DATA');
  const range = sheet.getDataRange();
  const values = range.getValues();

  const validationRulesRaw = sheet.getRange(2, 1, 1, sheet.getLastColumn()).getDataValidations()[0];
  const validationRules = validationRulesRaw.map(rule => {
    if (!rule) return null;
    const criteria = rule.getCriteriaType();
    const args = rule.getCriteriaValues();
    return { criteria, args };
  });

  const processedValues = values.map((row, rowIndex) => {
    return row.map((cellValue, colIndex) => {
      if (rowIndex === 0) {
        return cellValue;
      }

      if (cellValue instanceof Date) {
        const d = cellValue;
        const month = (d.getMonth() + 1).toString().padStart(2, '0');
        const day = d.getDate().toString().padStart(2, '0');
        const year = d.getFullYear();
        return `${month}/${day}/${year}`;
      }
      else if (typeof cellValue === 'boolean') {
        return cellValue;
      }
      else if (typeof cellValue === 'number') {
        return cellValue;
      }
      return cellValue;
    });
  });

  return JSON.stringify(processedValues);
}

/**
 * Helper function to generate the next available ID.
 */
function getNextId() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('DATA');
  const data = sheet.getDataRange().getValues();

  let maxId = 0;

  for (let i = 1; i < data.length; i++) {
    const currentId = data[i][0];

    if (typeof currentId === 'number' && !isNaN(currentId)) {
      if (currentId > maxId) {
        maxId = currentId;
      }
    }
    else if (typeof currentId === 'string' && !isNaN(parseFloat(currentId))) {
      const parsedId = parseFloat(currentId);
      if (parsedId > maxId) {
        maxId = parsedId;
      }
    }
  }

  return maxId + 1;
}

function saveRecord(record) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('DATA');
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];

  if (record.id) {
    // Update existing record
    const data = sheet.getDataRange().getValues();
    for (let i = 1; i < data.length; i++) {
      if (data[i][0] == record.id) {
        const newRow = headers.map(h => record[h] ?? '');
        sheet.getRange(i + 1, 1, 1, headers.length).setValues([newRow]);
        return JSON.stringify('Updated');
      }
    }
  } else {
    // Add new record
    const newId = getNextId();
    record[headers[0]] = newId;

    const newRow = headers.map(h => record[h] ?? '');
    sheet.appendRow(newRow);
    return JSON.stringify('Added');
  }
}

function getValidationRules() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('DATA');
  const validations = sheet.getRange(2, 1, 1, sheet.getLastColumn()).getDataValidations()[0];
  const rules = validations.map(rule => {
    if (!rule) return null;
    const criteria = rule.getCriteriaType();
    const args = rule.getCriteriaValues();
    return { criteria, args };
  });
  return JSON.stringify(rules);
}

function deleteRecord(id) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('DATA');
  const data = sheet.getDataRange().getValues();

  for (let i = 1; i < data.length; i++) {
    if (data[i][0] == id) {
      sheet.deleteRow(i + 1);
      return JSON.stringify('Deleted');
    }
  }
  throw new Error('Record with ID ' + id + ' not found for deletion.');
}