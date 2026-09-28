# Title: [BUG][Concatenation] Phép tính Concatenate bị hoán đổi thành Add trên Build 2

## Found by Test Case

TC-CONCAT-001–TC-CONCAT-008, TC-CONCAT-010, TC-CONCAT-011

## Requirement liên quan

FR-CONCAT-01, FR-CONCAT-02

## Severity / Priority

Major / P1

## Environment

- Browser: Chromium 153.0.8010.12
- OS: Windows
- URL: https://testsheepnz.github.io/BasicCalculator.html#main-body
- Build: 2
- Operation: Concatenate
- Automation tool: Playwright 1.63.0

## Steps to reproduce

1. Mở trang Basic Calculator
2. Chọn build `2`
3. Chọn operation `Concatenate`
4. Nhập dữ liệu vào ô First number và Second number (ví dụ: `12` và `34` hoặc `Hello` và `World`)
5. Bấm nút Calculate

## Expected result

Hệ thống xử lý hai giá trị đầu vào như chuỗi ký tự, nối theo đúng thứ tự và hiển thị kết quả tại ô Answer (ví dụ: `1234` cho `12` và `34`, hoặc `HelloWorld` cho `Hello` và `World`). Không có thông báo lỗi kiểm tra số nào xuất hiện.

## Actual result

Hệ thống tự động hoán đổi phép tính `Concatenate` thành `Add` và bật cờ kiểm tra số:
- Khi nhập chuỗi chứa chữ/ký tự đặc biệt (`Hello`, `World`), hệ thống báo lỗi `Number 1 is not a number` hoặc `Number 2 is not a number`.
- Khi nhập chuỗi số (`12`, `34`), hệ thống thực hiện phép cộng toán học ($12 + 34 = 46$) thay vì nối chuỗi (`1234`).

Dẫn đến 10 test case kiểm tra tính năng Concatenate trên Build 2 bị thất bại (tỷ lệ thành công chỉ đạt 16.67%).

## Evidence

- Screenshot: [BUG-CONCAT-001.png](evidence/BUG-CONCAT-001.png)
- Playwright assertion error:
  `Received: "Number 1 is not a number"` (đối với dữ liệu chữ) hoặc `Received: "46"` (đối với dữ liệu số).
- Locators: `getByTestId('selectOperationDropdown')`, `getByTestId('errorMsgField')`, `getByTestId('numberAnswerField')`
- Kết quả suite: `2 passed, 10 failed (1.4m)`
