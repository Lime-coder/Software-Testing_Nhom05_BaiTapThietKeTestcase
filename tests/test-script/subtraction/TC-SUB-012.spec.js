const { test } = require('@playwright/test');
const { calculateSubtraction, expectAnswer } = require('./subtraction.helpers');

test('TC-SUB-012: Subtract using a large upper-bound integer', async ({ page }) => {
  await calculateSubtraction(page, {
    first: '999999999',
    second: '1',
    integersOnly: false,
  });

  await expectAnswer(page, '999999998');
});
