import { test, expect } from '@playwright/test';

test.describe('Addition Module', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://testsheepnz.github.io/BasicCalculator.html');
    // Đảm bảo chọn build Prototype để calculator hoạt động chính xác nhất
    await page.locator('#selectBuild').selectOption('0'); 
  });

  test('TC-ADDITION-001: Addition with positive integer numbers', async ({ page }) => {
    await page.locator('#number1Field').fill('15');
    await page.locator('#number2Field').fill('25');
    await page.locator('#selectOperationDropdown').selectOption('0');
    await page.locator('#calculateButton').click();
    await expect(page.locator('#numberAnswerField')).toHaveValue('40');
  });

  test('TC-ADDITION-002: Addition with negative numbers', async ({ page }) => {
    await page.locator('#number1Field').fill('-10');
    await page.locator('#number2Field').fill('-5');
    await page.locator('#selectOperationDropdown').selectOption('0');
    await page.locator('#calculateButton').click();
    await expect(page.locator('#numberAnswerField')).toHaveValue('-15');
  });

  test('TC-ADDITION-003: Addition with a positive and a negative number', async ({ page }) => {
    await page.locator('#number1Field').fill('20');
    await page.locator('#number2Field').fill('-8');
    await page.locator('#selectOperationDropdown').selectOption('0');
    await page.locator('#calculateButton').click();
    await expect(page.locator('#numberAnswerField')).toHaveValue('12');
  });

  test('TC-ADDITION-004: Addition with zero', async ({ page }) => {
    await page.locator('#number1Field').fill('0');
    await page.locator('#number2Field').fill('50');
    await page.locator('#selectOperationDropdown').selectOption('0');
    await page.locator('#calculateButton').click();
    await expect(page.locator('#numberAnswerField')).toHaveValue('50');
  });

  test('TC-ADDITION-005: Addition with decimal numbers', async ({ page }) => {
    await page.locator('#number1Field').fill('10.5');
    await page.locator('#number2Field').fill('4.2');
    await page.locator('#selectOperationDropdown').selectOption('0');
    await page.locator('#calculateButton').click();
    await expect(page.locator('#numberAnswerField')).toHaveValue('14.7');
  });

  test('TC-ADDITION-006: Addition with decimal numbers and Integers only option', async ({ page }) => {
    await page.locator('#number1Field').fill('10.5');
    await page.locator('#number2Field').fill('4.2');
    await page.locator('#selectOperationDropdown').selectOption('0');
    await page.locator('#integerSelect').check();
    await page.locator('#calculateButton').click();
    await expect(page.locator('#numberAnswerField')).toHaveValue('14');
  });

  test('TC-ADDITION-007: Validation error for non-numeric input in Number 1', async ({ page }) => {
    await page.locator('#number1Field').fill('abc');
    await page.locator('#number2Field').fill('5');
    await page.locator('#selectOperationDropdown').selectOption('0');
    await page.locator('#calculateButton').click();
    await expect(page.locator('#errorMsgField')).toHaveText('Number 1 is not a number');
  });

  test('TC-ADDITION-008: Validation error for non-numeric input in Number 2', async ({ page }) => {
    await page.locator('#number1Field').fill('5');
    await page.locator('#number2Field').fill('xyz');
    await page.locator('#selectOperationDropdown').selectOption('0');
    await page.locator('#calculateButton').click();
    await expect(page.locator('#errorMsgField')).toHaveText('Number 2 is not a number');
  });

  test('TC-ADDITION-009: Validation error for empty input in Number 1', async ({ page }) => {
    await page.locator('#number1Field').fill('');
    await page.locator('#number2Field').fill('10');
    await page.locator('#selectOperationDropdown').selectOption('0');
    await page.locator('#calculateButton').click();
    await expect(page.locator('#errorMsgField')).toHaveText('Number 1 is not a number');
  });

  test('TC-ADDITION-010: Validation error for empty input in Number 2', async ({ page }) => {
    await page.locator('#number1Field').fill('15');
    await page.locator('#number2Field').fill('');
    await page.locator('#selectOperationDropdown').selectOption('0');
    await page.locator('#calculateButton').click();
    await expect(page.locator('#errorMsgField')).toHaveText('Number 2 is not a number');
  });

  test('TC-ADDITION-011: Addition with maximum length valid numbers (10 digits)', async ({ page }) => {
    await page.locator('#number1Field').fill('9999999999');
    await page.locator('#number2Field').fill('1');
    await page.locator('#selectOperationDropdown').selectOption('0');
    await page.locator('#calculateButton').click();
    await expect(page.locator('#numberAnswerField')).toHaveValue('10000000000');
  });

  test('TC-ADDITION-012: Addition with maximum length negative numbers', async ({ page }) => {
    await page.locator('#number1Field').fill('-999999999');
    await page.locator('#number2Field').fill('-1');
    await page.locator('#selectOperationDropdown').selectOption('0');
    await page.locator('#calculateButton').click();
    await expect(page.locator('#numberAnswerField')).toHaveValue('-1000000000');
  });

  test('TC-ADDITION-013: Addition with decimals missing leading zero', async ({ page }) => {
    await page.locator('#number1Field').fill('.5');
    await page.locator('#number2Field').fill('.25');
    await page.locator('#selectOperationDropdown').selectOption('0');
    await page.locator('#calculateButton').click();
    await expect(page.locator('#numberAnswerField')).toHaveValue('0.75');
  });

  test('TC-ADDITION-014: Addition with inputs containing leading whitespace', async ({ page }) => {
    await page.locator('#number1Field').fill('  15');
    await page.locator('#number2Field').fill('   25');
    await page.locator('#selectOperationDropdown').selectOption('0');
    await page.locator('#calculateButton').click();
    await expect(page.locator('#numberAnswerField')).toHaveValue('40');
  });

  test('TC-ADDITION-015: Addition with inputs containing trailing whitespace', async ({ page }) => {
    await page.locator('#number1Field').fill('15  ');
    await page.locator('#number2Field').fill('25   ');
    await page.locator('#selectOperationDropdown').selectOption('0');
    await page.locator('#calculateButton').click();
    await expect(page.locator('#numberAnswerField')).toHaveValue('40');
  });

  test('TC-ADDITION-016: Validation error for whitespace-only input', async ({ page }) => {
    await page.locator('#number1Field').fill('   ');
    await page.locator('#number2Field').fill('10');
    await page.locator('#selectOperationDropdown').selectOption('0');
    await page.locator('#calculateButton').click();
    await expect(page.locator('#errorMsgField')).toHaveText('Number 1 is not a number');
  });

  test('TC-ADDITION-017: Validation error for multiple decimal points', async ({ page }) => {
    await page.locator('#number1Field').fill('5.5.5');
    await page.locator('#number2Field').fill('10');
    await page.locator('#selectOperationDropdown').selectOption('0');
    await page.locator('#calculateButton').click();
    await expect(page.locator('#errorMsgField')).toHaveText('Number 1 is not a number');
  });

  test('TC-ADDITION-018: Addition with very small decimal numbers', async ({ page }) => {
    await page.locator('#number1Field').fill('0.00000001');
    await page.locator('#number2Field').fill('0.00000002');
    await page.locator('#selectOperationDropdown').selectOption('0');
    await page.locator('#calculateButton').click();
    await expect(page.locator('#numberAnswerField')).toHaveValue('0.00000003');
  });

  test('TC-ADDITION-019: Addition with combination of negative and decimal numbers', async ({ page }) => {
    await page.locator('#number1Field').fill('-5.5');
    await page.locator('#number2Field').fill('2.3');
    await page.locator('#selectOperationDropdown').selectOption('0');
    await page.locator('#calculateButton').click();
    await expect(page.locator('#numberAnswerField')).toHaveValue('-3.2');
  });

  test('TC-ADDITION-020: Addition with zero and negative numbers', async ({ page }) => {
    await page.locator('#number1Field').fill('0');
    await page.locator('#number2Field').fill('-10');
    await page.locator('#selectOperationDropdown').selectOption('0');
    await page.locator('#calculateButton').click();
    await expect(page.locator('#numberAnswerField')).toHaveValue('-10');
  });

  test('TC-ADDITION-021: Validation error for special characters in Number 1', async ({ page }) => {
    await page.locator('#number1Field').fill('@#$');
    await page.locator('#number2Field').fill('10');
    await page.locator('#selectOperationDropdown').selectOption('0');
    await page.locator('#calculateButton').click();
    await expect(page.locator('#errorMsgField')).toHaveText('Number 1 is not a number');
  });

  test('TC-ADDITION-022: Validation error for special characters in Number 2', async ({ page }) => {
    await page.locator('#number1Field').fill('10');
    await page.locator('#number2Field').fill('*&^');
    await page.locator('#selectOperationDropdown').selectOption('0');
    await page.locator('#calculateButton').click();
    await expect(page.locator('#errorMsgField')).toHaveText('Number 2 is not a number');
  });

  test('TC-ADDITION-023: Validation error when both fields are empty', async ({ page }) => {
    await page.locator('#number1Field').fill('');
    await page.locator('#number2Field').fill('');
    await page.locator('#selectOperationDropdown').selectOption('0');
    await page.locator('#calculateButton').click();
    await expect(page.locator('#errorMsgField')).toHaveText('Number 1 is not a number');
  });

  test('TC-ADDITION-024: Addition with scientific notation format', async ({ page }) => {
    await page.locator('#number1Field').fill('1e3');
    await page.locator('#number2Field').fill('500');
    await page.locator('#selectOperationDropdown').selectOption('0');
    await page.locator('#calculateButton').click();
    await expect(page.locator('#numberAnswerField')).toHaveValue('1500');
  });

  test('TC-ADDITION-025: Clear button functionality', async ({ page }) => {
    await page.locator('#number1Field').fill('10');
    await page.locator('#number2Field').fill('5');
    await page.locator('#selectOperationDropdown').selectOption('0');
    await page.locator('#calculateButton').click();
    await expect(page.locator('#numberAnswerField')).toHaveValue('15');
    
    await page.locator('#clearButton').click();
    await expect(page.locator('#numberAnswerField')).toHaveValue('');
  });

});
