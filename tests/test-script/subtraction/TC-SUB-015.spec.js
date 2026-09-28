const { test } = require('@playwright/test');
const { calculateSubtraction, expectValidationError } = require('./subtraction.helpers');

test('TC-SUB-015: Empty first number is rejected', async ({ page }) => {
  await calculateSubtraction(page, {
    first: '(empty)',
    second: '20',
  });

  await expectValidationError(page, /Number 1 is not a number|valid|required|input/i);
});
