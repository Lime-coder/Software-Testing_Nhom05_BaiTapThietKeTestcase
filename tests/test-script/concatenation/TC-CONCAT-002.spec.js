const { test, expect } = require('@playwright/test');

const URL = 'https://testsheepnz.github.io/BasicCalculator.html#main-body';

test.describe('TC-CONCAT-002: Nối hai chuỗi ký tự chữ cái (Alphabetic strings)', () => {
  test('Nối hai chuỗi chữ cái "Hello" và "World" trả về "HelloWorld"', async ({ page }) => {
    // 1. Mở trang Basic Calculator
    await page.goto(URL);

    // 2. Chọn Build là Prototype
    await page.locator('#selectBuild').selectOption({ label: 'Prototype' });

    // 3. Nhập Hello vào ô First number
    await page.locator('#number1Field').fill('Hello');

    // 4. Nhập World vào ô Second number
    await page.locator('#number2Field').fill('World');

    // 5. Chọn Concatenate tại menu Operation
    await page.locator('#selectOperationDropdown').selectOption({ label: 'Concatenate' });

    // 6. Bấm nút Calculate
    await page.locator('#calculateButton').click();

    // Expected result: Hiển thị HelloWorld tại ô Answer, không hiển thị lỗi Number 1/2 is not a number
    const answerField = page.locator('#numberAnswerField');
    await expect(answerField).toBeVisible();
    await expect(answerField).toHaveValue('HelloWorld');
    await expect(page.locator('#errorMsgField')).toHaveText('');
  });
});
