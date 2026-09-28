# TC-CONCAT-009: Kiểm tra tự động ẩn và hủy chọn "Integers only" khi chọn phép tính Concatenate

## Requirement ID
FR-CONCAT-03

## Module / Test type / Technique
Concatenation / UI & Functional / State Transition

## Preconditions
- Người dùng đang ở trang Basic Calculator (`https://testsheepnz.github.io/BasicCalculator.html#main-body`)
- Trường **Build** được chọn là `Prototype`
- Trường **Operation** ban đầu đang ở giá trị mặc định là `Add`

## Test data
| Field | Value |
| --- | --- |
| Build | Prototype |
| First number | 12.34 |
| Second number | 56.78 |
| Operation (Ban đầu) | Add |
| Integers only (Ban đầu) | Checked (Đã tích chọn) |
| Operation (Chuyển sang) | Concatenate |

## Test steps
1. Mở trang Basic Calculator với **Operation** mặc định là `Add`
2. Tích chọn vào ô checkbox **Integers only**
3. Nhập `12.34` vào ô **First number** và `56.78` vào ô **Second number**
4. Đổi **Operation** từ `Add` sang `Concatenate`
5. Quan sát trạng thái của checkbox **Integers only** và bấm nút **Calculate**

## Expected result
Ngay khi chọn `Concatenate`, checkbox **Integers only** cùng nhãn đi kèm tự động bị ẩn đi và hủy trạng thái tích chọn. Sau khi bấm **Calculate**, ô **Answer** hiển thị đầy đủ chuỗi `12.3456.78` (không bị cắt phần thập phân thành số nguyên).

## Status / Related bugs
Not Run / None

## Test owner
Nguyễn Hoàng Liêm (23120290)
