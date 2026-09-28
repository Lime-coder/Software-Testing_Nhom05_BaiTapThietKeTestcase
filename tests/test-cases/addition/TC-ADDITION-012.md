# TC-ADDITION-012: Addition with maximum length negative numbers (10 characters)

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
| Number 1 | -999999999 |
| Number 2 | -1 |
| Operation | Add |
| Integers only | Unchecked |

## Test steps
1. Nhập `-999999999` vào trường Number 1 (bao gồm cả dấu trừ là 10 ký tự).
2. Nhập `-1` vào trường Number 2.
3. Chọn phép tính `Add` từ dropdown Operation.
4. Bấm nút `Calculate`.

## Expected result
Kết quả hiển thị trong trường Answer là `-1000000000`.

## Status / Related bugs
Not Run / None

## Test Owner
Hiep Tran Dai
