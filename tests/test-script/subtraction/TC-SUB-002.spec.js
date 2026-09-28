const { test } = require('@playwright/test');
const { calculateSubtraction, expectAnswer } = require('./subtraction.helpers');

test('TC-SUB-002: Subtract two positive integers where first is smaller', async ({ page }) => {
  await calculateSubtraction(page, {
    first: '15',
    second: '40',
    integersOnly: false,
  });

  await expectAnswer(page, '-25');
});
