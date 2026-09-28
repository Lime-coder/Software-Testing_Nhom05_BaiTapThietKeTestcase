const { test, expect } = require('@playwright/test');

const URL = 'https://testsheepnz.github.io/BasicCalculator.html#main-body';

test.describe('TC-CONCAT-004: Nối chuỗi kết hợp chữ, số và ký tự đặc biệt', () => {
  test('Nối chuỗi "User_01@" và "#2026!" trả về "User_01@#2026!"', async ({ page }) => {
    // 1. Mở trang Basic Calculator
    await page.goto(URL);

    // 2. Chọn Build là Prototype
    await page.locator('#selectBuild').selectOption({ label: 'Prototype' });

    // 3. Nhập User_01@ vào ô First number
    await page.locator('#number1Field').fill('User_01@');

    // 4. Nhập #2026! vào ô Second number
    await page.locator('#number2Field').fill('#2026!');

    // 5. Chọn Concatenate tại menu Operation
    await page.locator('#selectOperationDropdown').selectOption({ label: 'Concatenate' });

    // 6. Bấm nút Calculate
    await page.locator('#calculateButton').click();

    // Expected result: Hiển thị User_01@#2026! tại ô Answer và không báo lỗi
    const answerField = page.locator('#numberAnswerField');
    await expect(answerField).toBeVisible();
    await expect(answerField).toHaveValue('User_01@#2026!');
    await expect(page.locator('#errorMsgField')).toHaveText('');
  });
});
