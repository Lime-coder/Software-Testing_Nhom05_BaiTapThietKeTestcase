const { test } = require('@playwright/test');
const { calculateSubtraction, expectAnswer } = require('./subtraction.helpers');

test('TC-SUB-008: Subtract a negative integer from a positive integer', async ({ page }) => {
  await calculateSubtraction(page, {
    first: '50',
    second: '-25',
    integersOnly: false,
  });

  await expectAnswer(page, '75');
});
