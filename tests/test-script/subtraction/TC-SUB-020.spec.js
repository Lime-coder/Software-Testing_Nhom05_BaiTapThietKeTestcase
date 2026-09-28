const { test } = require('@playwright/test');
const { calculateSubtraction, expectValidationError } = require('./subtraction.helpers');

test('TC-SUB-020: Special characters are rejected', async ({ page }) => {
  await calculateSubtraction(page, {
    first: '@#$%',
    second: '&*()',
  });

  await expectValidationError(page, /Number 1 is not a number|invalid/i);
});
