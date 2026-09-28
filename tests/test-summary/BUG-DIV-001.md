# Title: [BUG-DIV-001][Division][Build 1] Calculator bị treo sau khi chia cho 0

## Found by Test Case

TC-DIV-009

## Requirement liên quan

FR-DIV-001

## Severity / Priority

Major / P1

## Environment

- Browser: Chromium 153.0.8010.12
- OS: Windows
- URL: https://testsheepnz.github.io/BasicCalculator.html
- Build: 1
- Operation: Divide
- Automation tool: Playwright 1.63.0

## Steps to reproduce

1. Mở trang Basic Calculator.
2. Chọn Build `1`.
3. Nhập `8` vào First number.
4. Nhập `0` vào Second number.
5. Chọn operation `Divide`.
6. Nhấn `Calculate` và chờ xử lý hoàn tất.

## Expected result

Hiển thị thông báo lỗi chia cho 0, giữ answer rỗng và khôi phục các nút Calculate/Clear để tiếp tục sử dụng máy tính.

## Actual result

Trang hiển thị `Divide by zero error!` và answer rỗng nhưng tiếp tục hiển thị `Calculating ...`. Hai nút Calculate và Clear bị vô hiệu hóa; cần tải lại trang để sử dụng tiếp.

## Evidence

- Playwright assertion: `expect(calculateButton).toBeEnabled()` nhận trạng thái disabled.
- Kết quả chi tiết: [division-build-1-test-run.md](../test-runs/division-build-1-test-run.md).
