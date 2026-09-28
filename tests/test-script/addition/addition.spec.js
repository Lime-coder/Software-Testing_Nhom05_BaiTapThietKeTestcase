const { test, expect } = require('@playwright/test');
const { additionCases } = require('./addition.data');
const { AdditionPage } = require('./addition.page');

test.describe('Addition', () => {
  for (const testCase of additionCases) {
    test(`${testCase.id}: ${testCase.name}`, async ({ page }, testInfo) => {
      testInfo.annotations.push({
        type: 'Test case',
        description: `tests/test-cases/addition/${testCase.id}.md`,
      });
      testInfo.annotations.push({ type: 'Owner', description: 'Hiep Tran Dai' });

      const additionPage = new AdditionPage(page);

      await test.step('Mở màn hình Addition', async () => {
        await additionPage.goto();
      });

      await test.step('Nhập dữ liệu và thực hiện phép cộng', async () => {
        await additionPage.add(testCase);
      });

      await test.step('Kiểm tra kết quả', async () => {
        await additionPage.expectOutput(testCase.expected);
      });
    });
  }

  test('TC-ADDITION-025: Clear button functionality', async ({ page }, testInfo) => {
    testInfo.annotations.push({
      type: 'Test case',
      description: `tests/test-cases/addition/TC-ADDITION-025.md`,
    });
    testInfo.annotations.push({ type: 'Owner', description: 'Hiep Tran Dai' });

    const additionPage = new AdditionPage(page);

    await additionPage.goto('0');
    await additionPage.add({ first: '10', second: '5', integerOnly: false });
    await additionPage.expectOutput('15');
    
    await expect(additionPage.clearButton).toBeEnabled();
    await additionPage.clear();
    
    await expect(additionPage.result).toHaveValue('');
    await expect(additionPage.errorMessage).toHaveText('');
    await expect(additionPage.integerOnlyCheckbox).not.toBeChecked();
  });
});
