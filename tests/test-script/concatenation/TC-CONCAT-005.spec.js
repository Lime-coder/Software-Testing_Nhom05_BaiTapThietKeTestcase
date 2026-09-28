const { test, expect } = require('@playwright/test');

const URL = 'https://testsheepnz.github.io/BasicCalculator.html#main-body';

test.describe('TC-CONCAT-005: Nối khi để trống ô First number và nhập chuỗi vào ô Second number', () => {
  test('Để trống First number và nhập "Test123" vào Second number trả về "Test123"', async ({ page }) => {
    // 1. Mở trang Basic Calculator
    await page.goto(URL);

    // 2. Chọn Build là Prototype
    await page.locator('#selectBuild').selectOption({ label: 'Prototype' });

    // 3. Để trống ô First number
    await page.locator('#number1Field').fill('');

    // 4. Nhập Test123 vào ô Second number
    await page.locator('#number2Field').fill('Test123');

    // 5. Chọn Concatenate tại menu Operation
    await page.locator('#selectOperationDropdown').selectOption({ label: 'Concatenate' });

    // 6. Bấm nút Calculate
    await page.locator('#calculateButton').click();

    // Expected result: Hiển thị Test123 tại ô Answer mà không báo lỗi
    const answerField = page.locator('#numberAnswerField');
    await expect(answerField).toBeVisible();
    await expect(answerField).toHaveValue('Test123');
    await expect(page.locator('#errorMsgField')).toHaveText('');
  });
});
