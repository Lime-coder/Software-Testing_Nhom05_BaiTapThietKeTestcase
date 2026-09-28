# TC-SUB-023: Kiểm tra tính năng Clear kết quả sau khi thực hiện phép trừ

## Requirement ID
FR-CALC-SUB-01

## Module / Test type / Technique
Subtraction / Functional / State Transition

## Test Owner
huyen

## Preconditions
- Người dùng đã truy cập vào trang web Basic Calculator: https://testsheepnz.github.io/BasicCalculator.html
- Đã thực hiện thành công một phép tính trừ và có hiển thị kết quả tại ô "Answer"

## Test data
| Build | Prototype |
| First number | 70 |
| Second number | 30 |
| Operation | Subtract |
| Integers only | Unchecked |

## Test steps
1. Nhập "70" vào "First number", "30" vào "Second number", chọn "Subtract" và nhấn "Calculate"
2. Kiểm tra ô "Answer" hiển thị "40"
3. Nhấn nút "Clear" (nếu có nút Clear trên giao diện) hoặc xóa dữ liệu ô nhập

## Expected result
Các trường dữ liệu và trường "Answer" được xoá sạch / trở về trạng thái rỗng ban đầu.

## Status / Related bugs
Not Run / None
