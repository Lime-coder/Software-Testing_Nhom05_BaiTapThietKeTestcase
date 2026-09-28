const { test, expect } = require('@playwright/test');
const { calculateSubtraction, expectAnswer, selectors } = require('./subtraction.helpers');

test('TC-SUB-023: Clear resets subtraction inputs and answer', async ({ page }) => {
  await calculateSubtraction(page, {
    first: '70',
    second: '30',
  });
  await expectAnswer(page, '40');

  await page.locator(selectors.clear).click();

  await expect(page.locator(selectors.firstNumber)).toHaveValue('');
  await expect(page.locator(selectors.secondNumber)).toHaveValue('');
  await expect(page.locator(selectors.answer)).toHaveValue('');
});
