const { test, expect } = require('@playwright/test');

const URL = 'https://testsheepnz.github.io/BasicCalculator.html#main-body';

test.describe('TC-CONCAT-001: Nối hai chuỗi số nguyên dương hợp lệ', () => {
  test('Nối hai chuỗi số nguyên dương "12" và "34" trả về "1234"', async ({ page }) => {
    // 1. Mở trang Basic Calculator
    await page.goto(URL);

    // 2. Chọn Build là Prototype
    await page.locator('#selectBuild').selectOption({ label: 'Prototype' });

    // 3. Nhập 12 vào ô First number
    await page.locator('#number1Field').fill('12');

    // 4. Nhập 34 vào ô Second number
    await page.locator('#number2Field').fill('34');

    // 5. Chọn Concatenate tại menu Operation
    await page.locator('#selectOperationDropdown').selectOption({ label: 'Concatenate' });

    // 6. Bấm nút Calculate
    await page.locator('#calculateButton').click();

    // Expected result: Hiển thị kết quả 1234 tại ô Answer và không có thông báo lỗi
    const answerField = page.locator('#numberAnswerField');
    await expect(answerField).toBeVisible();
    await expect(answerField).toHaveValue('1234');
    await expect(page.locator('#errorMsgField')).toHaveText('');
  });
});
