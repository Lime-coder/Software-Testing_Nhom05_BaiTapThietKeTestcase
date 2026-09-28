# TC-SUB-019: Nhập ký tự chữ vào trường "Second number"

## Requirement ID
FR-CALC-SUB-01

## Module / Test type / Technique
Subtraction / Functional / Equivalence Partitioning (Invalid)

## Test Owner
huyen

## Preconditions
- Người dùng đã truy cập vào trang web Basic Calculator: https://testsheepnz.github.io/BasicCalculator.html
- Trang web tải hoàn tất

## Test data
| Build | Prototype |
| First number | 30 |
| Second number | xyz |
| Operation | Subtract |
| Integers only | Unchecked |

## Test steps
1. Chọn Build là "Prototype"
2. Nhập "30" vào trường "First number"
3. Nhập "xyz" vào trường "Second number"
4. Chọn phép toán "Subtract" tại dropdown "Operation"
5. Nhấn nút "Calculate"

## Expected result
Hệ thống báo lỗi giá trị nhập vào không phải là số hợp lệ tại "Second number".

## Status / Related bugs
Not Run / None
