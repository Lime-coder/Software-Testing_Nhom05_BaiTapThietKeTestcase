# TC-MUL-023: Clear xóa kết quả và đặt lại Integer Only

## Requirement ID

FR-MUL-05

## Module / Test type / Technique

Multiplication / Functional / State Transition Testing

## Preconditions

- User đang ở trang Basic Calculator
- Build 5 đã được chọn

## Test data

| Field | Value |
| --- | --- |
| Build | `5` |
| First number | `2.5` |
| Second number | `3` |
| Integers only | On |

## Test steps

1. Mở trang Basic Calculator
2. Chọn build `5` và operation `Multiply`
3. Nhập First number là `2.5` và Second number là `3`
4. Bật Integers only và bấm Calculate
5. Kiểm tra kết quả `7`
6. Bấm Clear

## Expected result

Kết quả được xóa và tùy chọn Integers only trở về trạng thái Off.

## Test owner

Nguyễn Phúc Hậu

## Status / Related bugs

Passed / None
