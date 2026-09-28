# Title: [BUG][Addition] Build 2 không hiển thị thông báo lỗi validation

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
- Build: 2
- Operation: Add
- Automation tool: Playwright 1.63.0

## Steps to reproduce

1. Mở trang Basic Calculator
2. Chọn build `2`
3. Chọn operation `Add`
4. Nhập giá trị không hợp lệ vào Number 1 (ví dụ: `abc`, `@#$`, khoảng trắng, hoặc để trống)
5. Nhập giá trị hợp lệ vào Number 2 (ví dụ: `5`)
6. Bấm nút `Calculate`

## Expected result

Trường error message hiển thị thông báo lỗi tương ứng:
- `Number 1 is not a number` nếu Number 1 không hợp lệ
- `Number 2 is not a number` nếu Number 2 không hợp lệ

## Actual result

Trường `errorMsgField` luôn trả về chuỗi rỗng. Do build 2 thực hiện nối chuỗi
(BUG-ADD-003), các input không hợp lệ như `abc` + `5` được nối thành `abc5`
và hiển thị trong answer field mà không có cảnh báo.
Cùng ảnh hưởng 9 test case như BUG-ADD-001 nhưng trên build 2.

## Evidence

- Playwright assertion: `Expected: "Number 1 is not a number"; Received: ""`
- Locator: `getByTestId('errorMsgField')`
- Kết quả suite: `1 passed, 24 failed (1.3m)`
- Screenshot đại diện (TC-ADDITION-007): `tests/test-summary/evidence/TC-ADDITION-007-build-2-failed.png`
