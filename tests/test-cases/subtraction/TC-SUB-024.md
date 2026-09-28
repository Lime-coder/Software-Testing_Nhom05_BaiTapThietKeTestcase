# TC-SUB-024: Kiểm tra phép trừ trên các phiên bản Build khác nhau (Build 1 - 9) để tìm lỗi

## Requirement ID
FR-CALC-SUB-01

## Module / Test type / Technique
Subtraction / Functional / Defect Finding

## Test Owner
huyen

## Preconditions
- Người dùng đã truy cập vào trang web Basic Calculator: https://testsheepnz.github.io/BasicCalculator.html
- Trang web tải hoàn tất

## Test data
| Build | 1 (hoặc lần lượt 2 -> 9) |
| First number | 20 |
| Second number | 8 |
| Operation | Subtract |
| Integers only | Unchecked |

## Test steps
1. Chọn Build (ví dụ: "1") từ dropdown "Build"
2. Nhập "20" vào "First number"
3. Nhập "8" vào "Second number"
4. Chọn phép toán "Subtract" tại dropdown "Operation"
5. Nhấn nút "Calculate"
6. So sánh kết quả hiển thị ở ô "Answer" với kết quả chuẩn (12) của Prototype

## Expected result
Ghi nhận kết quả trả về của từng Build để đối chiếu xem Build có hoạt động đúng như Prototype hay phát sinh lỗi tính toán/giao diện.

## Status / Related bugs
Not Run / None
