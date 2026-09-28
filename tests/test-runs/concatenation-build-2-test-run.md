# Regression Report — Concatenation Build 2

## Thông tin thực thi

| Thuộc tính | Giá trị |
| --- | --- |
| Test owner | Nguyễn Hoàng Liêm |
| Ngày thực thi | 2026-09-28 |
| Công cụ | Playwright 1.63.0 |
| Browser | Chromium 153.0.8010.12 |
| OS | Windows |
| URL | https://testsheepnz.github.io/BasicCalculator.html#main-body |
| Build | 2 |
| Operation | Concatenate |
| Phạm vi | TC-CONCAT-001 đến TC-CONCAT-012 |

## Tổng kết

| Total | Passed | Failed | Blocked | Not Run | Pass rate |
| ---: | ---: | ---: | ---: | ---: | ---: |
| 12 | 2 | 10 | 0 | 0 | 16.67% |

## Kết quả chi tiết

| Test Case | Nội dung | Expected result | Actual result | Status |
| --- | --- | --- | --- | --- |
| TC-CONCAT-001 | Nối hai chuỗi số nguyên dương hợp lệ | `1234` | `46` (Thực hiện phép cộng $12 + 34$) | Failed |
| TC-CONCAT-002 | Nối hai chuỗi ký tự chữ cái | `HelloWorld` | Báo lỗi `Number 1 is not a number` | Failed |
| TC-CONCAT-003 | Nối chuỗi số âm và số thập phân | `-12.53.4` | `-9.1` (Thực hiện phép cộng $-12.5 + 3.4$) | Failed |
| TC-CONCAT-004 | Nối chuỗi kết hợp chữ, số và ký tự đặc biệt | `User_01@#2026!` | Báo lỗi `Number 1 is not a number` | Failed |
| TC-CONCAT-005 | Nối khi để trống ô First number | `Test123` | Báo lỗi `Number 1 is not a number` | Failed |
| TC-CONCAT-006 | Nối khi để trống cả hai ô dữ liệu đầu vào | `""` | `0` (Thực hiện phép cộng $0 + 0$) | Failed |
| TC-CONCAT-007 | Nối hai chuỗi đạt độ dài biên tối đa (10 ký tự) | `1234567890abcdefghij` | Báo lỗi `Number 2 is not a number` | Failed |
| TC-CONCAT-008 | Kiểm tra giới hạn nhập vượt quá biên tối đa (11 ký tự) | `1234567890abcdefghij` | Báo lỗi `Number 2 is not a number` | Failed |
| TC-CONCAT-009 | Kiểm tra tự động ẩn và hủy chọn "Integers only" | Checkbox bị ẩn và kết quả không bị cắt | Checkbox bị ẩn và xử lý chuyển phép tính thành công | Passed |
| TC-CONCAT-010 | Nối hai chuỗi có chứa ký tự khoảng trắng | `Hello  World` | Báo lỗi `Number 1 is not a number` | Failed |
| TC-CONCAT-011 | Kiểm tra tính thứ tự và nối liên tiếp nhiều lần | `ABCD`, sau đó `CDAB` | Báo lỗi `Number 1 is not a number` | Failed |
| TC-CONCAT-012 | Kiểm tra xóa lỗi cũ và chức năng nút Clear | Đã xóa lỗi cũ, Clear đặt lại Answer về `""` | Đã xóa lỗi cũ, Clear đặt lại Answer về `""` | Passed |

## Phân tích lỗi

10 test case thất bại có cùng một nguyên nhân gốc thuộc lỗi logic của **Build 2** (`BUG-CONCAT-001`):
- Trong mã nguồn Build 2, khi người dùng chọn phép tính `Concatenate` (giá trị `4`), hệ thống tự động hoán đổi phép tính sang `Add` (giá trị `0`) và bật cờ kiểm tra số `isNumber = true`.
- Hậu quả:
  1. Khi dữ liệu đầu vào là chữ/ký tự đặc biệt, hệ thống báo lỗi `Number 1/2 is not a number` thay vì nối chuỗi.
  2. Khi dữ liệu đầu vào là số, hệ thống thực hiện phép cộng toán học thay vì nối chuỗi.

## Bug reports

- `BUG-CONCAT-001`: Build 2 tự động tráo đổi phép tính `Concatenate` thành `Add`.
- Found by: `TC-CONCAT-001` đến `TC-CONCAT-008`, `TC-CONCAT-010`, `TC-CONCAT-011`.
- Severity / Priority: High / P1 (Major functional defect).

## Evidence

- Playwright console result: `2 passed, 10 failed (1.4m)`.
- HTML report: `tests/test-script/playwright-report/index.html`.
- Lệnh thực thi:
  `$env:CALCULATOR_BUILD="2"; npx playwright test --config=test-script/playwright.config.js test-script/concatenation`.
