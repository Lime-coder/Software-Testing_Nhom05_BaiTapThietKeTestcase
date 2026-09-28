# Playwright scripts for Division

## Cài đặt

Chạy từ thư mục gốc của repository:

```powershell
npm ci
npx playwright install chromium
```

## Chạy toàn bộ 9 test case

```powershell
npm run test:division
```

Mặc định, test chạy trên:
`https://testsheepnz.github.io/BasicCalculator.html`

Mặc định suite chọn build `1`. Chọn build `2` bằng PowerShell:

```powershell
$env:CALCULATOR_BUILD="2"
npm run test:division
```

Có thể chạy một test case cụ thể:

```powershell
npx playwright test --config=tests/test-script/playwright.config.js tests/test-script/division --grep "TC-DIV-009"
```

Có thể đổi URL bằng biến môi trường `DIVISION_URL`. Test `TC-DIV-009` kiểm tra thông báo chia cho 0, kết quả rỗng và các nút thao tác được khôi phục.
