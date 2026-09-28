# TC-MUL-002: Nhân số nguyên dương lớn hơn

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
| First number | `123` |
| Second number | `45` |
| Integers only | Off |

## Test steps

1. Mở màn hình Multiplication
2. Nhập `123` vào trường First number
3. Nhập `45` vào trường Second number
4. Đặt tùy chọn Integers only ở trạng thái Off
5. Bấm nút Calculate

## Expected result

Hệ thống hiển thị `5535`.

## Test owner

Nguyễn Phúc Hậu

## Status / Related bugs

Passed / None
