const { test } = require('@playwright/test');
const { calculateSubtraction, expectAnswer } = require('./subtraction.helpers');

test('TC-SUB-011: Subtract a positive decimal from a negative decimal', async ({ page }) => {
  await calculateSubtraction(page, {
    first: '-12.4',
    second: '8.6',
    integersOnly: false,
  });

  await expectAnswer(page, '-21');
});
