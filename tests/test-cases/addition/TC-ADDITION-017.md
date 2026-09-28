# TC-ADDITION-017: Validation error for multiple decimal points

## Requirement ID
FR-CALC-ADDITION-03

## Module / Test type / Technique
Addition / Negative / Error Guessing

## Preconditions
- Người dùng đã mở trang Basic Calculator (https://testsheepnz.github.io/BasicCalculator.html).
- Trang Calculator đã được tải hoàn tất.

## Test data
| Field | Value |
|---|---|
| Number 1 | 5.5.5 |
| Number 2 | 10 |
| Operation | Add |

## Test steps
1. Nhập `5.5.5` vào trường Number 1.
2. Nhập `10` vào trường Number 2.
3. Chọn phép tính `Add` từ dropdown Operation.
4. Bấm nút `Calculate`.

## Expected result
Hệ thống hiển thị thông báo lỗi `Number 1 is not a number` vì có nhiều dấu thập phân.

## Status / Related bugs
Not Run / None

## Test Owner
Hiep Tran Dai
