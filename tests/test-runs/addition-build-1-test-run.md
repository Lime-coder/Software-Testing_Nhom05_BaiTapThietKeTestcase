# Sprint 1 Test Run Report — Addition Build 1

## Thông tin thực thi

| Thuộc tính | Giá trị |
| --- | --- |
| Test owner | Hiep Tran Dai |
| Ngày thực thi | 2026-09-28 |
| Công cụ | Playwright 1.63.0 |
| Browser | Chromium 153.0.8010.12 |
| OS | Windows |
| URL | https://testsheepnz.github.io/BasicCalculator.html |
| Build | 1 |
| Operation | Add |
| Phạm vi | TC-ADDITION-001 đến TC-ADDITION-025 |

## Tổng kết

| Total | Passed | Failed | Blocked | Not Run | Pass rate |
| ---: | ---: | ---: | ---: | ---: | ---: |
| 25 | 15 | 10 | 0 | 0 | 60% |

## Kết quả chi tiết

| Test Case | Nội dung | Expected result | Actual result | Status |
| --- | --- | --- | --- | --- |
| TC-ADDITION-001 | Cộng 2 số nguyên dương | `40` | `40` | Passed |
| TC-ADDITION-002 | Cộng 2 số âm | `-15` | `-15` | Passed |
| TC-ADDITION-003 | Số dương + số âm | `12` | `12` | Passed |
| TC-ADDITION-004 | Cộng với số 0 | `50` | `50` | Passed |
| TC-ADDITION-005 | Cộng 2 số thập phân | `14.7` | `14.7` | Passed |
| TC-ADDITION-006 | Số thập phân với Integer Only ON | `14` | `14` | Passed |
| TC-ADDITION-007 | Number 1 không phải số | `Number 1 is not a number` | "" (không có thông báo lỗi) | Failed |
| TC-ADDITION-008 | Number 2 không phải số | `Number 2 is not a number` | "" (không có thông báo lỗi) | Failed |
| TC-ADDITION-009 | Number 1 để trống | `Number 1 is not a number` | "" (không có thông báo lỗi) | Failed |
| TC-ADDITION-010 | Number 2 để trống | `Number 2 is not a number` | "" (không có thông báo lỗi) | Failed |
| TC-ADDITION-011 | Số nguyên tối đa 10 chữ số | `10000000000` | `10000000000` | Passed |
| TC-ADDITION-012 | Số âm tối đa 10 ký tự | `-1000000000` | `-1000000000` | Passed |
| TC-ADDITION-013 | Số thập phân không có số 0 dẫn đầu | `0.75` | `0.75` | Passed |
| TC-ADDITION-014 | Input có khoảng trắng đầu | `40` | `40` | Passed |
| TC-ADDITION-015 | Input có khoảng trắng cuối | `40` | `40` | Passed |
| TC-ADDITION-016 | Input chỉ chứa khoảng trắng | `Number 1 is not a number` | "" (không có thông báo lỗi) | Failed |
| TC-ADDITION-017 | Nhiều dấu chấm thập phân | `Number 1 is not a number` | "" (không có thông báo lỗi) | Failed |
| TC-ADDITION-018 | Số thập phân rất nhỏ | `0.00000003` | `3.0000000000000004e-8` | Failed |
| TC-ADDITION-019 | Số thập phân âm + số dương | `-3.2` | `-3.2` | Passed |
| TC-ADDITION-020 | 0 + số âm | `-10` | `-10` | Passed |
| TC-ADDITION-021 | Number 1 chứa ký tự đặc biệt | `Number 1 is not a number` | "" (không có thông báo lỗi) | Failed |
| TC-ADDITION-022 | Number 2 chứa ký tự đặc biệt | `Number 2 is not a number` | "" (không có thông báo lỗi) | Failed |
| TC-ADDITION-023 | Cả 2 trường để trống | `Number 1 is not a number` | "" (không có thông báo lỗi) | Failed |
| TC-ADDITION-024 | Ký hiệu khoa học (1e3 + 500) | `1500` | `1500` | Passed |
| TC-ADDITION-025 | Chức năng nút Clear | Xóa kết quả, tắt Integer Only | Xóa kết quả, tắt Integer Only | Passed |

## Phân tích lỗi

### Nhóm 1 — Validation không hiển thị thông báo lỗi (9 test case)
TC-ADDITION-007, 008, 009, 010, 016, 017, 021, 022, 023 đều fail với cùng nguyên nhân:
Build 1 không hiển thị thông báo lỗi khi input không hợp lệ. errorMsgField luôn trả về chuỗi rỗng.
Được gom vào BUG-ADD-001.

### Nhóm 2 — Độ chính xác số thập phân (1 test case)
TC-ADDITION-018: Build 1 trả về kết quả dưới dạng ký hiệu khoa học JavaScript
(3.0000000000000004e-8) thay vì định dạng thập phân chuẩn (0.00000003).
Được gom vào BUG-ADD-002.


## Bug reports

- BUG-ADD-001: Build 1 không hiển thị thông báo lỗi validation.
  - Found by: TC-ADDITION-007, 008, 009, 010, 016, 017, 021, 022, 023.
  - Severity / Priority: Major / P1.
  - Chi tiết: tests/test-summary/BUG-ADD-001.md.
- BUG-ADD-002: Kết quả số thập phân rất nhỏ hiển thị dưới dạng ký hiệu khoa học.
  - Found by: TC-ADDITION-018.
  - Severity / Priority: Minor / P2.
  - Chi tiết: tests/test-summary/BUG-ADD-002.md.

## Evidence

- Playwright console result: `15 passed, 10 failed (1.7m)`.
- HTML report: tests/test-script/playwright-report/index.html.
- Lệnh thực thi: `env:CALCULATOR_BUILD='1'; npm run test:addition`.
