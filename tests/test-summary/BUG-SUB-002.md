---
name: Bug Report
title: "[BUG]: Build 5 không báo lỗi khi input rỗng hoặc chỉ có khoảng trắng"
labels: ["type: bug", "status: new"]
---

## Mô tả lỗi
Khi chạy Subtraction trên Build 5, hệ thống không hiển thị thông báo lỗi cho các trường hợp First number/Second number bị để trống hoặc First number chỉ gồm khoảng trắng.

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
3. Chọn Operation `Subtract`.
4. Chạy một trong các bộ dữ liệu: First number rỗng, Second number rỗng, cả hai trường rỗng, hoặc First number chỉ gồm khoảng trắng.
5. Nhấn `Calculate`.

## Actual result
Trường `errorMsgField` không hiển thị thông báo lỗi. Playwright nhận actual error text là chuỗi rỗng `""`.

## Expected result
Hệ thống phải từ chối tính toán và hiển thị thông báo lỗi dữ liệu đầu vào không hợp lệ tại field tương ứng.

## Evidence
- Raw test result: `tests/test-runs/subtraction-build-5-results.json`
- Failed test cases: TC-SUB-015, TC-SUB-016, TC-SUB-017, TC-SUB-022
- Representative screenshot: `tests/test-summary/evidence/BUG-SUB-002.png`
- Representative error context: `tests/test-summary/evidence/BUG-SUB-002-error-context.md`

