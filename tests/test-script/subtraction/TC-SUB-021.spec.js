const { test } = require('@playwright/test');
const { calculateSubtraction, expectValidationError } = require('./subtraction.helpers');

test('TC-SUB-021: Multiple decimal points are rejected', async ({ page }) => {
  await calculateSubtraction(page, {
    first: '12.3.4',
    second: '5',
  });

  await expectValidationError(page, /Number 1 is not a number|invalid/i);
});
