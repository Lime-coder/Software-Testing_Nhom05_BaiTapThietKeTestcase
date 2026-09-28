const { test, expect } = require('@playwright/test');
const { concatenationCases } = require('./concatenation.data');
const { ConcatenationPage } = require('./concatenation.page');

test.describe('Concatenation', () => {
  for (const testCase of concatenationCases) {
    test(`${testCase.id}: ${testCase.name}`, async ({ page }, testInfo) => {
      testInfo.annotations.push({
        type: 'Test case',
        description: `tests/test-cases/concatenation/${testCase.id}.md`,
      });
      testInfo.annotations.push({ type: 'Owner', description: 'Nguyễn Hoàng Liêm' });

      const concatPage = new ConcatenationPage(page);

      await test.step('Mở màn hình Concatenation', async () => {
        await concatPage.goto();
      });

      await test.step('Nhập dữ liệu và thực hiện phép nối chuỗi', async () => {
        await concatPage.concatenate(testCase);
      });

      await test.step('Kiểm tra kết quả', async () => {
        await concatPage.expectOutput(testCase.expected);
      });
    });
  }

  test('TC-CONCAT-008: Kiểm tra giới hạn nhập vượt quá biên tối đa (11 ký tự) trên các ô đầu vào', async ({ page }, testInfo) => {
    testInfo.annotations.push({
      type: 'Test case',
      description: 'tests/test-cases/concatenation/TC-CONCAT-008.md',
    });
    testInfo.annotations.push({ type: 'Owner', description: 'Nguyễn Hoàng Liêm' });

    const concatPage = new ConcatenationPage(page);
    await concatPage.goto();

    await test.step('Nhập 11 ký tự vào mỗi ô có maxlength="10"', async () => {
      await concatPage.firstNumberInput.clear();
      await concatPage.firstNumberInput.pressSequentially('1234567890A');
      await expect(concatPage.firstNumberInput).toHaveValue('1234567890');

      await concatPage.secondNumberInput.clear();
      await concatPage.secondNumberInput.pressSequentially('abcdefghijB');
      await expect(concatPage.secondNumberInput).toHaveValue('abcdefghij');
    });

    await test.step('Thực hiện phép tính và kiểm tra kết quả', async () => {
      await concatPage.calculateButton.click();
      await concatPage.expectOutput('1234567890abcdefghij');
    });
  });

  test('TC-CONCAT-009: Kiểm tra tự động ẩn và hủy chọn "Integers only" khi chọn phép tính Concatenate', async ({ page }, testInfo) => {
    testInfo.annotations.push({
      type: 'Test case',
      description: 'tests/test-cases/concatenation/TC-CONCAT-009.md',
    });
    testInfo.annotations.push({ type: 'Owner', description: 'Nguyễn Hoàng Liêm' });

    const concatPage = new ConcatenationPage(page);

    await test.step('Mở trang Basic Calculator với Operation mặc định là Add', async () => {
      const url = process.env.CONCATENATION_URL || 'https://testsheepnz.github.io/BasicCalculator.html#main-body';
      await page.goto(url);
      await concatPage.selectBuild('Prototype');
      await expect(concatPage.operationSelect).toHaveValue('0');
    });

    await test.step('Tích chọn Integers only và nhập số thập phân', async () => {
      await concatPage.integerOnlyCheckbox.check();
      await expect(concatPage.integerOnlyCheckbox).toBeChecked();

      await concatPage.firstNumberInput.fill('12.34');
      await concatPage.secondNumberInput.fill('56.78');
    });

    await test.step('Chuyển Operation sang Concatenate và kiểm tra checkbox bị ẩn', async () => {
      await concatPage.selectOperation('Concatenate');

      await expect(concatPage.integerOnlyCheckbox).toBeHidden();
      await expect(concatPage.integerOnlyLabel).toBeHidden();
      await expect(concatPage.integerOnlyCheckbox).not.toBeChecked();
    });

    await test.step('Thực hiện Calculate và kiểm tra giữ nguyên phần thập phân', async () => {
      await concatPage.calculateButton.click();
      await concatPage.expectOutput('12.3456.78');
    });
  });

  test('TC-CONCAT-011: Kiểm tra tính thứ tự (không giao hoán) và nối liên tiếp nhiều lần', async ({ page }, testInfo) => {
    testInfo.annotations.push({
      type: 'Test case',
      description: 'tests/test-cases/concatenation/TC-CONCAT-011.md',
    });
    testInfo.annotations.push({ type: 'Owner', description: 'Nguyễn Hoàng Liêm' });

    const concatPage = new ConcatenationPage(page);
    await concatPage.goto();

    await test.step('Lần 1: AB + CD -> ABCD', async () => {
      await concatPage.concatenate({ first: 'AB', second: 'CD' });
      await concatPage.expectOutput('ABCD');
    });

    await test.step('Lần 2: CD + AB -> CDAB', async () => {
      await expect(concatPage.calculateButton).toBeEnabled();
      await concatPage.firstNumberInput.fill('CD');
      await concatPage.secondNumberInput.fill('AB');
      await concatPage.calculateButton.click();
      await concatPage.expectOutput('CDAB');
    });
  });

  test('TC-CONCAT-012: Kiểm tra xóa thông báo lỗi cũ và chức năng nút Clear sau khi thực hiện Concatenate', async ({ page }, testInfo) => {
    testInfo.annotations.push({
      type: 'Test case',
      description: 'tests/test-cases/concatenation/TC-CONCAT-012.md',
    });
    testInfo.annotations.push({ type: 'Owner', description: 'Nguyễn Hoàng Liêm' });

    const concatPage = new ConcatenationPage(page);

    await test.step('Mở trang và nhập dữ liệu chữ với phép tính Add', async () => {
      const url = process.env.CONCATENATION_URL || 'https://testsheepnz.github.io/BasicCalculator.html#main-body';
      await page.goto(url);
      await concatPage.selectBuild('Prototype');
      await concatPage.firstNumberInput.fill('abc');
      await concatPage.secondNumberInput.fill('123');
      await concatPage.selectOperation('Add');
      await concatPage.calculateButton.click();
      await expect(concatPage.errorMessage).toHaveText('Number 1 is not a number');
    });

    await test.step('Chuyển sang Concatenate, tính toán và kiểm tra lỗi cũ được xóa', async () => {
      await concatPage.selectOperation('Concatenate');
      await expect(concatPage.calculateButton).toBeEnabled();
      await concatPage.calculateButton.click();
      await concatPage.expectOutput('abc123');
    });

    await test.step('Bấm Clear và kiểm tra kết quả được đặt lại', async () => {
      await expect(concatPage.clearButton).toBeEnabled();
      await concatPage.clear();
      await expect(concatPage.result).toHaveValue('');
      await expect(concatPage.errorMessage).toHaveText('');
    });
  });
});
