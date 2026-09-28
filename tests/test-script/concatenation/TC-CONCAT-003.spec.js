const { test, expect } = require('@playwright/test');

const URL = 'https://testsheepnz.github.io/BasicCalculator.html#main-body';

test.describe('TC-CONCAT-003: Nối chuỗi số âm và số thập phân', () => {
  test('Nối chuỗi "-12.5" và "3.4" trả về "-12.53.4"', async ({ page }) => {
    // 1. Mở trang Basic Calculator
    await page.goto(URL);

    // 2. Chọn Build là Prototype
    await page.locator('#selectBuild').selectOption({ label: 'Prototype' });

    // 3. Nhập -12.5 vào ô First number
    await page.locator('#number1Field').fill('-12.5');

    // 4. Nhập 3.4 vào ô Second number
    await page.locator('#number2Field').fill('3.4');

    // 5. Chọn Concatenate tại menu Operation
    await page.locator('#selectOperationDropdown').selectOption({ label: 'Concatenate' });

    // 6. Bấm nút Calculate
    await page.locator('#calculateButton').click();

    // Expected result: Giữ nguyên dấu âm và dấu chấm thập phân, hiển thị -12.53.4 tại ô Answer
    const answerField = page.locator('#numberAnswerField');
    await expect(answerField).toBeVisible();
    await expect(answerField).toHaveValue('-12.53.4');
    await expect(page.locator('#errorMsgField')).toHaveText('');
  });
});
