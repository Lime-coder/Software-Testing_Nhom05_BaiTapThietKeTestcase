# Playwright scripts for Concatenation

## Cài đặt

Chạy từ thư mục gốc của repository:

```powershell
npm install --save-dev @playwright/test
npx playwright install chromium
```

## Chạy toàn bộ 12 test case

```powershell
npx playwright test --config=tests/test-script/playwright.config.js tests/test-script/concatenation
```

Mặc định, test chạy trên:
`https://testsheepnz.github.io/BasicCalculator.html#main-body`

Nếu cần chạy trên URL khác, đặt biến môi trường trước khi chạy:

```powershell
$env:CONCATENATION_URL="https://example.com/BasicCalculator.html"
```

Mặc định suite chọn build `Prototype`. Có thể chạy trên build khác bằng cách đặt biến môi trường:

```powershell
$env:CALCULATOR_BUILD="Prototype"
```

## Chạy một test case

```powershell
npx playwright test --config=tests/test-script/playwright.config.js --grep "TC-CONCAT-001"
```

Các test luôn chọn build `Prototype` và operation `Concatenate` trước khi nhập dữ liệu.
