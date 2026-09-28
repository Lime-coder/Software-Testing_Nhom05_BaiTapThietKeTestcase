const { test, expect } = require('@playwright/test');
const { openCalculator, selectors } = require('./subtraction.helpers');

test('TC-SUB-024: Subtraction is compared across builds 1 through 9', async ({ page }) => {
  for (const build of ['1', '2', '3', '4', '5', '6', '7', '8', '9']) {
    await test.step(`Build ${build}`, async () => {
      await openCalculator(page, build);

      const firstNumber = page.locator(selectors.firstNumber);
      const secondNumber = page.locator(selectors.secondNumber);
      const calculateButton = page.locator(selectors.calculate);
      const answer = page.locator(selectors.answer);
      const errorMessage = page.locator(selectors.errorMessage);

      expect.soft(await firstNumber.isVisible(), `Build ${build} should show First number`).toBeTruthy();
      expect.soft(await secondNumber.isVisible(), `Build ${build} should show Second number`).toBeTruthy();
      expect.soft(await calculateButton.isVisible(), `Build ${build} should show Calculate`).toBeTruthy();

      if (!(await firstNumber.isVisible()) || !(await secondNumber.isVisible()) || !(await calculateButton.isVisible())) {
        return;
      }

      await firstNumber.fill('20');
      await secondNumber.fill('8');
      await page.selectOption(selectors.operation, { label: 'Subtract' });
      const integerCheckbox = page.locator(selectors.integersOnly);
      if (await integerCheckbox.isEnabled()) {
        await integerCheckbox.uncheck();
      }
      await calculateButton.click();
      await expect(calculateButton).toBeEnabled();

      await expect.soft(errorMessage, `Build ${build} should not show an error`).toHaveText('');
      await expect.soft(answer, `Build ${build} should calculate 20 - 8`).toHaveValue('12');
    });
  }
});

