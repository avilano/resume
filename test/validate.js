const fs = require('fs');
const path = require('path');

console.log('--- Running Resume Validation Tests ---');

// 1. Check resume.json exists and is valid JSON
const jsonPath = path.join(__dirname, '..', 'resume.json');
if (!fs.existsSync(jsonPath)) {
  console.error('FAIL: resume.json not found');
  process.exit(1);
}

let resume;
try {
  resume = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  console.log('✓ resume.json is valid JSON');
} catch (err) {
  console.error('FAIL: resume.json parsing error:', err.message);
  process.exit(1);
}

// 2. Validate basics
if (!resume.basics || !resume.basics.name || !resume.basics.email) {
  console.error('FAIL: resume.basics is missing required attributes');
  process.exit(1);
}
console.log(`✓ Basics valid for: ${resume.basics.name} (${resume.basics.label})`);

// 3. Validate work experience
if (!Array.isArray(resume.work) || resume.work.length === 0) {
  console.error('FAIL: resume.work is empty or not an array');
  process.exit(1);
}
console.log(`✓ Work history contains ${resume.work.length} roles`);

// 4. Validate skills
if (!Array.isArray(resume.skills) || resume.skills.length === 0) {
  console.error('FAIL: resume.skills is empty');
  process.exit(1);
}
console.log(`✓ Technical skills categorized in ${resume.skills.length} domains`);

// 5. Validate projects (Sentinela)
if (!Array.isArray(resume.projects) || resume.projects.length === 0) {
  console.error('FAIL: resume.projects is empty');
  process.exit(1);
}
console.log(`✓ Projects verified: ${resume.projects.map(p => p.name).join(', ')}`);

// 6. Validate PDF presence
const pdfPath = path.join(__dirname, '..', 'Alberto_Vilano_Resume.pdf');
const aliasPdfPath = path.join(__dirname, '..', 'resume.pdf');
if (fs.existsSync(pdfPath) && fs.existsSync(aliasPdfPath)) {
  console.log('✓ PDF resume assets exist');
} else {
  console.error('FAIL: PDF resume asset missing');
  process.exit(1);
}

console.log('--- All Resume Validation Tests Passed! ---');
