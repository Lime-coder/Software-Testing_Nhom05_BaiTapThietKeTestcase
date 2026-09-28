# TC-CONCAT-006: Nối khi để trống cả hai ô dữ liệu đầu vào (Độ dài biên 0 ký tự)

## Requirement ID
FR-CONCAT-02

## Module / Test type / Technique
Concatenation / Functional / Boundary Value Analysis

## Preconditions
- Người dùng đang ở trang Basic Calculator (`https://testsheepnz.github.io/BasicCalculator.html#main-body`)
- Trường **Build** được chọn là `Prototype`

## Test data
| Field | Value |
| --- | --- |
| Build | Prototype |
| First number | (Để trống - 0 ký tự) |
| Second number | (Để trống - 0 ký tự) |
| Operation | Concatenate |

## Test steps
1. Mở trang Basic Calculator
2. Chọn **Build** là `Prototype`
3. Để trống cả hai ô **First number** và **Second number**
4. Chọn `Concatenate` tại menu **Operation**
5. Bấm nút **Calculate**

## Expected result
Hệ thống nối hai chuỗi rỗng và hiển thị chuỗi rỗng `""` tại ô **Answer**. Không có thông báo lỗi nào xuất hiện.

## Status / Related bugs
Not Run / None

## Test owner
Nguyễn Hoàng Liêm (23120290)
