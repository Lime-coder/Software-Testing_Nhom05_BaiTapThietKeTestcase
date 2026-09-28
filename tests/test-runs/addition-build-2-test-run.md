# Sprint 1 Test Run Report — Addition Build 2

## Thông tin thực thi

| Thuộc tính | Giá trị |
| --- | --- |
| Test owner | Hiep Tran Dai |
| Ngày thực thi | 2026-09-28 |
| Công cụ | Playwright 1.63.0 |
| Browser | Chromium 153.0.8010.12 |
| OS | Windows |
| URL | https://testsheepnz.github.io/BasicCalculator.html |
| Build | 2 |
| Operation | Add |
| Phạm vi | TC-ADDITION-001 đến TC-ADDITION-025 |

## Tổng kết

| Total | Passed | Failed | Blocked | Not Run | Pass rate |
| ---: | ---: | ---: | ---: | ---: | ---: |
| 25 | 1 | 24 | 0 | 0 | 4% |

## Kết quả chi tiết

| Test Case | Nội dung | Expected result | Actual result | Status |
| --- | --- | --- | --- | --- |
| TC-ADDITION-001 | Cộng 2 số nguyên dương | `40` | `1525` (nối chuỗi) | Failed |
| TC-ADDITION-002 | Cộng 2 số âm | `-15` | `-10-5` (nối chuỗi) | Failed |
| TC-ADDITION-003 | Số dương + số âm | `12` | `20-8` (nối chuỗi) | Failed |
| TC-ADDITION-004 | Cộng với số 0 | `50` | `050` (nối chuỗi) | Failed |
| TC-ADDITION-005 | Cộng 2 số thập phân | `14.7` | `10.54.2` (nối chuỗi) | Failed |
| TC-ADDITION-006 | Số thập phân với Integer Only ON | `14` | `10` (chỉ lấy phần nguyên của Number 1) | Failed |
| TC-ADDITION-007 | Number 1 không phải số | `Number 1 is not a number` | "" (không có thông báo lỗi) | Failed |
| TC-ADDITION-008 | Number 2 không phải số | `Number 2 is not a number` | "" (không có thông báo lỗi) | Failed |
| TC-ADDITION-009 | Number 1 để trống | `Number 1 is not a number` | "" (không có thông báo lỗi) | Failed |
| TC-ADDITION-010 | Number 2 để trống | `Number 2 is not a number` | "" (không có thông báo lỗi) | Failed |
| TC-ADDITION-011 | Số nguyên tối đa 10 chữ số | `10000000000` | `99999999991` (nối chuỗi) | Failed |
| TC-ADDITION-012 | Số âm tối đa 10 ký tự | `-1000000000` | `-999999999-1` (nối chuỗi) | Failed |
| TC-ADDITION-013 | Số thập phân không có số 0 dẫn đầu | `0.75` | `.5.25` (nối chuỗi) | Failed |
| TC-ADDITION-014 | Input có khoảng trắng đầu | `40` | `  15   25` (nối chuỗi không trim) | Failed |
| TC-ADDITION-015 | Input có khoảng trắng cuối | `40` | `15  25   ` (nối chuỗi không trim) | Failed |
| TC-ADDITION-016 | Input chỉ chứa khoảng trắng | `Number 1 is not a number` | "" (không có thông báo lỗi) | Failed |
| TC-ADDITION-017 | Nhiều dấu chấm thập phân | `Number 1 is not a number` | "" (không có thông báo lỗi) | Failed |
| TC-ADDITION-018 | Số thập phân rất nhỏ | `0.00000003` | `0.000000010.00000002` (nối chuỗi) | Failed |
| TC-ADDITION-019 | Số thập phân âm + số dương | `-3.2` | `-5.52.3` (nối chuỗi) | Failed |
| TC-ADDITION-020 | 0 + số âm | `-10` | `0-10` (nối chuỗi) | Failed |
| TC-ADDITION-021 | Number 1 chứa ký tự đặc biệt | `Number 1 is not a number` | "" (không có thông báo lỗi) | Failed |
| TC-ADDITION-022 | Number 2 chứa ký tự đặc biệt | `Number 2 is not a number` | "" (không có thông báo lỗi) | Failed |
| TC-ADDITION-023 | Cả 2 trường để trống | `Number 1 is not a number` | "" (không có thông báo lỗi) | Failed |
| TC-ADDITION-024 | Ký hiệu khoa học (1e3 + 500) | `1500` | `1e3500` (nối chuỗi) | Failed |
| TC-ADDITION-025 | Chức năng nút Clear | Xóa kết quả, tắt Integer Only | Xóa kết quả, tắt Integer Only | Passed |

## Phân tích lỗi

### Nhóm 1 — Nối chuỗi thay vì cộng số (15 test case)
TC-ADDITION-001 đến TC-ADDITION-006, TC-ADDITION-011 đến TC-ADDITION-015,
TC-ADDITION-018, TC-ADDITION-019, TC-ADDITION-020, TC-ADDITION-024 đều fail
do build 2 nối chuỗi các giá trị nhập vào thay vì thực hiện phép cộng số học.
Root cause là operation "Add" trên build 2 hoạt động như string concatenation.
Được gom vào BUG-ADD-003.

### Nhóm 2 — Validation không hiển thị thông báo lỗi (9 test case)
TC-ADDITION-007, 008, 009, 010, 016, 017, 021, 022, 023 fail do errorMsgField không
hiển thị thông báo lỗi. Do build 2 thực hiện nối chuỗi nên input không hợp lệ được
nối và hiển thị vào answer field mà không có cảnh báo. Được gom vào BUG-ADD-004.

## Bug reports

- BUG-ADD-003: Build 2 nối chuỗi thay vì thực hiện phép cộng số học (Critical).
  - Found by: TC-ADDITION-001 đến 006, 011 đến 015, 018, 019, 020, 024.
  - Severity / Priority: Critical / P0.
  - Chi tiết: tests/test-summary/BUG-ADD-003.md.
- BUG-ADD-004: Build 2 không hiển thị thông báo lỗi validation.
  - Found by: TC-ADDITION-007, 008, 009, 010, 016, 017, 021, 022, 023.
  - Severity / Priority: Major / P1.
  - Chi tiết: tests/test-summary/BUG-ADD-004.md.

## Evidence

- Playwright console result: `1 passed, 24 failed (1.3m)`.
- HTML report: tests/test-script/playwright-report/index.html.
- Lệnh thực thi: `env:CALCULATOR_BUILD='2'; npm run test:addition`.
