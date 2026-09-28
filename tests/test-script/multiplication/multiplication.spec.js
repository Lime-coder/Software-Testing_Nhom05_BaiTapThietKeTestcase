const { test, expect } = require('@playwright/test');
const { multiplicationCases } = require('./multiplication.data');
const { MultiplicationPage } = require('./multiplication.page');

test.describe('Multiplication', () => {
  for (const testCase of multiplicationCases) {
    test(`${testCase.id}: ${testCase.name}`, async ({ page }, testInfo) => {
      testInfo.annotations.push({
        type: 'Test case',
        description: `tests/test-cases/multiplication/${testCase.id}.md`,
      });
      testInfo.annotations.push({ type: 'Owner', description: 'Nguyễn Phúc Hậu' });

      const multiplicationPage = new MultiplicationPage(page);

      await test.step('Mở màn hình Multiplication', async () => {
        await multiplicationPage.goto();
      });

      await test.step('Nhập dữ liệu và thực hiện phép nhân', async () => {
        await multiplicationPage.multiply(testCase);
      });

      await test.step('Kiểm tra kết quả', async () => {
        await multiplicationPage.expectOutput(testCase.expected);
      });
    });
  }

  test('TC-MUL-021: Nút Clear khả dụng khi chọn build 5', async ({ page }) => {
    const multiplicationPage = new MultiplicationPage(page);

    await multiplicationPage.goto('5');

    await expect(multiplicationPage.clearButton).toBeEnabled();
  });

  test('TC-MUL-022: Nút Clear khả dụng sau khi chuyển sang build 5', async ({ page }) => {
    const multiplicationPage = new MultiplicationPage(page);

    await multiplicationPage.goto('Prototype');
    await multiplicationPage.multiply({ first: '5', second: '4', integerOnly: false });
    await multiplicationPage.expectOutput('20');
    await multiplicationPage.selectBuild('5');

    await expect(multiplicationPage.clearButton).toBeEnabled();
    await multiplicationPage.clear();
    await expect(multiplicationPage.result).toHaveValue('');
  });

  test('TC-MUL-023: Clear xóa kết quả và đặt lại Integer Only', async ({ page }) => {
    const multiplicationPage = new MultiplicationPage(page);

    await multiplicationPage.goto('5');
    await multiplicationPage.multiply({ first: '2.5', second: '3', integerOnly: true });
    await multiplicationPage.expectOutput('7');
    await expect(multiplicationPage.clearButton).toBeEnabled();
    await multiplicationPage.clear();

    await expect(multiplicationPage.result).toHaveValue('');
    await expect(multiplicationPage.integerOnlyCheckbox).not.toBeChecked();
  });
});
