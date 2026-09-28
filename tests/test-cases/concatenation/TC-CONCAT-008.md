# TC-CONCAT-008: Kiểm tra giới hạn nhập vượt quá biên tối đa (11 ký tự) trên các ô đầu vào

## Requirement ID
FR-CONCAT-02

## Module / Test type / Technique
Concatenation / Validation / Boundary Value Analysis

## Preconditions
- Người dùng đang ở trang Basic Calculator (`https://testsheepnz.github.io/BasicCalculator.html#main-body`)
- Trường **Build** được chọn là `Prototype`

## Test data
| Field | Value |
| --- | --- |
| Build | Prototype |
| First number | 1234567890A (11 ký tự) |
| Second number | abcdefghijB (11 ký tự) |
| Operation | Concatenate |

## Test steps
1. Mở trang Basic Calculator
2. Chọn **Build** là `Prototype`
3. Nhập chuỗi 11 ký tự `1234567890A` vào ô **First number**
4. Nhập chuỗi 11 ký tự `abcdefghijB` vào ô **Second number**
5. Chọn `Concatenate` tại menu **Operation**
6. Bấm nút **Calculate**

## Expected result
Do giới hạn `maxlength="10"`, ô **First number** chỉ nhận 10 ký tự đầu (`1234567890`) và ô **Second number** chỉ nhận 10 ký tự đầu (`abcdefghij`). Khi bấm **Calculate**, ô **Answer** hiển thị `1234567890abcdefghij`.

## Status / Related bugs
Not Run / None

## Test owner
Nguyễn Hoàng Liêm (23120290)
