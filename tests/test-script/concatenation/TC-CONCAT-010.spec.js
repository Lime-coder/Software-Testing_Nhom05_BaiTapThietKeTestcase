const { test, expect } = require('@playwright/test');

const URL = 'https://testsheepnz.github.io/BasicCalculator.html#main-body';

test.describe('TC-CONCAT-010: Nối hai chuỗi có chứa ký tự khoảng trắng (Whitespace)', () => {
  test('Nối "Hello " và " World" giữ nguyên khoảng trắng trả về "Hello  World"', async ({ page }) => {
    // 1. Mở trang Basic Calculator
    await page.goto(URL);

    // 2. Chọn Build là Prototype
    await page.locator('#selectBuild').selectOption({ label: 'Prototype' });

    // 3. Nhập "Hello " (kèm 1 dấu cách ở cuối) vào ô First number
    await page.locator('#number1Field').fill('Hello ');

    // 4. Nhập " World" (kèm 1 dấu cách ở đầu) vào ô Second number
    await page.locator('#number2Field').fill(' World');

    // 5. Chọn Concatenate tại menu Operation
    await page.locator('#selectOperationDropdown').selectOption({ label: 'Concatenate' });

    // 6. Bấm nút Calculate
    await page.locator('#calculateButton').click();

    // Expected result: Giữ nguyên các ký tự khoảng trắng và hiển thị "Hello  World" tại ô Answer
    const answerField = page.locator('#numberAnswerField');
    await expect(answerField).toBeVisible();
    await expect(answerField).toHaveValue('Hello  World');
    await expect(page.locator('#errorMsgField')).toHaveText('');
  });
});
