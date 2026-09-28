# TC-MUL-022: Nút Clear khả dụng sau khi chuyển sang build 5

## Requirement ID

FR-MUL-05

## Module / Test type / Technique

Multiplication / Functional / State Transition Testing

## Preconditions

- User đang ở trang Basic Calculator
- Build Prototype và build 5 có thể được chọn

## Test data

| Field | Value |
| --- | --- |
| Initial build | `Prototype` |
| Target build | `5` |
| First number | `5` |
| Second number | `4` |
| Operation | `Multiply` |

## Test steps

1. Mở trang Basic Calculator
2. Chọn build `Prototype` và operation `Multiply`
3. Nhập First number là `5` và Second number là `4`
4. Bấm Calculate và kiểm tra kết quả `20`
5. Chuyển sang build `5`
6. Bấm Clear

## Expected result

Nút Clear vẫn khả dụng và xóa kết quả đang hiển thị.

## Test owner

Nguyễn Phúc Hậu

## Status / Related bugs

Not Run / None
