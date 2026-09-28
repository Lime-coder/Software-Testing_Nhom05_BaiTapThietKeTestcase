# TC-MUL-021: Nút Clear khả dụng khi chọn build 5

## Requirement ID

FR-MUL-05

## Module / Test type / Technique

Multiplication / Functional / State Transition Testing

## Preconditions

- User đang ở trang Basic Calculator
- Build 5 có thể được chọn

## Test data

| Field | Value |
| --- | --- |
| Build | `5` |
| Operation | `Multiply` |

## Test steps

1. Mở trang Basic Calculator
2. Chọn build `5`
3. Chọn operation `Multiply`
4. Quan sát trạng thái nút Clear trước khi thực hiện phép tính

## Expected result

Nút Clear hiển thị và cho phép user bấm.

## Test owner

Nguyễn Phúc Hậu

## Status / Related bugs

Failed / BUG-MUL-001
