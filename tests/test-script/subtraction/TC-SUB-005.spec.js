const { test } = require('@playwright/test');
const { calculateSubtraction, expectAnswer } = require('./subtraction.helpers');

test('TC-SUB-005: Subtract a positive integer from zero', async ({ page }) => {
  await calculateSubtraction(page, {
    first: '0',
    second: '45',
    integersOnly: false,
  });

  await expectAnswer(page, '-45');
});
