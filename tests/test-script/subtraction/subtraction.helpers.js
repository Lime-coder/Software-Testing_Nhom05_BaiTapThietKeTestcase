const { expect } = require('@playwright/test');

const BASE_URL = 'https://testsheepnz.github.io/BasicCalculator.html';

const selectors = {
  build: '[data-testid="selectBuild"]',
  firstNumber: '[data-testid="number1Field"]',
  secondNumber: '[data-testid="number2Field"]',
  operation: '[data-testid="selectOperationDropdown"]',
  calculate: '[data-testid="calculateButton"]',
  answer: '[data-testid="numberAnswerField"]',
  integersOnly: '[data-testid="integerSelect"]',
  errorMessage: '[data-testid="errorMsgField"]',
  clear: '[data-testid="clearButton"]',
};

function normalizeInput(value) {
  if (value === '(empty)') {
    return '';
  }
  if (value === '(spaces)') {
    return '   ';
  }
  return String(value);
}

async function openCalculator(page, build = 'Prototype') {
  await page.goto(BASE_URL);
  await expect(page.locator(selectors.build)).toBeVisible();
  await page.selectOption(selectors.build, { label: String(build) });
}

async function setIntegersOnly(page, checked) {
  const checkbox = page.locator(selectors.integersOnly);
  if (checked) {
    await checkbox.check();
  } else {
    await checkbox.uncheck();
  }
}

async function fillCalculator(page, { build = 'Prototype', first, second, operation = 'Subtract', integersOnly = false }) {
  await openCalculator(page, build);
  await page.locator(selectors.firstNumber).fill(normalizeInput(first));
  await page.locator(selectors.secondNumber).fill(normalizeInput(second));
  await page.selectOption(selectors.operation, { label: operation });
  await setIntegersOnly(page, integersOnly);
}

async function calculate(page) {
  await page.locator(selectors.calculate).click();
  await expect(page.locator(selectors.calculate)).toBeEnabled();
}

async function calculateSubtraction(page, data) {
  await fillCalculator(page, data);
  await calculate(page);
}

async function expectAnswer(page, expected) {
  await expect(page.locator(selectors.errorMessage)).toHaveText('');
  await expect(page.locator(selectors.answer)).toHaveValue(String(expected));
}

async function expectAnswerMatching(page, pattern) {
  await expect(page.locator(selectors.errorMessage)).toHaveText('');
  await expect(page.locator(selectors.answer)).toHaveValue(pattern);
}

async function expectValidationError(page, pattern) {
  await expect(page.locator(selectors.errorMessage)).toHaveText(pattern);
  await expect(page.locator(selectors.answer)).toHaveValue('');
}

module.exports = {
  BASE_URL,
  selectors,
  openCalculator,
  fillCalculator,
  calculate,
  calculateSubtraction,
  expectAnswer,
  expectAnswerMatching,
  expectValidationError,
};
