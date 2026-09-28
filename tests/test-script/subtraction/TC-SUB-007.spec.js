const { test } = require('@playwright/test');
const { calculateSubtraction, expectAnswer } = require('./subtraction.helpers');

test('TC-SUB-007: Subtract a positive integer from a negative integer', async ({ page }) => {
  await calculateSubtraction(page, {
    first: '-30',
    second: '20',
    integersOnly: false,
  });

  await expectAnswer(page, '-50');
});
