# Playwright scripts for Multiplication

## Cài đặt

Chạy từ thư mục gốc của repository:

```powershell
npm install --save-dev @playwright/test
npx playwright install chromium
```

## Chạy toàn bộ 20 test case

```powershell
npx playwright test --config=tests/test-script/playwright.config.js tests/test-script/multiplication
```

Mặc định, test chạy trên:
`https://testsheepnz.github.io/BasicCalculator.html`

Nếu cần chạy trên URL khác, đặt biến môi trường trước khi chạy:

```powershell
$env:MULTIPLICATION_URL="https://example.com/BasicCalculator.html"
```

## Chạy một test case

```powershell
npx playwright test --config=tests/test-script/playwright.config.js --grep "TC-MUL-007"
```

Các test luôn chọn build `5` và operation `Multiply` trước khi nhập dữ
liệu.
