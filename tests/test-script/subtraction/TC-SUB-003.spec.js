const { test } = require('@playwright/test');
const { calculateSubtraction, expectAnswer } = require('./subtraction.helpers');

test('TC-SUB-003: Subtract two equal positive integers', async ({ page }) => {
  await calculateSubtraction(page, {
    first: '100',
    second: '100',
    integersOnly: false,
  });

  await expectAnswer(page, '0');
});
