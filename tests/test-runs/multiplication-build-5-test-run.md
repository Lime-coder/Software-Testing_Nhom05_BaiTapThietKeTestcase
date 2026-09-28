mdsfnb
# Sprint 1 Test Run Report — Multiplication

## Thông tin thực thi

| Thuộc tính | Giá trị |
| --- | --- |
| Test owner | Nguyễn Phúc Hậu |
| Ngày thực thi | 2026-09-28 |
| Công cụ | Playwright 1.63.0 |
| Browser | Chromium 153.0.8010.12 |
| OS | Windows |
| URL | https://testsheepnz.github.io/BasicCalculator.html |
| Build | 5 |
| Operation | Multiply |

## Tổng kết

| Total | Passed | Failed | Blocked | Not Run | Pass rate |
| ---: | ---: | ---: | ---: | ---: | ---: |
| 23 | 22 | 1 | 0 | 0 | 95.65% |

## Kết quả chi tiết

| Test Case | Nội dung | Expected result | Actual result | Status |
| --- | --- | --- | --- | --- |
| TC-MUL-001 | Nhân 2 số nguyên dương | `20` | `20` | Passed |
| TC-MUL-002 | Nhân số nguyên dương lớn hơn | `5535` | `5535` | Passed |
| TC-MUL-003 | Số âm × số dương | `-20` | `-20` | Passed |
| TC-MUL-004 | Số dương × số âm | `-20` | `-20` | Passed |
| TC-MUL-005 | Số âm × số âm | `20` | `20` | Passed |
| TC-MUL-006 | 0 × số dương | `0` | `0` | Passed |
| TC-MUL-007 | Số dương × 0 | `0` | `0` | Passed |
| TC-MUL-008 | 0 × 0 | `0` | `0` | Passed |
| TC-MUL-009 | Số thập phân × số nguyên | `10` | `10` | Passed |
| TC-MUL-010 | Số thập phân × số thập phân | `3.75` | `3.75` | Passed |
| TC-MUL-011 | Số thập phân âm × số nguyên | `-10` | `-10` | Passed |
| TC-MUL-012 | Kết quả thập phân khi Integer Only OFF | `7.5` | `7.5` | Passed |
| TC-MUL-013 | Kết quả thập phân khi Integer Only ON | `7` | `7` | Passed |
| TC-MUL-014 | Kết quả âm thập phân với Integer Only ON | `-7` | `-7` | Passed |
| TC-MUL-015 | First number là chữ | `Number 1 is not a number` | `Number 1 is not a number` | Passed |
| TC-MUL-016 | Second number là chữ | `Number 2 is not a number` | `Number 2 is not a number` | Passed |
| TC-MUL-017 | Cả hai input đều không phải số | `Number 1 is not a number` | `Number 1 is not a number` | Passed |
| TC-MUL-018 | First number chứa chữ và số | `Number 1 is not a number` | `Number 1 is not a number` | Passed |
| TC-MUL-019 | Second number chứa ký tự đặc biệt | `Number 2 is not a number` | `Number 2 is not a number` | Passed |
| TC-MUL-020 | Kiểm tra giới hạn 10 ký tự | `9999999999` | `9999999999` | Passed |
| TC-MUL-021 | Nút Clear khả dụng khi chọn build 5 | Clear được bật | Clear bị vô hiệu hóa | Failed |
| TC-MUL-022 | Nút Clear khả dụng sau khi chuyển sang build 5 | Clear được bật và xóa kết quả | Clear được bật và xóa kết quả | Passed |
| TC-MUL-023 | Clear xóa kết quả và đặt lại Integer Only | Xóa kết quả và tắt Integer Only | Kết quả được xóa và Integer Only trở về Off | Passed |

## Bug reports

- `BUG-MUL-001`: Nút Clear bị vô hiệu hóa khi chọn build 5.
- Found by: `TC-MUL-021`.
- Severity / Priority: Minor / P2.
- Chi tiết: `tests/test-summary/BUG-MUL-001.md`.

## Evidence

- Playwright console result: `22 passed, 1 failed (48.2s)`.
- Screenshot lỗi: `tests/test-summary/evidence/BUG-MUL-001.png`.
- HTML report được sinh cục bộ tại
  `tests/test-script/playwright-report/index.html`.
- Lệnh thực thi:
  `npm run test:multiplication`.
