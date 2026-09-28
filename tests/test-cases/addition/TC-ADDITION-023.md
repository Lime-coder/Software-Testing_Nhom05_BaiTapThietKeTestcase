# TC-ADDITION-023: Validation error when both fields are empty

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
| Number 1 | (Để trống) |
| Number 2 | (Để trống) |
| Operation | Add |

## Test steps
1. Để trống trường Number 1.
2. Để trống trường Number 2.
3. Chọn phép tính `Add` từ dropdown Operation.
4. Bấm nút `Calculate`.

## Expected result
Hệ thống hiển thị thông báo lỗi `Number 1 is not a number` (do hệ thống ưu tiên validate field 1 trước).

## Status / Related bugs
Not Run / None

## Test Owner
Hiep Tran Dai
