# TC-SUB-020: Nhập ký tự đặc biệt vào các trường nhập liệu

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
| First number | @#$% |
| Second number | &*() |
| Operation | Subtract |
| Integers only | Unchecked |

## Test steps
1. Chọn Build là "Prototype"
2. Nhập "@#$%" vào trường "First number"
3. Nhập "&*()" vào trường "Second number"
4. Chọn phép toán "Subtract" tại dropdown "Operation"
5. Nhấn nút "Calculate"

## Expected result
Hệ thống không thực hiện phép tính và thông báo lỗi dữ liệu không hợp lệ.

## Status / Related bugs
Not Run / None
