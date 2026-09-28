# TC-ADDITION-014: Addition with inputs containing leading whitespace

## Requirement ID
FR-CALC-ADDITION-01

## Module / Test type / Technique
Addition / Functional / Equivalence Partitioning

## Preconditions
- Người dùng đã mở trang Basic Calculator (https://testsheepnz.github.io/BasicCalculator.html).
- Trang Calculator đã được tải hoàn tất.

## Test data
| Field | Value |
|---|---|
| Number 1 | `  15` |
| Number 2 | `   25` |
| Operation | Add |
| Integers only | Unchecked |

## Test steps
1. Nhập `  15` (có dấu cách ở đầu) vào trường Number 1.
2. Nhập `   25` (có dấu cách ở đầu) vào trường Number 2.
3. Chọn phép tính `Add` từ dropdown Operation.
4. Bấm nút `Calculate`.

## Expected result
Hệ thống bỏ qua dấu cách (trim), xử lý như số hợp lệ. Kết quả hiển thị là `40`.

## Status / Related bugs
Not Run / None

## Test Owner
Hiep Tran Dai
