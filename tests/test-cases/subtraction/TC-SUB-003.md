# TC-SUB-003: Trừ hai số nguyên dương bằng nhau

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
| First number | 100 |
| Second number | 100 |
| Operation | Subtract |
| Integers only | Unchecked |

## Test steps
1. Chọn Build là "Prototype"
2. Nhập "100" vào trường "First number"
3. Nhập "100" vào trường "Second number"
4. Chọn phép toán "Subtract" tại dropdown "Operation"
5. Đảm bảo checkbox "Integers only" không được chọn
6. Nhấn nút "Calculate"

## Expected result
Trường "Answer" hiển thị kết quả là "0".

## Status / Related bugs
Not Run / None
