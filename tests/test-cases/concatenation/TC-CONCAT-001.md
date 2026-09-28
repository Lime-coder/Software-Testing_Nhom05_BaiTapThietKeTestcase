# TC-CONCAT-001: Nối hai chuỗi số nguyên dương hợp lệ

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
| First number | 12 |
| Second number | 34 |
| Operation | Concatenate |

## Test steps
1. Mở trang Basic Calculator
2. Chọn **Build** là `Prototype`
3. Nhập `12` vào ô **First number**
4. Nhập `34` vào ô **Second number**
5. Chọn `Concatenate` tại menu **Operation**
6. Bấm nút **Calculate**

## Expected result
Hệ thống xử lý hai giá trị đầu vào như chuỗi ký tự (không thực hiện phép cộng toán học), nối theo đúng thứ tự và hiển thị kết quả `1234` tại ô **Answer**. Không có thông báo lỗi nào hiển thị.

## Status / Related bugs
Not Run / None

## Test owner
Nguyễn Hoàng Liêm (23120290)
