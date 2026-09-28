# TC-CONCAT-002: Nối hai chuỗi ký tự chữ cái (Alphabetic strings)

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
| First number | Hello |
| Second number | World |
| Operation | Concatenate |

## Test steps
1. Mở trang Basic Calculator
2. Chọn **Build** là `Prototype`
3. Nhập `Hello` vào ô **First number**
4. Nhập `World` vào ô **Second number**
5. Chọn `Concatenate` tại menu **Operation**
6. Bấm nút **Calculate**

## Expected result
Hệ thống bỏ qua kiểm tra giá trị số đối với phép tính `Concatenate`, nối hai chuỗi ký tự và hiển thị `HelloWorld` tại ô **Answer**. Không hiển thị lỗi `Number 1 is not a number` hoặc `Number 2 is not a number`.

## Status / Related bugs
Not Run / None

## Test owner
Nguyễn Hoàng Liêm (23120290)
