---
name: Bug Report
title: "[BUG]: Build 5 Clear không xóa First number và Second number"
labels: ["type: bug", "status: new"]
---

## Mô tả lỗi
Sau khi thực hiện phép trừ trên Build 5 và nhấn Clear, trường Answer được xóa nhưng First number và Second number vẫn giữ dữ liệu đã nhập.

## Môi trường
- Website: https://testsheepnz.github.io/BasicCalculator.html
- Build: 5
- Module: Subtraction
- Browser: Chromium
- Tool: Playwright 1.63.0
- Date: 2026-09-28

## Steps to reproduce
1. Mở trang Basic Calculator.
2. Chọn Build `5`.
3. Nhập First number = `70`, Second number = `30`.
4. Chọn Operation `Subtract` và nhấn `Calculate`.
5. Xác nhận Answer hiển thị `40`.
6. Nhấn `Clear`.

## Actual result
First number vẫn là `70` và Second number vẫn là `30`; form không trở về trạng thái rỗng ban đầu.

## Expected result
Các trường First number, Second number và Answer đều được xóa sạch sau khi nhấn Clear.

## Evidence
- Raw test result: `tests/test-runs/subtraction-build-5-results.json`
- Failed test case: TC-SUB-023
- Representative screenshot: `tests/test-summary/evidence/BUG-SUB-003.png`
- Representative error context: `tests/test-summary/evidence/BUG-SUB-003-error-context.md`

