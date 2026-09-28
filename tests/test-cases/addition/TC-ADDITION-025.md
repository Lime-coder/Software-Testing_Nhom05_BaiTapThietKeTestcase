# TC-ADDITION-025: Clear button functionality

## Requirement ID
FR-CALC-ADDITION-04

## Module / Test type / Technique
Addition / Functional / Equivalence Partitioning

## Preconditions
- Người dùng đã mở trang Basic Calculator (https://testsheepnz.github.io/BasicCalculator.html).
- Trang Calculator đã được tải hoàn tất.

## Test data
N/A (Sử dụng form hiện tại)

## Test steps
1. Nhập `10` vào trường Number 1.
2. Nhập `5` vào trường Number 2.
3. Chọn phép tính `Add` từ dropdown Operation.
4. Bấm nút `Calculate` để xuất hiện kết quả `15`.
5. Bấm nút `Clear`.

## Expected result
- Trường Answer bị xóa trống.
- Checkbox `Integers only` bị bỏ chọn.
- Bất kỳ thông báo lỗi nào đều bị xóa.

## Status / Related bugs
Not Run / None

## Test Owner
Hiep Tran Dai
