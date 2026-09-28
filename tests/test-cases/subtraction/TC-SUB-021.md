# TC-SUB-021: Nhập định dạng số có nhiều dấu chấm thập phân không hợp lệ

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
| First number | 12.3.4 |
| Second number | 5 |
| Operation | Subtract |
| Integers only | Unchecked |

## Test steps
1. Chọn Build là "Prototype"
2. Nhập "12.3.4" vào trường "First number"
3. Nhập "5" vào trường "Second number"
4. Chọn phép toán "Subtract" tại dropdown "Operation"
5. Nhấn nút "Calculate"

## Expected result
Hệ thống từ chối tính toán và hiển thị thông báo lỗi định dạng số không hợp lệ.

## Status / Related bugs
Not Run / None
