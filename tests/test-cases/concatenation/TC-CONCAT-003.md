# TC-CONCAT-003: Nối chuỗi số âm và số thập phân

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
| First number | -12.5 |
| Second number | 3.4 |
| Operation | Concatenate |

## Test steps
1. Mở trang Basic Calculator
2. Chọn **Build** là `Prototype`
3. Nhập `-12.5` vào ô **First number**
4. Nhập `3.4` vào ô **Second number**
5. Chọn `Concatenate` tại menu **Operation**
6. Bấm nút **Calculate**

## Expected result
Hệ thống giữ nguyên dấu âm (`-`) và dấu chấm thập phân (`.`), nối trực tiếp hai chuỗi và hiển thị `-12.53.4` tại ô **Answer**.

## Status / Related bugs
Not Run / None

## Test owner
Nguyễn Hoàng Liêm (23120290)
