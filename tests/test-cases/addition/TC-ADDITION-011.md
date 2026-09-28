# TC-ADDITION-011: Addition with maximum length valid numbers (10 digits)

## Requirement ID
FR-CALC-ADDITION-01

## Module / Test type / Technique
Addition / Functional / Boundary Value Analysis

## Preconditions
- Người dùng đã mở trang Basic Calculator (https://testsheepnz.github.io/BasicCalculator.html).
- Trang Calculator đã được tải hoàn tất.

## Test data
| Field | Value |
|---|---|
| Number 1 | 9999999999 |
| Number 2 | 1 |
| Operation | Add |
| Integers only | Unchecked |

## Test steps
1. Nhập `9999999999` vào trường Number 1 (đây là giới hạn maxlength của field).
2. Nhập `1` vào trường Number 2.
3. Chọn phép tính `Add` từ dropdown Operation.
4. Bấm nút `Calculate`.

## Expected result
Kết quả hiển thị trong trường Answer là `10000000000`.

## Status / Related bugs
Not Run / None

## Test Owner
Hiep Tran Dai
