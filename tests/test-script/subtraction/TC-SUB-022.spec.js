const { test } = require('@playwright/test');
const { calculateSubtraction, expectValidationError } = require('./subtraction.helpers');

test('TC-SUB-022: Whitespace first number is rejected', async ({ page }) => {
  await calculateSubtraction(page, {
    first: '(spaces)',
    second: '15',
  });

  await expectValidationError(page, /Number 1 is not a number|valid|empty|input/i);
});
