const { test } = require('@playwright/test');
const { calculateSubtraction, expectAnswer } = require('./subtraction.helpers');

test('TC-SUB-010: Subtract two positive decimal numbers', async ({ page }) => {
  await calculateSubtraction(page, {
    first: '25.75',
    second: '10.25',
    integersOnly: false,
  });

  await expectAnswer(page, '15.5');
});
