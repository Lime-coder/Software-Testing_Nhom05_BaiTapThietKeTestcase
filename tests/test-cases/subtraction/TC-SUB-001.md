# TC-SUB-001: Trừ hai số nguyên dương (Số thứ nhất lớn hơn số thứ hai)

## Requirement ID
FR-CALC-SUB-01

## Module / Test type / Technique
Subtraction / Functional / Equivalence Partitioning

## Test Owner
huyen

## Preconditions
- Người dùng đã truy cập vào trang web Basic Calculator: https://testsheepnz.github.io/BasicCalculator.html
- Trang web tải hoàn tất và hiển thị đầy đủ các trường nhập liệu

## Test data
| Build | Prototype |
| First number | 50 |
| Second number | 20 |
| Operation | Subtract |
| Integers only | Unchecked |

## Test steps
1. Chọn Build là "Prototype"
2. Nhập "50" vào trường "First number"
3. Nhập "20" vào trường "Second number"
4. Chọn phép toán "Subtract" tại dropdown "Operation"
5. Đảm bảo checkbox "Integers only" không được chọn
6. Nhấn nút "Calculate"

## Expected result
Trường "Answer" hiển thị kết quả chính xác là "30".

## Status / Related bugs
Not Run / None
