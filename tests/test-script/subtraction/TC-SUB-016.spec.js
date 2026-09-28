const { test } = require('@playwright/test');
const { calculateSubtraction, expectValidationError } = require('./subtraction.helpers');

test('TC-SUB-016: Empty second number is rejected', async ({ page }) => {
  await calculateSubtraction(page, {
    first: '50',
    second: '(empty)',
  });

  await expectValidationError(page, /Number 2 is not a number|valid|required|input/i);
});
