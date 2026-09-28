const { test } = require('@playwright/test');
const { calculateSubtraction, expectAnswer } = require('./subtraction.helpers');

test('TC-SUB-014: Subtract integers with integers only enabled', async ({ page }) => {
  await calculateSubtraction(page, {
    first: '50',
    second: '18',
    integersOnly: true,
  });

  await expectAnswer(page, '32');
});
