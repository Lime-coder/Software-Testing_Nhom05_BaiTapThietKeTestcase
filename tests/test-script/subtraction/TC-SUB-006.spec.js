const { test } = require('@playwright/test');
const { calculateSubtraction, expectAnswer } = require('./subtraction.helpers');

test('TC-SUB-006: Subtract zero from zero', async ({ page }) => {
  await calculateSubtraction(page, {
    first: '0',
    second: '0',
    integersOnly: false,
  });

  await expectAnswer(page, '0');
});
