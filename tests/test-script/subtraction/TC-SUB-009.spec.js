const { test } = require('@playwright/test');
const { calculateSubtraction, expectAnswer } = require('./subtraction.helpers');

test('TC-SUB-009: Subtract two negative integers', async ({ page }) => {
  await calculateSubtraction(page, {
    first: '-15',
    second: '-35',
    integersOnly: false,
  });

  await expectAnswer(page, '20');
});
