# TC-MUL-019: Second number chứa ký tự đặc biệt

## Requirement ID

FR-MUL-03

## Module / Test type / Technique

Multiplication / Functional / Equivalence Partitioning

## Preconditions

- User đang ở màn hình Multiplication
- Hai trường First number và Second number đang hiển thị
- Tùy chọn Integers only có thể được bật hoặc tắt

## Test data

| Field | Value |
| --- | --- |
| First number | `5` |
| Second number | `@#$` |
| Integers only | Off |

## Test steps

1. Mở màn hình Multiplication
2. Nhập `5` vào trường First number
3. Nhập `@#$` vào trường Second number
4. Đặt tùy chọn Integers only ở trạng thái Off
5. Bấm nút Calculate

## Expected result

Hệ thống hiển thị `Number 2 is not a number`.

## Test owner

Nguyễn Phúc Hậu

## Status / Related bugs

Passed / None
