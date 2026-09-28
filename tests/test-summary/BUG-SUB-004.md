---
name: Bug Report
title: "[BUG]: TC-SUB-024 phát hiện lỗi phép trừ trên các build 7, 8 và 9"
labels: ["type: bug", "status: new"]
---

## Mô tả lỗi
Khi chạy test cross-build TC-SUB-024, một số build không trả về kết quả đúng hoặc không hiển thị đủ control để thực hiện phép trừ.

## Môi trường
- Website: https://testsheepnz.github.io/BasicCalculator.html
- Module: Subtraction
- Browser: Chromium
- Tool: Playwright 1.63.0
- Date: 2026-09-28

## Steps to reproduce
1. Mở trang Basic Calculator.
2. Lần lượt chọn các Build từ `1` đến `9`.
3. Nhập First number = `20`, Second number = `8`.
4. Chọn Operation `Subtract`.
5. Nhấn `Calculate` và kiểm tra Answer phải là `12`.

## Actual result
TC-SUB-024 ghi nhận Build 7 trả về `-8`, Build 8 trả về `-12`, và Build 9 ẩn Second number/Calculate nên không thể hoàn tất thao tác.

## Expected result
Mỗi build trong phạm vi kiểm tra phải hiển thị đủ control cần thiết và trả về kết quả `12` cho phép tính `20 - 8`.

## Evidence
- Raw test result: `tests/test-runs/subtraction-build-4-results.json`
- Raw test result: `tests/test-runs/subtraction-build-5-results.json`
- Representative screenshot: `tests/test-summary/evidence/BUG-SUB-004.png`
- Representative error context: `tests/test-summary/evidence/BUG-SUB-004-error-context.md`

