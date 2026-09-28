# TC-SUB-012: Trừ hai số nguyên rất lớn (Biên trên)

## Requirement ID
FR-CALC-SUB-01

## Module / Test type / Technique
Subtraction / Functional / Boundary Value Analysis

## Test Owner
huyen

## Preconditions
- Người dùng đã truy cập vào trang web Basic Calculator: https://testsheepnz.github.io/BasicCalculator.html
- Trang web tải hoàn tất

## Test data
| Build | Prototype |
| First number | 999999999 |
| Second number | 1 |
| Operation | Subtract |
| Integers only | Unchecked |

## Test steps
1. Chọn Build là "Prototype"
2. Nhập "999999999" vào trường "First number"
3. Nhập "1" vào trường "Second number"
4. Chọn phép toán "Subtract" tại dropdown "Operation"
5. Đảm bảo checkbox "Integers only" không được chọn
6. Nhấn nút "Calculate"

## Expected result
Trường "Answer" hiển thị kết quả chính xác là "999999998".

## Status / Related bugs
Not Run / None
