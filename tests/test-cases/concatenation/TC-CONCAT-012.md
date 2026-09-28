# TC-CONCAT-012: Kiểm tra xóa thông báo lỗi cũ và chức năng nút Clear sau khi thực hiện Concatenate

## Requirement ID
FR-CONCAT-03

## Module / Test type / Technique
Concatenation / Functional / State Transition

## Preconditions
- Người dùng đang ở trang Basic Calculator (`https://testsheepnz.github.io/BasicCalculator.html#main-body`)
- Trường **Build** được chọn là `Prototype`

## Test data
| Field | Value |
| --- | --- |
| Build | Prototype |
| First number | abc |
| Second number | 123 |
| Operation (Bước 3) | Add |
| Operation (Bước 4) | Concatenate |

## Test steps
1. Mở trang Basic Calculator và chọn **Build** là `Prototype`
2. Nhập `abc` vào ô **First number** và `123` vào ô **Second number**
3. Để **Operation** là `Add` và bấm **Calculate** (hệ thống hiển thị lỗi `Number 1 is not a number`)
4. Chuyển **Operation** sang `Concatenate` và bấm **Calculate**
5. Bấm nút **Clear**

## Expected result
- Tại bước 4: Thông báo lỗi `Number 1 is not a number` được xóa bỏ và ô **Answer** hiển thị `abc123`.
- Tại bước 5: Khi bấm nút **Clear**, giá trị trong ô **Answer** được xóa trống về `""` và không có thông báo lỗi nào hiển thị.

## Status / Related bugs
Not Run / None

## Test owner
Nguyễn Hoàng Liêm (23120290)
