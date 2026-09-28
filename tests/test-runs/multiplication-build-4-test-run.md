ssf
# Sprint 2 Regression Report — Multiplication Build 4

## Thông tin thực thi

| Thuộc tính | Giá trị |
| --- | --- |
| Test owner | Nguyễn Phúc Hậu |
| Ngày thực thi | 2026-09-28 |
| Công cụ | Playwright 1.63.0 |
| Browser | Chromium 153.0.8010.12 |
| OS | Windows |
| URL | https://testsheepnz.github.io/BasicCalculator.html |
| Build | 4 |
| Operation | Multiply |
| Phạm vi | TC-MUL-001 đến TC-MUL-020 |

## Tổng kết

| Total | Passed | Failed | Blocked | Not Run | Pass rate |
| ---: | ---: | ---: | ---: | ---: | ---: |
| 20 | 2 | 18 | 0 | 0 | 10% |

## Kết quả chi tiết

| Test Case | Integers only yêu cầu | Actual result | Status |
| --- | --- | --- | --- |
| TC-MUL-001 | Off | Checkbox bị vô hiệu hóa ở trạng thái On | Failed |
| TC-MUL-002 | Off | Checkbox bị vô hiệu hóa ở trạng thái On | Failed |
| TC-MUL-003 | Off | Checkbox bị vô hiệu hóa ở trạng thái On | Failed |
| TC-MUL-004 | Off | Checkbox bị vô hiệu hóa ở trạng thái On | Failed |
| TC-MUL-005 | Off | Checkbox bị vô hiệu hóa ở trạng thái On | Failed |
| TC-MUL-006 | Off | Checkbox bị vô hiệu hóa ở trạng thái On | Failed |
| TC-MUL-007 | Off | Checkbox bị vô hiệu hóa ở trạng thái On | Failed |
| TC-MUL-008 | Off | Checkbox bị vô hiệu hóa ở trạng thái On | Failed |
| TC-MUL-009 | Off | Checkbox bị vô hiệu hóa ở trạng thái On | Failed |
| TC-MUL-010 | Off | Checkbox bị vô hiệu hóa ở trạng thái On | Failed |
| TC-MUL-011 | Off | Checkbox bị vô hiệu hóa ở trạng thái On | Failed |
| TC-MUL-012 | Off | Checkbox bị vô hiệu hóa ở trạng thái On | Failed |
| TC-MUL-013 | On | Hiển thị kết quả `7` | Passed |
| TC-MUL-014 | On | Hiển thị kết quả `-7` | Passed |
| TC-MUL-015 | Off | Checkbox bị vô hiệu hóa ở trạng thái On | Failed |
| TC-MUL-016 | Off | Checkbox bị vô hiệu hóa ở trạng thái On | Failed |
| TC-MUL-017 | Off | Checkbox bị vô hiệu hóa ở trạng thái On | Failed |
| TC-MUL-018 | Off | Checkbox bị vô hiệu hóa ở trạng thái On | Failed |
| TC-MUL-019 | Off | Checkbox bị vô hiệu hóa ở trạng thái On | Failed |
| TC-MUL-020 | Off | Checkbox bị vô hiệu hóa ở trạng thái On | Failed |

## Phân tích lỗi

18 failure có cùng nguyên nhân gốc và được gom vào `BUG-MUL-002`: build 4 khóa
Integers only ở trạng thái On. Các test yêu cầu Off không thể hoàn tất bước thiết
lập dữ liệu. Hai test yêu cầu On (`TC-MUL-013`, `TC-MUL-014`) vẫn Passed.

## Evidence

- Playwright console result: `2 passed, 18 failed (1.2m)`.
- Screenshot đại diện: `tests/test-summary/evidence/BUG-MUL-002.png`.
- HTML report: `tests/test-script/playwright-report/index.html`.
- Lệnh thực thi:
  `$env:CALCULATOR_BUILD='4'; npm run test:multiplication -- --grep-invert 'TC-MUL-02[1-3]'`.
