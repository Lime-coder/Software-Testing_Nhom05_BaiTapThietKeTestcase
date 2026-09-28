# TC-SUB-022: Nhập khoảng trắng (spaces) vào các trường nhập liệu

## Requirement ID
FR-CALC-SUB-01

## Module / Test type / Technique
Subtraction / Functional / Error Guessing

## Test Owner
huyen

## Preconditions
- Người dùng đã truy cập vào trang web Basic Calculator: https://testsheepnz.github.io/BasicCalculator.html
- Trang web tải hoàn tất

## Test data
| Build | Prototype |
| First number | &nbsp;&nbsp;&nbsp; |
| Second number | 15 |
| Operation | Subtract |
| Integers only | Unchecked |

## Test steps
1. Chọn Build là "Prototype"
2. Nhập các ký tự khoảng trắng vào trường "First number"
3. Nhập "15" vào trường "Second number"
4. Chọn phép toán "Subtract" tại dropdown "Operation"
5. Nhấn nút "Calculate"

## Expected result
Hệ thống xử lý khoảng trắng như trường trống hoặc báo lỗi không phải định dạng số hợp lệ.

## Status / Related bugs
Not Run / None
