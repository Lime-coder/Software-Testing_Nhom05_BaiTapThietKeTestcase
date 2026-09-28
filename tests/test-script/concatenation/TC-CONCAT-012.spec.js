const { test, expect } = require('@playwright/test');

const URL = 'https://testsheepnz.github.io/BasicCalculator.html#main-body';

test.describe('TC-CONCAT-012: Kiểm tra xóa thông báo lỗi cũ và chức năng nút Clear sau khi thực hiện Concatenate', () => {
  test('Xóa lỗi "Number 1 is not a number" khi chuyển sang Concatenate và xóa kết quả khi bấm Clear', async ({ page }) => {
    // 1. Mở trang Basic Calculator và chọn Build là Prototype
    await page.goto(URL);
    await page.locator('#selectBuild').selectOption({ label: 'Prototype' });

    // 2. Nhập abc vào ô First number và 123 vào ô Second number
    await page.locator('#number1Field').fill('abc');
    await page.locator('#number2Field').fill('123');

    // 3. Để Operation là Add và bấm Calculate (hệ thống hiển thị lỗi Number 1 is not a number)
    const operationDropdown = page.locator('#selectOperationDropdown');
    const calculateButton = page.locator('#calculateButton');
    const errorMsgField = page.locator('#errorMsgField');
    const answerField = page.locator('#numberAnswerField');
    const clearButton = page.locator('#clearButton');

    await operationDropdown.selectOption({ label: 'Add' });
    await calculateButton.click();
    await expect(errorMsgField).toHaveText('Number 1 is not a number');

    // 4. Chuyển Operation sang Concatenate và bấm Calculate
    await operationDropdown.selectOption({ label: 'Concatenate' });
    await expect(calculateButton).toBeEnabled();
    await calculateButton.click();

    // Expected result tại bước 4: Thông báo lỗi được xóa bỏ và ô Answer hiển thị abc123
    await expect(answerField).toBeVisible();
    await expect(errorMsgField).toHaveText('');
    await expect(answerField).toHaveValue('abc123');

    // 5. Bấm nút Clear
    await expect(clearButton).toBeEnabled();
    await clearButton.click();

    // Expected result tại bước 5: Ô Answer được xóa trống về "" và không có thông báo lỗi
    await expect(answerField).toHaveValue('');
    await expect(errorMsgField).toHaveText('');
  });
});
