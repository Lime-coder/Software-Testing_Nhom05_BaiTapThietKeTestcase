# TC-MUL-008: 0 × 0

## Requirement ID

FR-MUL-01

## Module / Test type / Technique

Multiplication / Functional / Equivalence Partitioning

## Preconditions

- User đang ở màn hình Multiplication
- Hai trường First number và Second number đang hiển thị
- Tùy chọn Integers only có thể được bật hoặc tắt

## Test data

| Field | Value |
| --- | --- |
| First number | `0` |
| Second number | `0` |
| Integers only | Off |

## Test steps

1. Mở màn hình Multiplication
2. Nhập `0` vào trường First number
3. Nhập `0` vào trường Second number
4. Đặt tùy chọn Integers only ở trạng thái Off
5. Bấm nút Calculate

## Expected result

Hệ thống hiển thị `0`.

## Test owner

Nguyễn Phúc Hậu

## Status / Related bugs

Not Run / None

