const { test, expect } = require('@playwright/test');
const { calculateSubtraction, expectAnswerMatching, selectors } = require('./subtraction.helpers');

test('TC-SUB-013: Decimals are displayed as an integer when integers only is enabled', async ({ page }) => {
  await calculateSubtraction(page, {
    first: '15.8',
    second: '5.2',
    integersOnly: true,
  });

  await expectAnswerMatching(page, /^(10|11)$/);
  await expect(page.locator(selectors.answer)).not.toHaveValue(/\\./);
});

