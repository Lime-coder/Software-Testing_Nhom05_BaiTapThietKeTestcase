# TC-CONCAT-004: Nối chuỗi kết hợp chữ, số và ký tự đặc biệt

## Requirement ID
FR-CONCAT-01

## Module / Test type / Technique
Concatenation / Functional / Equivalence Partitioning

## Preconditions
- Người dùng đang ở trang Basic Calculator (`https://testsheepnz.github.io/BasicCalculator.html#main-body`)
- Trường **Build** được chọn là `Prototype`

## Test data
| Field | Value |
| --- | --- |
| Build | Prototype |
| First number | User_01@ |
| Second number | #2026! |
| Operation | Concatenate |

## Test steps
1. Mở trang Basic Calculator
2. Chọn **Build** là `Prototype`
3. Nhập `User_01@` vào ô **First number**
4. Nhập `#2026!` vào ô **Second number**
5. Chọn `Concatenate` tại menu **Operation**
6. Bấm nút **Calculate**

## Expected result
Hệ thống nối chính xác cả chữ cái, chữ số và ký tự đặc biệt, hiển thị `User_01@#2026!` tại ô **Answer** và không báo lỗi.

## Status / Related bugs
Not Run / None

## Test owner
Nguyễn Hoàng Liêm (23120290)
