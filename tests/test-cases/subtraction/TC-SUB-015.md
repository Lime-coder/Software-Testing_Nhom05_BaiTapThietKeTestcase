# TC-SUB-015: Để trống trường "First number" khi thực hiện phép trừ

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
| First number | (Để trống) |
| Second number | 20 |
| Operation | Subtract |
| Integers only | Unchecked |

## Test steps
1. Chọn Build là "Prototype"
2. Để trống trường "First number"
3. Nhập "20" vào trường "Second number"
4. Chọn phép toán "Subtract" tại dropdown "Operation"
5. Nhấn nút "Calculate"

## Expected result
Hệ thống hiển thị thông báo lỗi yêu cầu nhập số hợp lệ tại First number (hoặc không thực hiện phép tính và hiển thị thông báo lỗi tại Answer/giao diện).

## Status / Related bugs
Not Run / None
