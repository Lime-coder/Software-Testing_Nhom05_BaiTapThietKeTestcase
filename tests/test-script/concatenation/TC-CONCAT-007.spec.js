const { test, expect } = require('@playwright/test');

const URL = 'https://testsheepnz.github.io/BasicCalculator.html#main-body';

test.describe('TC-CONCAT-007: Nối hai chuỗi đạt độ dài biên tối đa (10 ký tự mỗi ô)', () => {
  test('Nối hai chuỗi 10 ký tự "1234567890" và "abcdefghij" trả về chuỗi 20 ký tự "1234567890abcdefghij"', async ({ page }) => {
    // 1. Mở trang Basic Calculator
    await page.goto(URL);

    // 2. Chọn Build là Prototype
    await page.locator('#selectBuild').selectOption({ label: 'Prototype' });

    // 3. Nhập chuỗi 10 ký tự 1234567890 vào ô First number
    const num1Field = page.locator('#number1Field');
    await num1Field.fill('1234567890');
    await expect(num1Field).toHaveValue('1234567890');

    // 4. Nhập chuỗi 10 ký tự abcdefghij vào ô Second number
    const num2Field = page.locator('#number2Field');
    await num2Field.fill('abcdefghij');
    await expect(num2Field).toHaveValue('abcdefghij');

    // 5. Chọn Concatenate tại menu Operation
    await page.locator('#selectOperationDropdown').selectOption({ label: 'Concatenate' });

    // 6. Bấm nút Calculate
    await page.locator('#calculateButton').click();

    // Expected result: Ô Answer hiển thị đầy đủ chuỗi kết quả dài 20 ký tự là 1234567890abcdefghij
    const answerField = page.locator('#numberAnswerField');
    await expect(answerField).toBeVisible();
    await expect(answerField).toHaveValue('1234567890abcdefghij');
    await expect(page.locator('#errorMsgField')).toHaveText('');
  });
});
