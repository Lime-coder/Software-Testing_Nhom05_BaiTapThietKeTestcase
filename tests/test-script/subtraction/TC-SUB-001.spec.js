const { test } = require('@playwright/test');
const { calculateSubtraction, expectAnswer } = require('./subtraction.helpers');

test('TC-SUB-001: Subtract two positive integers where first is greater', async ({ page }) => {
  await calculateSubtraction(page, {
    first: '50',
    second: '20',
    integersOnly: false,
  });

  await expectAnswer(page, '30');
});
