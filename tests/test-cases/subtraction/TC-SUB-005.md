# TC-SUB-005: Trừ số 0 cho một số nguyên dương

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
| First number | 0 |
| Second number | 45 |
| Operation | Subtract |
| Integers only | Unchecked |

## Test steps
1. Chọn Build là "Prototype"
2. Nhập "0" vào trường "First number"
3. Nhập "45" vào trường "Second number"
4. Chọn phép toán "Subtract" tại dropdown "Operation"
5. Đảm bảo checkbox "Integers only" không được chọn
6. Nhấn nút "Calculate"

## Expected result
Trường "Answer" hiển thị kết quả là "-45".

## Status / Related bugs
Not Run / None
