# Test Run Report — Concatenation Build 1

## Thông tin thực thi

| Thuộc tính | Giá trị |
| --- | --- |
| Test owner | Nguyễn Hoàng Liêm |
| Ngày thực thi | 2026-09-28 |
| Công cụ | Playwright 1.63.0 |
| Browser | Chromium 153.0.8010.12 |
| OS | Windows |
| URL | https://testsheepnz.github.io/BasicCalculator.html#main-body |
| Build | 1 |
| Operation | Concatenate |
| Phạm vi | TC-CONCAT-001 đến TC-CONCAT-012 |

## Tổng kết

| Total | Passed | Failed | Blocked | Not Run | Pass rate |
| ---: | ---: | ---: | ---: | ---: | ---: |
| 12 | 12 | 0 | 0 | 0 | 100% |

## Kết quả chi tiết

| Test Case | Nội dung | Expected result | Actual result | Status |
| --- | --- | --- | --- | --- |
| TC-CONCAT-001 | Nối hai chuỗi số nguyên dương hợp lệ | `1234` | `1234` | Passed |
| TC-CONCAT-002 | Nối hai chuỗi ký tự chữ cái (Alphabetic strings) | `HelloWorld` | `HelloWorld` | Passed |
| TC-CONCAT-003 | Nối chuỗi số âm và số thập phân | `-12.53.4` | `-12.53.4` | Passed |
| TC-CONCAT-004 | Nối chuỗi kết hợp chữ, số và ký tự đặc biệt | `User_01@#2026!` | `User_01@#2026!` | Passed |
| TC-CONCAT-005 | Nối khi để trống ô First number | `Test123` | `Test123` | Passed |
| TC-CONCAT-006 | Nối khi để trống cả hai ô dữ liệu đầu vào | `""` | `""` | Passed |
| TC-CONCAT-007 | Nối hai chuỗi đạt độ dài biên tối đa (10 ký tự mỗi ô) | `1234567890abcdefghij` | `1234567890abcdefghij` | Passed |
| TC-CONCAT-008 | Kiểm tra giới hạn nhập vượt quá biên tối đa (11 ký tự) | `1234567890abcdefghij` | `1234567890abcdefghij` | Passed |
| TC-CONCAT-009 | Kiểm tra tự động ẩn và hủy chọn "Integers only" | `12.3456.78` | `12.3456.78` | Passed |
| TC-CONCAT-010 | Nối hai chuỗi có chứa ký tự khoảng trắng (Whitespace) | `Hello  World` | `Hello  World` | Passed |
| TC-CONCAT-011 | Kiểm tra tính thứ tự và nối liên tiếp nhiều lần | `ABCD`, sau đó `CDAB` | `ABCD`, sau đó `CDAB` | Passed |
| TC-CONCAT-012 | Kiểm tra xóa lỗi cũ và chức năng nút Clear | Đã xóa lỗi cũ, Clear đặt lại Answer về `""` | Đã xóa lỗi cũ, Clear đặt lại Answer về `""` | Passed |

## Phân tích kết quả

Build 1 không phát sinh lỗi với tính năng Concatenate. Do cơ chế của Build 1 chỉ bỏ qua kiểm tra số hợp lệ đối với các phép tính toán học (nối chuỗi mặc định không kiểm tra số), tính năng Concatenate hoạt động chính xác 100%.

## Evidence

- Playwright console result: `12 passed (27.5s)`.
- HTML report: `tests/test-script/playwright-report/index.html`.
- Lệnh thực thi:
  `$env:CALCULATOR_BUILD="1"; npx playwright test --config=test-script/playwright.config.js test-script/concatenation`.
