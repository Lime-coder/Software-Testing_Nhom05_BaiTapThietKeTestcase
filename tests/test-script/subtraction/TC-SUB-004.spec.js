const { test } = require('@playwright/test');
const { calculateSubtraction, expectAnswer } = require('./subtraction.helpers');

test('TC-SUB-004: Subtract zero from a positive integer', async ({ page }) => {
  await calculateSubtraction(page, {
    first: '88',
    second: '0',
    integersOnly: false,
  });

  await expectAnswer(page, '88');
});
