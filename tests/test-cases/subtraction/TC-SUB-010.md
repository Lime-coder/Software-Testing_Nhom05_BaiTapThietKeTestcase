# TC-SUB-010: Trừ hai số thập phân (Số thực dương)

## Requirement ID
FR-CALC-SUB-01

## Module / Test type / Technique
Subtraction / Functional / Equivalence Partitioning

## Test Owner
huyen

## Preconditions
- Người dùng đã truy cập vào trang web Basic Calculator: https://testsheepnz.github.io/BasicCalculator.html
- Trang web tải hoàn tất

## Test data
| Build | Prototype |
| First number | 25.75 |
| Second number | 10.25 |
| Operation | Subtract |
| Integers only | Unchecked |

## Test steps
1. Chọn Build là "Prototype"
2. Nhập "25.75" vào trường "First number"
3. Nhập "10.25" vào trường "Second number"
4. Chọn phép toán "Subtract" tại dropdown "Operation"
5. Đảm bảo checkbox "Integers only" không được chọn
6. Nhấn nút "Calculate"

## Expected result
Trường "Answer" hiển thị kết quả chính xác là "15.5".

## Status / Related bugs
Not Run / None
