# Playwright scripts for Multiplication

## Cài đặt

Chạy từ thư mục gốc của repository:

```powershell
npm install --save-dev @playwright/test
npx playwright install chromium
```

## Chạy toàn bộ 23 test case

```powershell
npx playwright test --config=tests/test-script/playwright.config.js tests/test-script/multiplication
```

Mặc định, test chạy trên:
`https://testsheepnz.github.io/BasicCalculator.html`

Nếu cần chạy trên URL khác, đặt biến môi trường trước khi chạy:

```powershell
$env:MULTIPLICATION_URL="https://example.com/BasicCalculator.html"
```

Mặc định suite chọn build `5`. Có thể chạy 20 test case cốt lõi trên build khác,
ví dụ build `4`:

```powershell
$env:CALCULATOR_BUILD="4"
npx playwright test --config=tests/test-script/playwright.config.js tests/test-script/multiplication --grep-invert "TC-MUL-02[1-3]"
```

## Chạy một test case

```powershell
npx playwright test --config=tests/test-script/playwright.config.js --grep "TC-MUL-007"
```

Các test luôn chọn build `5` và operation `Multiply` trước khi nhập dữ
liệu.
