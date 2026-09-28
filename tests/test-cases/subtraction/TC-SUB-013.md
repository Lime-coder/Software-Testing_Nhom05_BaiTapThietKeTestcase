# TC-SUB-013: Trừ hai số thập phân khi kích hoạt tuỳ chọn "Integers only"

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
| First number | 15.8 |
| Second number | 5.2 |
| Operation | Subtract |
| Integers only | Checked |

## Test steps
1. Chọn Build là "Prototype"
2. Nhập "15.8" vào trường "First number"
3. Nhập "5.2" vào trường "Second number"
4. Chọn phép toán "Subtract" tại dropdown "Operation"
5. Tích chọn checkbox "Integers only"
6. Nhấn nút "Calculate"

## Expected result
Trường "Answer" hiển thị kết quả dưới dạng số nguyên được làm tròn/cắt gọt (kết quả nguyên: "10" hoặc "11" tuỳ theo quy tắc làm tròn nguyên của hệ thống, không chứa phần thập phân).

## Status / Related bugs
Not Run / None
