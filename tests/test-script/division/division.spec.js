const { test } = require('@playwright/test');
const { divisionCases } = require('./division.data');
const { DivisionPage } = require('./division.page');

test.describe('Division', () => {
  for (const testCase of divisionCases) {
    test(`${testCase.id}: ${testCase.name}`, async ({ page }, testInfo) => {
      const caseNumber = testCase.id.slice(-3);
      testInfo.annotations.push({
        type: 'Test case',
        description: `tests/test-cases/division/TC-divison-${caseNumber}.md`,
      });
      testInfo.annotations.push({ type: 'Owner', description: 'Quốc Huy' });

      const divisionPage = new DivisionPage(page);

      await test.step('Mở màn hình Division', async () => {
        await divisionPage.goto();
      });

      await test.step('Nhập dữ liệu và thực hiện phép chia', async () => {
        await divisionPage.divide(testCase);
      });

      await test.step('Kiểm tra kết quả', async () => {
        await divisionPage.expectOutput(testCase);
      });
    });
  }
});
