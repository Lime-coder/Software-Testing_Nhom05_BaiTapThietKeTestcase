# TC-ADDITION-008: Validation error for non-numeric input in Number 2

## Requirement ID
FR-CALC-ADDITION-03

## Module / Test type / Technique
Addition / Negative / Equivalence Partitioning

## Preconditions
- Người dùng đã mở trang Basic Calculator (https://testsheepnz.github.io/BasicCalculator.html).
- Trang Calculator đã được tải hoàn tất.

## Test data
| Field | Value |
|---|---|
| Number 1 | 5 |
| Number 2 | xyz |
| Operation | Add |

## Test steps
1. Nhập `5` vào trường Number 1.
2. Nhập ký tự không hợp lệ `xyz` vào trường Number 2.
3. Chọn phép tính `Add` từ dropdown Operation.
4. Bấm nút `Calculate`.

## Expected result
Hệ thống hiển thị thông báo lỗi `Number 2 is not a number` ở phần thông báo lỗi.

## Status / Related bugs
Not Run / None

## Test Owner
Hiep Tran Dai
