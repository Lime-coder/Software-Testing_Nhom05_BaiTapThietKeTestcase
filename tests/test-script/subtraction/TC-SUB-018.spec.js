const { test } = require('@playwright/test');
const { calculateSubtraction, expectValidationError } = require('./subtraction.helpers');

test('TC-SUB-018: Alphabetic first number is rejected', async ({ page }) => {
  await calculateSubtraction(page, {
    first: 'abc',
    second: '10',
  });

  await expectValidationError(page, /Number 1 is not a number/i);
});
