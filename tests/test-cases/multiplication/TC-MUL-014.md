# TC-MUL-014: Kết quả âm thập phân với Integer Only ON

## Requirement ID

FR-MUL-02

## Module / Test type / Technique

Multiplication / Functional / Equivalence Partitioning

## Preconditions

- User đang ở màn hình Multiplication
- Hai trường First number và Second number đang hiển thị
- Tùy chọn Integers only có thể được bật hoặc tắt

## Test data

| Field | Value |
| --- | --- |
| First number | `-2.5` |
| Second number | `3` |
| Integers only | On |

## Test steps

1. Mở màn hình Multiplication
2. Nhập `-2.5` vào trường First number
3. Nhập `3` vào trường Second number
4. Đặt tùy chọn Integers only ở trạng thái On
5. Bấm nút Calculate

## Expected result

Hệ thống hiển thị `-7`.

## Test owner

Nguyễn Phúc Hậu

## Status / Related bugs

Not Run / None

