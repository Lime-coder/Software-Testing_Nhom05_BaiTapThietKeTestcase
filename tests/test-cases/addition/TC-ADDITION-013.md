# TC-ADDITION-013: Addition with decimals missing leading zero

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
| Number 1 | .5 |
| Number 2 | .25 |
| Operation | Add |
| Integers only | Unchecked |

## Test steps
1. Nhập `.5` vào trường Number 1.
2. Nhập `.25` vào trường Number 2.
3. Chọn phép tính `Add` từ dropdown Operation.
4. Bấm nút `Calculate`.

## Expected result
Hệ thống tự hiểu là `0.5` và `0.25`, kết quả hiển thị trong trường Answer là `0.75`.

## Status / Related bugs
Not Run / None

## Test Owner
Hiep Tran Dai
