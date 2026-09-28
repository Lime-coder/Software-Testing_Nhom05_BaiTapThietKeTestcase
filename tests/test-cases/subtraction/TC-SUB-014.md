# TC-SUB-014: Trừ hai số nguyên khi kích hoạt tuỳ chọn "Integers only"

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
| First number | 50 |
| Second number | 18 |
| Operation | Subtract |
| Integers only | Checked |

## Test steps
1. Chọn Build là "Prototype"
2. Nhập "50" vào trường "First number"
3. Nhập "18" vào trường "Second number"
4. Chọn phép toán "Subtract" tại dropdown "Operation"
5. Tích chọn checkbox "Integers only"
6. Nhấn nút "Calculate"

## Expected result
Trường "Answer" hiển thị kết quả là số nguyên chính xác: "32".

## Status / Related bugs
Not Run / None
