# Test Run: ghi nhận kết quả execute test case

Test case là thiết kế; test run là bằng chứng đã chạy trong một sprint/release

## Thông tin thực thi

| Thuộc tính | Giá trị |
| --- | --- |
| Module | Subtraction |
| Tester | huyen |
| Ngày thực thi | 2026-09-28 |
| Website | https://testsheepnz.github.io/BasicCalculator.html |
| Build | 5 |
| Tool | Playwright 1.63.0 |
| Browser | Chromium |
| Test scripts | tests/test-script/subtraction |
| Raw result | tests/test-runs/subtraction-build-5-results.json |

| Test Case ID | Module | Tester | Result | Related Bug | Note |
| --- | --- | --- | --- | --- | --- |
| TC-SUB-001 | Subtraction | huyen | Pass |  | Kết quả đúng theo expected result. |
| TC-SUB-002 | Subtraction | huyen | Pass |  | Kết quả đúng theo expected result. |
| TC-SUB-003 | Subtraction | huyen | Pass |  | Kết quả đúng theo expected result. |
| TC-SUB-004 | Subtraction | huyen | Pass |  | Kết quả đúng theo expected result. |
| TC-SUB-005 | Subtraction | huyen | Pass |  | Kết quả đúng theo expected result. |
| TC-SUB-006 | Subtraction | huyen | Pass |  | Kết quả đúng theo expected result. |
| TC-SUB-007 | Subtraction | huyen | Pass |  | Kết quả đúng theo expected result. |
| TC-SUB-008 | Subtraction | huyen | Pass |  | Kết quả đúng theo expected result. |
| TC-SUB-009 | Subtraction | huyen | Pass |  | Kết quả đúng theo expected result. |
| TC-SUB-010 | Subtraction | huyen | Pass |  | Kết quả đúng theo expected result. |
| TC-SUB-011 | Subtraction | huyen | Pass |  | Kết quả đúng theo expected result. |
| TC-SUB-012 | Subtraction | huyen | Pass |  | Kết quả đúng theo expected result. |
| TC-SUB-013 | Subtraction | huyen | Pass |  | Kết quả đúng theo expected result. |
| TC-SUB-014 | Subtraction | huyen | Pass |  | Kết quả đúng theo expected result. |
| TC-SUB-015 | Subtraction | huyen | Fail | BUG-SUB-002 | Không hiển thị lỗi khi input rỗng hoặc chỉ gồm khoảng trắng; error message rỗng. |
| TC-SUB-016 | Subtraction | huyen | Fail | BUG-SUB-002 | Không hiển thị lỗi khi input rỗng hoặc chỉ gồm khoảng trắng; error message rỗng. |
| TC-SUB-017 | Subtraction | huyen | Fail | BUG-SUB-002 | Không hiển thị lỗi khi input rỗng hoặc chỉ gồm khoảng trắng; error message rỗng. |
| TC-SUB-018 | Subtraction | huyen | Pass |  | Kết quả đúng theo expected result. |
| TC-SUB-019 | Subtraction | huyen | Pass |  | Kết quả đúng theo expected result. |
| TC-SUB-020 | Subtraction | huyen | Pass |  | Kết quả đúng theo expected result. |
| TC-SUB-021 | Subtraction | huyen | Pass |  | Kết quả đúng theo expected result. |
| TC-SUB-022 | Subtraction | huyen | Fail | BUG-SUB-002 | Không hiển thị lỗi khi input rỗng hoặc chỉ gồm khoảng trắng; error message rỗng. |
| TC-SUB-023 | Subtraction | huyen | Fail | BUG-SUB-003 | Clear chỉ xóa Answer, không xóa First number và Second number. |
| TC-SUB-024 | Subtraction | huyen | Fail | BUG-SUB-004 | Script cross-build phát hiện Build 7/8 tính sai và Build 9 ẩn field/nút cần dùng. |

---

## Trạng thái test run

| Total | Pass | Fail | Blocked | Not Run |
| ---: | ---: | ---: | ---: | ---: |
| 24 | 18 | 6 | 0 | 0 |

các trạng thái: `Pass`, `Fail`, `Blocked`, `Not Run`

> **Lưu ý:** Khi **Result = Fail** hoặc **Blocked** -> phải có **Related Bug** hoặc **lý do rõ ràng**.
>
> Build 5 pass phần lớn phép trừ, nhưng không xử lý đúng input rỗng/khoảng trắng và Clear không đưa toàn bộ form về trạng thái ban đầu. TC-SUB-024 là test cross-build nên lỗi ghi nhận thuộc các build khác trong phạm vi script.

