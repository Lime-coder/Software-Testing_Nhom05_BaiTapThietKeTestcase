const { test, expect } = require('@playwright/test');

const URL = 'https://testsheepnz.github.io/BasicCalculator.html#main-body';

test.describe('TC-CONCAT-008: Kiểm tra giới hạn nhập vượt quá biên tối đa (11 ký tự) trên các ô đầu vào', () => {
  test('Nhập 11 ký tự vào mỗi ô có maxlength="10", chỉ nhận 10 ký tự đầu và nối thành "1234567890abcdefghij"', async ({ page }) => {
    // 1. Mở trang Basic Calculator
    await page.goto(URL);

    // 2. Chọn Build là Prototype
    await page.locator('#selectBuild').selectOption({ label: 'Prototype' });

    // 3. Nhập chuỗi 11 ký tự 1234567890A vào ô First number (sử dụng pressSequentially để mô phỏng gõ phím kiểm tra maxlength="10")
    const num1Field = page.locator('#number1Field');
    await num1Field.clear();
    await num1Field.pressSequentially('1234567890A');
    await expect(num1Field).toHaveValue('1234567890');

    // 4. Nhập chuỗi 11 ký tự abcdefghijB vào ô Second number
    const num2Field = page.locator('#number2Field');
    await num2Field.clear();
    await num2Field.pressSequentially('abcdefghijB');
    await expect(num2Field).toHaveValue('abcdefghij');

    // 5. Chọn Concatenate tại menu Operation
    await page.locator('#selectOperationDropdown').selectOption({ label: 'Concatenate' });

    // 6. Bấm nút Calculate
    await page.locator('#calculateButton').click();

    // Expected result: Ô Answer hiển thị 1234567890abcdefghij
    const answerField = page.locator('#numberAnswerField');
    await expect(answerField).toBeVisible();
    await expect(answerField).toHaveValue('1234567890abcdefghij');
    await expect(page.locator('#errorMsgField')).toHaveText('');
  });
});
