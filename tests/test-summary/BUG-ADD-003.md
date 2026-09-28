# Title: [BUG][Addition] Build 2 nối chuỗi thay vì thực hiện phép cộng số học

## Found by Test Case

TC-ADDITION-001, TC-ADDITION-002, TC-ADDITION-003, TC-ADDITION-004, TC-ADDITION-005,
TC-ADDITION-006, TC-ADDITION-011, TC-ADDITION-012, TC-ADDITION-013, TC-ADDITION-014,
TC-ADDITION-015, TC-ADDITION-018, TC-ADDITION-019, TC-ADDITION-020, TC-ADDITION-024

## Requirement liên quan

FR-CALC-ADDITION-01

## Severity / Priority

Critical / P0

## Environment

- Browser: Chromium 153.0.8010.12
- OS: Windows
- URL: https://testsheepnz.github.io/BasicCalculator.html
- Build: 2
- Operation: Add
- Automation tool: Playwright 1.63.0

## Steps to reproduce

1. Mở trang Basic Calculator
2. Chọn build `2`
3. Chọn operation `Add`
4. Nhập `15` vào Number 1
5. Nhập `25` vào Number 2
6. Bấm nút `Calculate`

## Expected result

Trường Answer hiển thị kết quả cộng số học: `40`.

## Actual result

Trường Answer hiển thị `1525` — hai chuỗi được nối lại thay vì cộng.
Build 2 xử lý hai giá trị nhập như chuỗi văn bản (string concatenation) thay vì số học.

Ví dụ các giá trị nhận được sai:
- `15 + 25` → `1525` (expected `40`)
- `-10 + (-5)` → `-10-5` (expected `-15`)
- `0 + 50` → `050` (expected `50`)
- `10.5 + 4.2` → `10.54.2` (expected `14.7`)
- `1e3 + 500` → `1e3500` (expected `1500`)

Lỗi này ảnh hưởng đến 15/25 test case (60% tổng số test).

## Evidence

- Playwright assertion: `Expected: "40"; Received: "1525"`
- Locator: `getByTestId('numberAnswerField')`
- Kết quả suite: `1 passed, 24 failed (1.3m)`
- Screenshot đại diện (TC-ADDITION-001): `tests/test-summary/evidence/TC-ADDITION-001-build-2-failed.png`
