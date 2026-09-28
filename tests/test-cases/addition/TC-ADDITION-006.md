# TC-ADDITION-006: Addition with decimal numbers and Integers only option

## Requirement ID
FR-CALC-ADDITION-02

## Module / Test type / Technique
Addition / Functional / Decision Table

## Preconditions
- Người dùng đã mở trang Basic Calculator (https://testsheepnz.github.io/BasicCalculator.html).
- Trang Calculator đã được tải hoàn tất.

## Test data
| Field | Value |
|---|---|
| Number 1 | 10.5 |
| Number 2 | 4.2 |
| Operation | Add |
| Integers only | Checked |

## Test steps
1. Nhập `10.5` vào trường Number 1.
2. Nhập `4.2` vào trường Number 2.
3. Chọn phép tính `Add` từ dropdown Operation.
4. Tick chọn checkbox `Integers only`.
5. Bấm nút `Calculate`.

## Expected result
Kết quả hiển thị trong trường Answer là `14` (phần thập phân đã bị cắt bỏ).

## Status / Related bugs
Not Run / None

## Test Owner
Hiep Tran Dai
