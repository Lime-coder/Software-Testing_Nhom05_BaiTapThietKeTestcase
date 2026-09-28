const { test, expect } = require('@playwright/test');

const URL = 'https://testsheepnz.github.io/BasicCalculator.html#main-body';

test.describe('TC-CONCAT-009: Kiểm tra tự động ẩn và hủy chọn "Integers only" khi chọn phép tính Concatenate', () => {
  test('Tự động ẩn và bỏ chọn "Integers only" khi chuyển từ Add sang Concatenate, giữ nguyên phần thập phân', async ({ page }) => {
    // 1. Mở trang Basic Calculator với Operation mặc định là Add
    await page.goto(URL);
    await page.locator('#selectBuild').selectOption({ label: 'Prototype' });
    await expect(page.locator('#selectOperationDropdown')).toHaveValue('0'); // '0' = Add

    // 2. Tích chọn vào ô checkbox Integers only
    const integerCheckbox = page.locator('#integerSelect');
    const integerLabel = page.locator('#intSelectionLabel');
    await integerCheckbox.check();
    await expect(integerCheckbox).toBeChecked();

    // 3. Nhập 12.34 vào ô First number và 56.78 vào ô Second number
    await page.locator('#number1Field').fill('12.34');
    await page.locator('#number2Field').fill('56.78');

    // 4. Đổi Operation từ Add sang Concatenate
    await page.locator('#selectOperationDropdown').selectOption({ label: 'Concatenate' });

    // 5. Quan sát trạng thái của checkbox Integers only và bấm nút Calculate
    await expect(integerCheckbox).toBeHidden();
    await expect(integerLabel).toBeHidden();
    await expect(integerCheckbox).not.toBeChecked();

    await page.locator('#calculateButton').click();

    // Expected result: Ô Answer hiển thị đầy đủ chuỗi 12.3456.78 (không bị cắt phần thập phân)
    const answerField = page.locator('#numberAnswerField');
    await expect(answerField).toBeVisible();
    await expect(answerField).toHaveValue('12.3456.78');
  });
});
