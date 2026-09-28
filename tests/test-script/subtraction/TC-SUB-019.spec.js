const { test } = require('@playwright/test');
const { calculateSubtraction, expectValidationError } = require('./subtraction.helpers');

test('TC-SUB-019: Alphabetic second number is rejected', async ({ page }) => {
  await calculateSubtraction(page, {
    first: '30',
    second: 'xyz',
  });

  await expectValidationError(page, /Number 2 is not a number/i);
});
