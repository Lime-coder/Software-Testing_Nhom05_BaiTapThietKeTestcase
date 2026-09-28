# TC-CONCAT-007: Nối hai chuỗi đạt độ dài biên tối đa (10 ký tự mỗi ô)

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
| First number | 1234567890 |
| Second number | abcdefghij |
| Operation | Concatenate |

## Test steps
1. Mở trang Basic Calculator
2. Chọn **Build** là `Prototype`
3. Nhập chuỗi 10 ký tự `1234567890` vào ô **First number**
4. Nhập chuỗi 10 ký tự `abcdefghij` vào ô **Second number**
5. Chọn `Concatenate` tại menu **Operation**
6. Bấm nút **Calculate**

## Expected result
Cả hai ô nhập liệu nhận đủ 10 ký tự. Sau khi bấm **Calculate**, ô **Answer** hiển thị đầy đủ chuỗi kết quả dài 20 ký tự là `1234567890abcdefghij`.

## Status / Related bugs
Not Run / None

## Test owner
Nguyễn Hoàng Liêm (23120290)
