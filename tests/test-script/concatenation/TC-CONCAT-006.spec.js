const { test, expect } = require('@playwright/test');

const URL = 'https://testsheepnz.github.io/BasicCalculator.html#main-body';

test.describe('TC-CONCAT-006: Nối khi để trống cả hai ô dữ liệu đầu vào (Độ dài biên 0 ký tự)', () => {
  test('Để trống cả First number và Second number trả về chuỗi rỗng ""', async ({ page }) => {
    // 1. Mở trang Basic Calculator
    await page.goto(URL);

    // 2. Chọn Build là Prototype
    await page.locator('#selectBuild').selectOption({ label: 'Prototype' });

    // 3. Để trống cả hai ô First number và Second number
    await page.locator('#number1Field').fill('');
    await page.locator('#number2Field').fill('');

    // 4. Chọn Concatenate tại menu Operation
    await page.locator('#selectOperationDropdown').selectOption({ label: 'Concatenate' });

    // 5. Bấm nút Calculate
    await page.locator('#calculateButton').click();

    // Expected result: Hiển thị chuỗi rỗng "" tại ô Answer và không có thông báo lỗi
    const answerField = page.locator('#numberAnswerField');
    await expect(answerField).toBeVisible();
    await expect(answerField).toHaveValue('');
    await expect(page.locator('#errorMsgField')).toHaveText('');
  });
});
