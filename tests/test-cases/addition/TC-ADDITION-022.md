# TC-ADDITION-022: Validation error for special characters in Number 2

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
| Number 1 | 10 |
| Number 2 | *&^ |
| Operation | Add |

## Test steps
1. Nhập `10` vào trường Number 1.
2. Nhập `*&^` vào trường Number 2.
3. Chọn phép tính `Add` từ dropdown Operation.
4. Bấm nút `Calculate`.

## Expected result
Hệ thống hiển thị thông báo lỗi `Number 2 is not a number`.

## Status / Related bugs
Not Run / None

## Test Owner
Hiep Tran Dai
