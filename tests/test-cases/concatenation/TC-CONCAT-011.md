# TC-CONCAT-011: Kiểm tra tính thứ tự (không giao hoán) và nối liên tiếp nhiều lần

## Requirement ID
FR-CONCAT-01

## Module / Test type / Technique
Concatenation / Functional / State Transition

## Preconditions
- Người dùng đang ở trang Basic Calculator (`https://testsheepnz.github.io/BasicCalculator.html#main-body`)
- Trường **Build** được chọn là `Prototype`

## Test data
| Field | Value |
| --- | --- |
| Build | Prototype |
| Lần 1 - First number / Second number | AB / CD |
| Lần 2 - First number / Second number | CD / AB |
| Operation | Concatenate |

## Test steps
1. Mở trang Basic Calculator và chọn **Build** là `Prototype`
2. Nhập `AB` vào **First number**, `CD` vào **Second number**, chọn **Operation** là `Concatenate` và bấm **Calculate**
3. Quan sát kết quả lần 1 tại ô **Answer**
4. Sửa **First number** thành `CD`, sửa **Second number** thành `AB` và bấm **Calculate** lần 2

## Expected result
- Ở lần 1, ô **Answer** hiển thị `ABCD`.
- Ở lần 2, hệ thống lấy đúng giá trị mới từ ô **First number** và **Second number** theo thứ tự từ trên xuống dưới (không dùng lại kết quả `Answer` cũ và không đảo ngược thứ tự hai ô), hiển thị `CDAB` tại ô **Answer**.

## Status / Related bugs
Not Run / None

## Test owner
Nguyễn Hoàng Liêm (23120290)
