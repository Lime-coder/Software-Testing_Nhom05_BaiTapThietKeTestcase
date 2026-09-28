const { test } = require('@playwright/test');
const { calculateSubtraction, expectValidationError } = require('./subtraction.helpers');

test('TC-SUB-017: Both empty number fields are rejected', async ({ page }) => {
  await calculateSubtraction(page, {
    first: '(empty)',
    second: '(empty)',
  });

  await expectValidationError(page, /Number 1 is not a number|valid|required|input/i);
});
