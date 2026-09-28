# TC-ADDITION-024: Addition with scientific notation format

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
| Number 1 | 1e3 |
| Number 2 | 500 |
| Operation | Add |
| Integers only | Unchecked |

## Test steps
1. Nhập `1e3` vào trường Number 1 (biểu diễn số 1000).
2. Nhập `500` vào trường Number 2.
3. Chọn phép tính `Add` từ dropdown Operation.
4. Bấm nút `Calculate`.

## Expected result
Hệ thống parse `1e3` thành `1000`. Kết quả hiển thị trong trường Answer là `1500`.

## Status / Related bugs
Not Run / None

## Test Owner
Hiep Tran Dai
