const { test, expect } = require('@playwright/test');

const URL = 'https://testsheepnz.github.io/BasicCalculator.html#main-body';

test.describe('TC-CONCAT-011: Kiểm tra tính thứ tự (không giao hoán) và nối liên tiếp nhiều lần', () => {
  test('Nối "AB" + "CD" ra "ABCD", sau đó đảo thành "CD" + "AB" ra "CDAB"', async ({ page }) => {
    // 1. Mở trang Basic Calculator và chọn Build là Prototype
    await page.goto(URL);
    await page.locator('#selectBuild').selectOption({ label: 'Prototype' });

    // 2. Nhập AB vào First number, CD vào Second number, chọn Operation là Concatenate và bấm Calculate
    const num1Field = page.locator('#number1Field');
    const num2Field = page.locator('#number2Field');
    const calculateButton = page.locator('#calculateButton');
    const answerField = page.locator('#numberAnswerField');

    await num1Field.fill('AB');
    await num2Field.fill('CD');
    await page.locator('#selectOperationDropdown').selectOption({ label: 'Concatenate' });
    await calculateButton.click();

    // 3. Quan sát kết quả lần 1 tại ô Answer
    await expect(answerField).toBeVisible();
    await expect(answerField).toHaveValue('ABCD');

    // Đảm bảo nút Calculate đã được mở khóa sau lần tính thứ nhất
    await expect(calculateButton).toBeEnabled();

    // 4. Sửa First number thành CD, sửa Second number thành AB và bấm Calculate lần 2
    await num1Field.fill('CD');
    await num2Field.fill('AB');
    await calculateButton.click();

    // Expected result lần 2: Ô Answer hiển thị CDAB
    await expect(answerField).toBeVisible();
    await expect(answerField).toHaveValue('CDAB');
    await expect(page.locator('#errorMsgField')).toHaveText('');
  });
});
