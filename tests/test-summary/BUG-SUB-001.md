---
name: Bug Report
title: "[BUG]: Build 4 khóa Integers only ở trạng thái Checked khi thực hiện phép trừ"
labels: ["type: bug", "status: new"]
---

## Mô tả lỗi
Khi chọn Build 4 cho module Subtraction, checkbox `Integers only` bị vô hiệu hóa và luôn ở trạng thái Checked. Các test case yêu cầu `Integers only = Unchecked` không thể hoàn tất bước thiết lập dữ liệu.

## Môi trường
- Website: https://testsheepnz.github.io/BasicCalculator.html
- Build: 4
- Module: Subtraction
- Browser: Chromium
- Tool: Playwright 1.63.0
- Date: 2026-09-28

## Steps to reproduce
1. Mở trang Basic Calculator.
2. Chọn Build `4`.
3. Chọn Operation `Subtract`.
4. Nhập dữ liệu hợp lệ, ví dụ First number = `50`, Second number = `20`.
5. Thử đặt checkbox `Integers only` về trạng thái Unchecked.

## Actual result
Checkbox `Integers only` bị disabled ở trạng thái Checked. Test không thể thực hiện precondition `Integers only = Unchecked` và bị timeout ở bước thiết lập.

## Expected result
Người dùng có thể bật/tắt `Integers only` theo test data. Với các test case yêu cầu Unchecked, checkbox phải đặt được về trạng thái Unchecked trước khi Calculate.

## Evidence
- Raw test result: `tests/test-runs/subtraction-build-4-results.json`
- Representative screenshot: `tests/test-summary/evidence/BUG-SUB-001.png`
- Representative error context: `tests/test-summary/evidence/BUG-SUB-001-error-context.md`
- Representative Playwright output: `tests/test-summary/evidence/BUG-SUB-001-playwright-output.txt`

