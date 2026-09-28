# Sprint 1 Test Run Report — Division (Build 2)

## Thông tin thực thi

| Thuộc tính | Giá trị |
| --- | --- |
| Test owner | Quốc Huy |
| Ngày thực thi | 2026-09-28 |
| Công cụ | Playwright 1.63.0 |
| Browser | Chromium 153.0.8010.12 |
| OS | Windows |
| URL | https://testsheepnz.github.io/BasicCalculator.html |
| Build | 2 |
| Operation | Divide |

## Tổng kết

| Total | Passed | Failed | Blocked | Not Run | Pass rate |
| ---: | ---: | ---: | ---: | ---: | ---: |
| 9 | 8 | 1 | 0 | 0 | 88.89% |

## Kết quả chi tiết

| Test Case | Nội dung | Expected result | Actual result | Status |
| --- | --- | --- | --- | --- |
| TC-DIV-001 | Chia hai số nguyên dương có kết quả nguyên | `4` | `4` | Passed |
| TC-DIV-002 | Chia hai số nguyên có kết quả thập phân | `3.5` | `3.5` | Passed |
| TC-DIV-003 | Chia 0 cho số khác 0 | `0` | `0` | Passed |
| TC-DIV-004 | Chia số nguyên dương cho 1 | `9` | `9` | Passed |
| TC-DIV-005 | Số âm chia cho số dương | `-4` | `-4` | Passed |
| TC-DIV-006 | Số dương chia cho số âm | `-4` | `-4` | Passed |
| TC-DIV-007 | Số âm chia cho số âm | `4` | `4` | Passed |
| TC-DIV-008 | Chia hai số thập phân | `2.5` | `2.5` | Passed |
| TC-DIV-009 | Chia cho 0 hiển thị lỗi và khôi phục thao tác | Hiện lỗi, answer rỗng và các nút thao tác được bật lại | Hiện `Divide by zero error!`, answer rỗng nhưng Calculate và Clear vẫn bị vô hiệu hóa, trang kẹt ở `Calculating ...` | Failed |

## Bug reports

- `BUG-DIV-002`: Giao diện bị kẹt sau khi chia cho 0 trên Build 2.
- Found by: `TC-DIV-009`.
- Severity / Priority: Major / P1.
- Chi tiết: [BUG-DIV-002.md](../test-summary/BUG-DIV-002.md).

## Evidence

- Playwright console result: `8 passed, 1 failed`.
- Screenshot lỗi: [test-failed-1.png](../test-script/test-results/division-division-Division-fbdc9-ị-lỗi-và-khôi-phục-thao-tác-chromium/test-failed-1.png).
- HTML report được sinh cục bộ tại `tests/test-script/playwright-report/index.html`.
- Lệnh thực thi: `$env:CALCULATOR_BUILD="2"; npm run test:division`.
