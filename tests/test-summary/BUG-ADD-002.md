# Title: [BUG][Addition] Build 1 hiển thị kết quả số thập phân rất nhỏ dưới dạng ký hiệu khoa học

## Found by Test Case

TC-ADDITION-018

## Requirement liên quan

FR-CALC-ADDITION-01

## Severity / Priority

Minor / P2

## Environment

- Browser: Chromium 153.0.8010.12
- OS: Windows
- URL: https://testsheepnz.github.io/BasicCalculator.html
- Build: 1
- Operation: Add
- Automation tool: Playwright 1.63.0

## Steps to reproduce

1. Mở trang Basic Calculator
2. Chọn build `1`
3. Chọn operation `Add`
4. Nhập `0.00000001` vào Number 1
5. Nhập `0.00000002` vào Number 2
6. Bấm nút `Calculate`

## Expected result

Trường Answer hiển thị kết quả `0.00000003` dưới dạng thập phân chuẩn.

## Actual result

Trường Answer hiển thị `3.0000000000000004e-8` — ký hiệu khoa học dạng JavaScript
do lỗi làm tròn dấu phẩy động (floating-point precision error).
Ngoài ra kết quả cũng bị sai về giá trị do lỗi IEEE 754 precision.

## Evidence

- Playwright assertion: `Expected: "0.00000003"; Received: "3.0000000000000004e-8"`
- Locator: `getByTestId('numberAnswerField')`
- Kết quả suite: `14 passed, 11 failed (1.2m)`
- Screenshot đại diện: `tests/test-summary/evidence/TC-ADDITION-018-build-1-failed.png`
