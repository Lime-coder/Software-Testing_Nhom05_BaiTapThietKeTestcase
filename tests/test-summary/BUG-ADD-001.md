# Title: [BUG][Addition] Build 1 không hiển thị thông báo lỗi validation

## Found by Test Case

TC-ADDITION-007, TC-ADDITION-008, TC-ADDITION-009, TC-ADDITION-010, TC-ADDITION-016, TC-ADDITION-017, TC-ADDITION-021, TC-ADDITION-022, TC-ADDITION-023

## Requirement liên quan

FR-CALC-ADDITION-03

## Severity / Priority

Major / P1

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
4. Nhập giá trị không hợp lệ vào Number 1 (ví dụ: `abc`, `@#$`, khoảng trắng, hoặc để trống)
5. Nhập giá trị hợp lệ vào Number 2 (ví dụ: `5`)
6. Bấm nút `Calculate`

## Expected result

Trường error message hiển thị thông báo lỗi tương ứng:
- `Number 1 is not a number` nếu Number 1 không hợp lệ
- `Number 2 is not a number` nếu Number 2 không hợp lệ

## Actual result

Trường `errorMsgField` luôn trả về chuỗi rỗng. Không có thông báo lỗi nào được hiển thị.
Ảnh hưởng đến 9 test case:
TC-007 (text input), TC-008 (text input N2), TC-009 (empty N1), TC-010 (empty N2),
TC-016 (whitespace only), TC-017 (multiple dots), TC-021 (special char N1), TC-022 (special char N2), TC-023 (both empty).

## Evidence

- Playwright assertion: `Expected: "Number 1 is not a number"; Received: ""`
- Locator: `getByTestId('errorMsgField')`
- Kết quả suite: `15 passed, 10 failed (1.7m)`
- Screenshot đại diện (TC-ADDITION-007): `tests/test-summary/evidence/TC-ADDITION-007-build-1-failed.png`
