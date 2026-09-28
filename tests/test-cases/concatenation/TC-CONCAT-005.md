# TC-CONCAT-005: Nối khi để trống ô First number và nhập chuỗi vào ô Second number

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
| First number | (Để trống) |
| Second number | Test123 |
| Operation | Concatenate |

## Test steps
1. Mở trang Basic Calculator
2. Chọn **Build** là `Prototype`
3. Để trống ô **First number**
4. Nhập `Test123` vào ô **Second number**
5. Chọn `Concatenate` tại menu **Operation**
6. Bấm nút **Calculate**

## Expected result
Hệ thống xử lý ô **First number** như chuỗi rỗng `""`, nối với chuỗi ở ô **Second number** và hiển thị `Test123` tại ô **Answer** mà không báo lỗi.

## Status / Related bugs
Not Run / None

## Test owner
Nguyễn Hoàng Liêm (23120290)
