#!/usr/bin/env node

/**
 * Alberto E. Vilano Reyna - Terminal Resume & Business Card
 * 
 * Usage:
 *   npx avilano-resume
 *   node bin/resume.js [--all|--skills|--experience|--json]
 */

const fs = require('fs');
const path = require('path');

// ANSI escape codes for styling without external dependencies
const style = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  italic: '\x1b[3m',
  underline: '\x1b[4m',
  
  // Colors
  cyan: '\x1b[36m',
  brightCyan: '\x1b[96m',
  green: '\x1b[32m',
  brightGreen: '\x1b[92m',
  yellow: '\x1b[33m',
  brightYellow: '\x1b[93m',
  blue: '\x1b[34m',
  brightBlue: '\x1b[94m',
  magenta: '\x1b[35m',
  white: '\x1b[37m',
  gray: '\x1b[90m',
  
  // Backgrounds
  bgCyan: '\x1b[46m\x1b[30m',
  bgBlue: '\x1b[44m\x1b[37m',
  bgDark: '\x1b[100m\x1b[37m'
};

const args = process.argv.slice(2);
const flag = args[0] ? args[0].toLowerCase() : '';

const resumePath = path.join(__dirname, '..', 'resume.json');
let resumeData = null;

try {
  if (fs.existsSync(resumePath)) {
    resumeData = JSON.parse(fs.readFileSync(resumePath, 'utf8'));
  }
} catch (e) {
  // fallback to inline data if file read fails
}

if (flag === '--json') {
  if (resumeData) {
    console.log(JSON.stringify(resumeData, null, 2));
  } else {
    console.error('resume.json not found');
  }
  process.exit(0);
}

function printHeader() {
  const line = '─'.repeat(74);
  console.log(`${style.cyan}╭${line}╮${style.reset}`);
  console.log(`${style.cyan}│${style.reset}  ${style.bold}${style.white}ALBERTO E. VILANO REYNA${style.reset}${' '.repeat(49)}${style.cyan}│${style.reset}`);
  console.log(`${style.cyan}│${style.reset}  ${style.brightGreen}Senior QA Automation Engineer | AI Test Architecture${style.reset}${' '.repeat(20)}${style.cyan}│${style.reset}`);
  console.log(`${style.cyan}├${line}┤${style.reset}`);
  console.log(`${style.cyan}│${style.reset}  ${style.yellow}📍 Location:${style.reset} Mexico (Remote)      ${style.yellow}🌐 Web:${style.reset} https://avilano.github.io/resume  ${style.cyan}│${style.reset}`);
  console.log(`${style.cyan}│${style.reset}  ${style.yellow}✉️  Email:${style.reset}    vira0092@gmail.com    ${style.yellow}💼 In:${style.reset}  linkedin.com/in/avilano           ${style.cyan}│${style.reset}`);
  console.log(`${style.cyan}│${style.reset}  ${style.yellow}🐙 GitHub:${style.reset}   github.com/avilano    ${style.yellow}🗣️  Lang:${style.reset} Spanish (Native) | English (C2)   ${style.cyan}│${style.reset}`);
  console.log(`${style.cyan}╰${line}╯${style.reset}`);
}

function printSummary() {
  console.log(`\n${style.bold}${style.brightBlue}■ PROFESSIONAL SUMMARY${style.reset}`);
  console.log(`${style.dim}────────────────────────────────────────────────────────────────────────────${style.reset}`);
  console.log(
    `Senior QA Automation Engineer and SDET wizard with ${style.bold}9+ years${style.reset} architecting\n` +
    `production-grade test suites, developer tooling, and automated quality gates\n` +
    `across high-reliability platforms. Proven track record leading squad quality\n` +
    `strategy, pairing with product engineers on TDD and testability, and executing\n` +
    `large-scale framework migrations (${style.green}migrating 200+ specs to Playwright${style.reset}).\n` +
    `Hands-on in backend/API automation (${style.yellow}Java, TypeScript, Python${style.reset}), mobile verification\n` +
    `(${style.yellow}Appium${style.reset}), and AI-driven quality engineering (${style.brightCyan}custom MCP servers connecting\n` +
    `Atlassian Zephyr, automated spec generation${style.reset}). Experienced in production\n` +
    `observability, log analysis, and incident triage using Elasticsearch & New Relic.`
  );
}

function printSkills() {
  console.log(`\n${style.bold}${style.brightBlue}■ CORE TECHNICAL COMPETENCIES${style.reset}`);
  console.log(`${style.dim}────────────────────────────────────────────────────────────────────────────${style.reset}`);
  
  const categories = [
    {
      title: 'AI Tools & Agent Orchestration',
      items: ['Claude Code', 'Cursor IDE', 'Gemini', 'Agent Orchestration', 'Agent Skills (SKILL.md)', 'MCP Servers', 'Model Routing', 'LLM Evals', 'Synthetic Test Data']
    },
    {
      title: 'Automation & Mobile',
      items: ['Playwright', 'Cypress', 'Appium', 'Selenium WebDriver', 'Cucumber (BDD)', 'Grafana K6', 'Component & Visual Testing']
    },
    {
      title: 'Stack & Languages',
      items: ['TypeScript', 'JavaScript (ES6+)', 'Python', 'SQL', 'Java (Spring Boot fundamentals)', 'Angular basics', 'Bash/Shell']
    },
    {
      title: 'API & Performance Testing',
      items: ['RESTful APIs', 'Microservices', 'Postman', 'Bruno', 'JMeter', 'Charles Proxy', 'Contract & Schema Validation']
    },
    {
      title: 'CI/CD, Cloud & Observability',
      items: ['GitHub Actions', 'Jenkins', 'Docker', 'AWS (CloudWatch, S3, EC2)', 'Datadog', 'New Relic', 'RCA', 'Triage Dashboards']
    }
  ];

  categories.forEach(cat => {
    console.log(`  ${style.brightGreen}▸ ${style.bold}${cat.title}:${style.reset}`);
    console.log(`    ${style.gray}${cat.items.join('  •  ')}${style.reset}\n`);
  });
}

function printExperience() {
  console.log(`${style.bold}${style.brightBlue}■ PROFESSIONAL EXPERIENCE${style.reset}`);
  console.log(`${style.dim}────────────────────────────────────────────────────────────────────────────${style.reset}`);

  const roles = [
    {
      company: 'Coursedog, Inc.',
      role: 'Senior Software Development Engineer in Test',
      period: 'Aug 2021 – Present | Remote',
      bullets: [
        `${style.bold}Framework Modernization & Stability:${style.reset} Led migration of 200+ specs from Cypress to Playwright; implemented PR-level smoke gates across 1,200+ tests, reducing build flakiness by >20% and cutting CI execution cycle times by 30%.`,
        `${style.bold}Team AI Enablement & QA Agents:${style.reset} Authored and managed specialized QA AI Skills and agents for the engineering org to enforce code review conventions, automate PR quality gates, identify coverage gaps, and accelerate Playwright spec authoring and migration.`,
        `${style.bold}Incident Response & Observability:${style.reset} Troubleshot production anomalies, conducted postmortem root-cause analyses (RCA), and analyzed distributed logs and metrics in Datadog and AWS CloudWatch.`,
        `${style.bold}A11y Standards & Squad Enablement:${style.reset} Spearheaded org-wide accessibility (a11y) testing conventions and WCAG guidelines; paired with feature squads on TDD and selector strategies, establishing automated a11y CI release gates.`,
        `${style.bold}Visual Testing & Tooling Enablement:${style.reset} Drove end-to-end evaluation and rollout of visual testing frameworks (Applitools), leading tooling research, POCs, conventions, and org-wide documentation.`
      ]
    },
    {
      company: 'Bold.org',
      role: 'QA Engineer',
      period: 'Aug 2021 – Dec 2021 | Remote',
      bullets: [
        `${style.bold}Greenfield Quality Architecture:${style.reset} Designed and deployed an end-to-end automation platform for a fast-growing financial/education application, establishing CI/CD quality gates using GitHub Actions.`,
        `${style.bold}Payment & Wallet Verification:${style.reset} Automated comprehensive regression suites covering payment gateway integrations, user wallet balances, and PostgreSQL transactional state integrity.`,
        `${style.bold}Pipeline Optimization & Triage:${style.reset} Configured concurrent test execution runners in CI/CD, boosting test run reliability and establishing sprint-level automation audits.`
      ]
    },
    {
      company: 'Enroute / Integral Ad Science',
      role: 'Software Development Engineer in Test',
      period: 'Sep 2017 – Aug 2021 | Remote',
      bullets: [
        `${style.bold}Framework Modernization & Architecture:${style.reset} Maintained and expanded custom test automation framework, migrating legacy codebases to Python 3, Java, and Selenium across distributed backend services and ad-measurement pipelines.`,
        `${style.bold}Partner & Integration Testing:${style.reset} Architected automated verification suites covering core data and media integrations with partners including Twitch, Amazon, and Toyota, validating telemetry accuracy.`,
        `${style.bold}Cloud & CI/CD Infrastructure:${style.reset} Spearheaded decommissioning of legacy on-prem test infrastructure by containerizing runners in Docker and transitioning CI/CD pipelines to AWS via Jenkins.`,
        `${style.bold}Engineering Culture & Mentorship:${style.reset} Held daily pair-programming sessions with dev pods to debug and write tests, championed shift-left testing, and mentored engineering interns.`
      ]
    }
  ];

  roles.forEach(r => {
    console.log(`  ${style.brightCyan}${style.bold}${r.role}${style.reset}  ${style.gray}—${style.reset}  ${style.white}${style.bold}${r.company}${style.reset}`);
    console.log(`  ${style.dim}${r.period}${style.reset}`);
    r.bullets.forEach(b => {
      console.log(`   ${style.yellow}•${style.reset} ${b}`);
    });
    console.log('');
  });
}

function printEducation() {
  console.log(`${style.bold}${style.brightBlue}■ EDUCATION & CREDENTIALS${style.reset}`);
  console.log(`${style.dim}────────────────────────────────────────────────────────────────────────────${style.reset}`);
  console.log(`  ${style.bold}The University of Texas Rio Grande Valley${style.reset}`);
  console.log(`  Bachelor of Science in Engineering Physics\n`);
  console.log(`  ${style.brightGreen}Certifications & Accreditations:${style.reset}`);
  console.log(`  • ${style.bold}AWS Certified Developer Associate${style.reset}`);
  console.log(`  • ${style.bold}ISTQB Certified Tester (Foundation Level)${style.reset}\n`);
}

function printFooter() {
  console.log(`${style.dim}────────────────────────────────────────────────────────────────────────────${style.reset}`);
  console.log(`${style.gray}Quick commands:${style.reset}`);
  console.log(`  ${style.cyan}node bin/resume.js --all${style.reset}         Full resume view`);
  console.log(`  ${style.cyan}node bin/resume.js --skills${style.reset}      View core competencies`);
  console.log(`  ${style.cyan}node bin/resume.js --experience${style.reset}  View experience details`);
  console.log(`  ${style.cyan}node bin/resume.js --json${style.reset}        Dump machine-readable JSON`);
  console.log(`${style.dim}────────────────────────────────────────────────────────────────────────────${style.reset}\n`);
}

// Router
if (flag === '--skills') {
  printHeader();
  printSkills();
} else if (flag === '--experience') {
  printHeader();
  printExperience();
} else if (flag === '--all') {
  printHeader();
  printSummary();
  printSkills();
  printExperience();
  printEducation();
  printFooter();
} else if (flag === '--help' || flag === '-h') {
  printHeader();
  printFooter();
} else {
  // Default concise interactive card
  printHeader();
  printSummary();
  printSkills();
  printFooter();
}
