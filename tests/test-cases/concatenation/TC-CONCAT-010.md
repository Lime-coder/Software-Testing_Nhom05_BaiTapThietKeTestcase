# TC-CONCAT-010: Nối hai chuỗi có chứa ký tự khoảng trắng (Whitespace)

## Requirement ID
FR-CONCAT-01

## Module / Test type / Technique
Concatenation / Functional / Error Guessing

## Preconditions
- Người dùng đang ở trang Basic Calculator (`https://testsheepnz.github.io/BasicCalculator.html#main-body`)
- Trường **Build** được chọn là `Prototype`

## Test data
| Field | Value |
| --- | --- |
| Build | Prototype |
| First number | "Hello " (có khoảng trắng ở cuối) |
| Second number | " World" (có khoảng trắng ở đầu) |
| Operation | Concatenate |

## Test steps
1. Mở trang Basic Calculator
2. Chọn **Build** là `Prototype`
3. Nhập `Hello ` (kèm 1 dấu cách ở cuối) vào ô **First number**
4. Nhập ` World` (kèm 1 dấu cách ở đầu) vào ô **Second number**
5. Chọn `Concatenate` tại menu **Operation**
6. Bấm nút **Calculate**

## Expected result
Hệ thống giữ nguyên các ký tự khoảng trắng của cả hai chuỗi đầu vào và hiển thị chính xác `Hello  World` (có 2 khoảng trắng ở giữa) tại ô **Answer**.

## Status / Related bugs
Not Run / None

## Test owner
Nguyễn Hoàng Liêm (23120290)
