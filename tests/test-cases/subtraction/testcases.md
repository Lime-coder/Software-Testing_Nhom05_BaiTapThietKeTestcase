# TC-SUB-001: Trừ hai số nguyên dương (Số thứ nhất lớn hơn số thứ hai)

## Requirement ID
FR-CALC-SUB-01

## Module / Test type / Technique
Subtraction / Functional / Equivalence Partitioning

## Preconditions
- Người dùng đã truy cập vào trang web Basic Calculator: https://testsheepnz.github.io/BasicCalculator.html
- Trang web tải hoàn tất và hiển thị đầy đủ các trường nhập liệu

## Test data
| Build | Prototype |
| First number | 50 |
| Second number | 20 |
| Operation | Subtract |
| Integers only | Unchecked |

## Test steps
1. Chọn Build là "Prototype"
2. Nhập "50" vào trường "First number"
3. Nhập "20" vào trường "Second number"
4. Chọn phép toán "Subtract" tại dropdown "Operation"
5. Đảm bảo checkbox "Integers only" không được chọn
6. Nhấn nút "Calculate"

## Expected result
Trường "Answer" hiển thị kết quả chính xác là "30".

## Status / Related bugs
Not Run / None

---

# TC-SUB-002: Trừ hai số nguyên dương (Số thứ nhất nhỏ hơn số thứ hai)

## Requirement ID
FR-CALC-SUB-01

## Module / Test type / Technique
Subtraction / Functional / Equivalence Partitioning

## Preconditions
- Người dùng đã truy cập vào trang web Basic Calculator: https://testsheepnz.github.io/BasicCalculator.html
- Trang web tải hoàn tất

## Test data
| Build | Prototype |
| First number | 15 |
| Second number | 40 |
| Operation | Subtract |
| Integers only | Unchecked |

## Test steps
1. Chọn Build là "Prototype"
2. Nhập "15" vào trường "First number"
3. Nhập "40" vào trường "Second number"
4. Chọn phép toán "Subtract" tại dropdown "Operation"
5. Đảm bảo checkbox "Integers only" không được chọn
6. Nhấn nút "Calculate"

## Expected result
Trường "Answer" hiển thị kết quả là số âm chính xác: "-25".

## Status / Related bugs
Not Run / None

---

# TC-SUB-003: Trừ hai số nguyên dương bằng nhau

## Requirement ID
FR-CALC-SUB-01

## Module / Test type / Technique
Subtraction / Functional / Boundary Value Analysis

## Preconditions
- Người dùng đã truy cập vào trang web Basic Calculator: https://testsheepnz.github.io/BasicCalculator.html
- Trang web tải hoàn tất

## Test data
| Build | Prototype |
| First number | 100 |
| Second number | 100 |
| Operation | Subtract |
| Integers only | Unchecked |

## Test steps
1. Chọn Build là "Prototype"
2. Nhập "100" vào trường "First number"
3. Nhập "100" vào trường "Second number"
4. Chọn phép toán "Subtract" tại dropdown "Operation"
5. Đảm bảo checkbox "Integers only" không được chọn
6. Nhấn nút "Calculate"

## Expected result
Trường "Answer" hiển thị kết quả là "0".

## Status / Related bugs
Not Run / None

---

# TC-SUB-004: Trừ một số nguyên dương cho số 0

## Requirement ID
FR-CALC-SUB-01

## Module / Test type / Technique
Subtraction / Functional / Boundary Value Analysis

## Preconditions
- Người dùng đã truy cập vào trang web Basic Calculator: https://testsheepnz.github.io/BasicCalculator.html
- Trang web tải hoàn tất

## Test data
| Build | Prototype |
| First number | 88 |
| Second number | 0 |
| Operation | Subtract |
| Integers only | Unchecked |

## Test steps
1. Chọn Build là "Prototype"
2. Nhập "88" vào trường "First number"
3. Nhập "0" vào trường "Second number"
4. Chọn phép toán "Subtract" tại dropdown "Operation"
5. Đảm bảo checkbox "Integers only" không được chọn
6. Nhấn nút "Calculate"

## Expected result
Trường "Answer" hiển thị kết quả giữ nguyên giá trị ban đầu là "88".

## Status / Related bugs
Not Run / None

---

# TC-SUB-005: Trừ số 0 cho một số nguyên dương

## Requirement ID
FR-CALC-SUB-01

## Module / Test type / Technique
Subtraction / Functional / Boundary Value Analysis

## Preconditions
- Người dùng đã truy cập vào trang web Basic Calculator: https://testsheepnz.github.io/BasicCalculator.html
- Trang web tải hoàn tất

## Test data
| Build | Prototype |
| First number | 0 |
| Second number | 45 |
| Operation | Subtract |
| Integers only | Unchecked |

## Test steps
1. Chọn Build là "Prototype"
2. Nhập "0" vào trường "First number"
3. Nhập "45" vào trường "Second number"
4. Chọn phép toán "Subtract" tại dropdown "Operation"
5. Đảm bảo checkbox "Integers only" không được chọn
6. Nhấn nút "Calculate"

## Expected result
Trường "Answer" hiển thị kết quả là "-45".

## Status / Related bugs
Not Run / None

---

# TC-SUB-006: Trừ hai số 0 với nhau (0 - 0)

## Requirement ID
FR-CALC-SUB-01

## Module / Test type / Technique
Subtraction / Functional / Boundary Value Analysis

## Preconditions
- Người dùng đã truy cập vào trang web Basic Calculator: https://testsheepnz.github.io/BasicCalculator.html
- Trang web tải hoàn tất

## Test data
| Build | Prototype |
| First number | 0 |
| Second number | 0 |
| Operation | Subtract |
| Integers only | Unchecked |

## Test steps
1. Chọn Build là "Prototype"
2. Nhập "0" vào trường "First number"
3. Nhập "0" vào trường "Second number"
4. Chọn phép toán "Subtract" tại dropdown "Operation"
5. Đảm bảo checkbox "Integers only" không được chọn
6. Nhấn nút "Calculate"

## Expected result
Trường "Answer" hiển thị kết quả là "0".

## Status / Related bugs
Not Run / None

---

# TC-SUB-007: Trừ số âm cho số dương

## Requirement ID
FR-CALC-SUB-01

## Module / Test type / Technique
Subtraction / Functional / Equivalence Partitioning

## Preconditions
- Người dùng đã truy cập vào trang web Basic Calculator: https://testsheepnz.github.io/BasicCalculator.html
- Trang web tải hoàn tất

## Test data
| Build | Prototype |
| First number | -30 |
| Second number | 20 |
| Operation | Subtract |
| Integers only | Unchecked |

## Test steps
1. Chọn Build là "Prototype"
2. Nhập "-30" vào trường "First number"
3. Nhập "20" vào trường "Second number"
4. Chọn phép toán "Subtract" tại dropdown "Operation"
5. Đảm bảo checkbox "Integers only" không được chọn
6. Nhấn nút "Calculate"

## Expected result
Trường "Answer" hiển thị kết quả chính xác là "-50".

## Status / Related bugs
Not Run / None

---

# TC-SUB-008: Trừ số dương cho số âm

## Requirement ID
FR-CALC-SUB-01

## Module / Test type / Technique
Subtraction / Functional / Equivalence Partitioning

## Preconditions
- Người dùng đã truy cập vào trang web Basic Calculator: https://testsheepnz.github.io/BasicCalculator.html
- Trang web tải hoàn tất

## Test data
| Build | Prototype |
| First number | 50 |
| Second number | -25 |
| Operation | Subtract |
| Integers only | Unchecked |

## Test steps
1. Chọn Build là "Prototype"
2. Nhập "50" vào trường "First number"
3. Nhập "-25" vào trường "Second number"
4. Chọn phép toán "Subtract" tại dropdown "Operation"
5. Đảm bảo checkbox "Integers only" không được chọn
6. Nhấn nút "Calculate"

## Expected result
Trường "Answer" hiển thị kết quả chính xác là "75".

## Status / Related bugs
Not Run / None

---

# TC-SUB-009: Trừ hai số nguyên âm

## Requirement ID
FR-CALC-SUB-01

## Module / Test type / Technique
Subtraction / Functional / Equivalence Partitioning

## Preconditions
- Người dùng đã truy cập vào trang web Basic Calculator: https://testsheepnz.github.io/BasicCalculator.html
- Trang web tải hoàn tất

## Test data
| Build | Prototype |
| First number | -15 |
| Second number | -35 |
| Operation | Subtract |
| Integers only | Unchecked |

## Test steps
1. Chọn Build là "Prototype"
2. Nhập "-15" vào trường "First number"
3. Nhập "-35" vào trường "Second number"
4. Chọn phép toán "Subtract" tại dropdown "Operation"
5. Đảm bảo checkbox "Integers only" không được chọn
6. Nhấn nút "Calculate"

## Expected result
Trường "Answer" hiển thị kết quả chính xác là "20".

## Status / Related bugs
Not Run / None

---

# TC-SUB-010: Trừ hai số thập phân (Số thực dương)

## Requirement ID
FR-CALC-SUB-01

## Module / Test type / Technique
Subtraction / Functional / Equivalence Partitioning

## Preconditions
- Người dùng đã truy cập vào trang web Basic Calculator: https://testsheepnz.github.io/BasicCalculator.html
- Trang web tải hoàn tất

## Test data
| Build | Prototype |
| First number | 25.75 |
| Second number | 10.25 |
| Operation | Subtract |
| Integers only | Unchecked |

## Test steps
1. Chọn Build là "Prototype"
2. Nhập "25.75" vào trường "First number"
3. Nhập "10.25" vào trường "Second number"
4. Chọn phép toán "Subtract" tại dropdown "Operation"
5. Đảm bảo checkbox "Integers only" không được chọn
6. Nhấn nút "Calculate"

## Expected result
Trường "Answer" hiển thị kết quả chính xác là "15.5".

## Status / Related bugs
Not Run / None

---

# TC-SUB-011: Trừ hai số thập phân âm và dương

## Requirement ID
FR-CALC-SUB-01

## Module / Test type / Technique
Subtraction / Functional / Equivalence Partitioning

## Preconditions
- Người dùng đã truy cập vào trang web Basic Calculator: https://testsheepnz.github.io/BasicCalculator.html
- Trang web tải hoàn tất

## Test data
| Build | Prototype |
| First number | -12.4 |
| Second number | 8.6 |
| Operation | Subtract |
| Integers only | Unchecked |

## Test steps
1. Chọn Build là "Prototype"
2. Nhập "-12.4" vào trường "First number"
3. Nhập "8.6" vào trường "Second number"
4. Chọn phép toán "Subtract" tại dropdown "Operation"
5. Đảm bảo checkbox "Integers only" không được chọn
6. Nhấn nút "Calculate"

## Expected result
Trường "Answer" hiển thị kết quả chính xác là "-21".

## Status / Related bugs
Not Run / None

---

# TC-SUB-012: Trừ hai số nguyên rất lớn (Biên trên)

## Requirement ID
FR-CALC-SUB-01

## Module / Test type / Technique
Subtraction / Functional / Boundary Value Analysis

## Preconditions
- Người dùng đã truy cập vào trang web Basic Calculator: https://testsheepnz.github.io/BasicCalculator.html
- Trang web tải hoàn tất

## Test data
| Build | Prototype |
| First number | 999999999 |
| Second number | 1 |
| Operation | Subtract |
| Integers only | Unchecked |

## Test steps
1. Chọn Build là "Prototype"
2. Nhập "999999999" vào trường "First number"
3. Nhập "1" vào trường "Second number"
4. Chọn phép toán "Subtract" tại dropdown "Operation"
5. Đảm bảo checkbox "Integers only" không được chọn
6. Nhấn nút "Calculate"

## Expected result
Trường "Answer" hiển thị kết quả chính xác là "999999998".

## Status / Related bugs
Not Run / None

---

# TC-SUB-013: Trừ hai số thập phân khi kích hoạt tuỳ chọn "Integers only"

## Requirement ID
FR-CALC-SUB-01

## Module / Test type / Technique
Subtraction / Functional / Equivalence Partitioning

## Preconditions
- Người dùng đã truy cập vào trang web Basic Calculator: https://testsheepnz.github.io/BasicCalculator.html
- Trang web tải hoàn tất

## Test data
| Build | Prototype |
| First number | 15.8 |
| Second number | 5.2 |
| Operation | Subtract |
| Integers only | Checked |

## Test steps
1. Chọn Build là "Prototype"
2. Nhập "15.8" vào trường "First number"
3. Nhập "5.2" vào trường "Second number"
4. Chọn phép toán "Subtract" tại dropdown "Operation"
5. Tích chọn checkbox "Integers only"
6. Nhấn nút "Calculate"

## Expected result
Trường "Answer" hiển thị kết quả dưới dạng số nguyên được làm tròn/cắt gọt (kết quả nguyên: "10" hoặc "11" tuỳ theo quy tắc làm tròn nguyên của hệ thống, không chứa phần thập phân).

## Status / Related bugs
Not Run / None

---

# TC-SUB-014: Trừ hai số nguyên khi kích hoạt tuỳ chọn "Integers only"

## Requirement ID
FR-CALC-SUB-01

## Module / Test type / Technique
Subtraction / Functional / Equivalence Partitioning

## Preconditions
- Người dùng đã truy cập vào trang web Basic Calculator: https://testsheepnz.github.io/BasicCalculator.html
- Trang web tải hoàn tất

## Test data
| Build | Prototype |
| First number | 50 |
| Second number | 18 |
| Operation | Subtract |
| Integers only | Checked |

## Test steps
1. Chọn Build là "Prototype"
2. Nhập "50" vào trường "First number"
3. Nhập "18" vào trường "Second number"
4. Chọn phép toán "Subtract" tại dropdown "Operation"
5. Tích chọn checkbox "Integers only"
6. Nhấn nút "Calculate"

## Expected result
Trường "Answer" hiển thị kết quả là số nguyên chính xác: "32".

## Status / Related bugs
Not Run / None

---

# TC-SUB-015: Để trống trường "First number" khi thực hiện phép trừ

## Requirement ID
FR-CALC-SUB-01

## Module / Test type / Technique
Subtraction / Functional / Error Guessing

## Preconditions
- Người dùng đã truy cập vào trang web Basic Calculator: https://testsheepnz.github.io/BasicCalculator.html
- Trang web tải hoàn tất

## Test data
| Build | Prototype |
| First number | (Để trống) |
| Second number | 20 |
| Operation | Subtract |
| Integers only | Unchecked |

## Test steps
1. Chọn Build là "Prototype"
2. Để trống trường "First number"
3. Nhập "20" vào trường "Second number"
4. Chọn phép toán "Subtract" tại dropdown "Operation"
5. Nhấn nút "Calculate"

## Expected result
Hệ thống hiển thị thông báo lỗi yêu cầu nhập số hợp lệ tại First number (hoặc không thực hiện phép tính và hiển thị thông báo lỗi tại Answer/giao diện).

## Status / Related bugs
Not Run / None

---

# TC-SUB-016: Để trống trường "Second number" khi thực hiện phép trừ

## Requirement ID
FR-CALC-SUB-01

## Module / Test type / Technique
Subtraction / Functional / Error Guessing

## Preconditions
- Người dùng đã truy cập vào trang web Basic Calculator: https://testsheepnz.github.io/BasicCalculator.html
- Trang web tải hoàn tất

## Test data
| Build | Prototype |
| First number | 50 |
| Second number | (Để trống) |
| Operation | Subtract |
| Integers only | Unchecked |

## Test steps
1. Chọn Build là "Prototype"
2. Nhập "50" vào trường "First number"
3. Để trống trường "Second number"
4. Chọn phép toán "Subtract" tại dropdown "Operation"
5. Nhấn nút "Calculate"

## Expected result
Hệ thống hiển thị thông báo lỗi yêu cầu nhập số hợp lệ tại Second number (hoặc không thực hiện phép tính và hiển thị thông báo lỗi tại Answer/giao diện).

## Status / Related bugs
Not Run / None

---

# TC-SUB-017: Để trống cả hai trường "First number" và "Second number"

## Requirement ID
FR-CALC-SUB-01

## Module / Test type / Technique
Subtraction / Functional / Error Guessing

## Preconditions
- Người dùng đã truy cập vào trang web Basic Calculator: https://testsheepnz.github.io/BasicCalculator.html
- Trang web tải hoàn tất

## Test data
| Build | Prototype |
| First number | (Để trống) |
| Second number | (Để trống) |
| Operation | Subtract |
| Integers only | Unchecked |

## Test steps
1. Chọn Build là "Prototype"
2. Để trống cả hai trường "First number" và "Second number"
3. Chọn phép toán "Subtract" tại dropdown "Operation"
4. Nhấn nút "Calculate"

## Expected result
Hệ thống cảnh báo lỗi dữ liệu đầu vào và không thực hiện phép trừ.

## Status / Related bugs
Not Run / None

---

# TC-SUB-018: Nhập ký tự chữ vào trường "First number"

## Requirement ID
FR-CALC-SUB-01

## Module / Test type / Technique
Subtraction / Functional / Equivalence Partitioning (Invalid)

## Preconditions
- Người dùng đã truy cập vào trang web Basic Calculator: https://testsheepnz.github.io/BasicCalculator.html
- Trang web tải hoàn tất

## Test data
| Build | Prototype |
| First number | abc |
| Second number | 10 |
| Operation | Subtract |
| Integers only | Unchecked |

## Test steps
1. Chọn Build là "Prototype"
2. Nhập "abc" vào trường "First number"
3. Nhập "10" vào trường "Second number"
4. Chọn phép toán "Subtract" tại dropdown "Operation"
5. Nhấn nút "Calculate"

## Expected result
Hệ thống báo lỗi giá trị nhập vào không phải là số hợp lệ tại "First number".

## Status / Related bugs
Not Run / None

---

# TC-SUB-019: Nhập ký tự chữ vào trường "Second number"

## Requirement ID
FR-CALC-SUB-01

## Module / Test type / Technique
Subtraction / Functional / Equivalence Partitioning (Invalid)

## Preconditions
- Người dùng đã truy cập vào trang web Basic Calculator: https://testsheepnz.github.io/BasicCalculator.html
- Trang web tải hoàn tất

## Test data
| Build | Prototype |
| First number | 30 |
| Second number | xyz |
| Operation | Subtract |
| Integers only | Unchecked |

## Test steps
1. Chọn Build là "Prototype"
2. Nhập "30" vào trường "First number"
3. Nhập "xyz" vào trường "Second number"
4. Chọn phép toán "Subtract" tại dropdown "Operation"
5. Nhấn nút "Calculate"

## Expected result
Hệ thống báo lỗi giá trị nhập vào không phải là số hợp lệ tại "Second number".

## Status / Related bugs
Not Run / None

---

# TC-SUB-020: Nhập ký tự đặc biệt vào các trường nhập liệu

## Requirement ID
FR-CALC-SUB-01

## Module / Test type / Technique
Subtraction / Functional / Error Guessing

## Preconditions
- Người dùng đã truy cập vào trang web Basic Calculator: https://testsheepnz.github.io/BasicCalculator.html
- Trang web tải hoàn tất

## Test data
| Build | Prototype |
| First number | @#$% |
| Second number | &*() |
| Operation | Subtract |
| Integers only | Unchecked |

## Test steps
1. Chọn Build là "Prototype"
2. Nhập "@#$%" vào trường "First number"
3. Nhập "&*()" vào trường "Second number"
4. Chọn phép toán "Subtract" tại dropdown "Operation"
5. Nhấn nút "Calculate"

## Expected result
Hệ thống không thực hiện phép tính và thông báo lỗi dữ liệu không hợp lệ.

## Status / Related bugs
Not Run / None

---

# TC-SUB-021: Nhập định dạng số có nhiều dấu chấm thập phân không hợp lệ

## Requirement ID
FR-CALC-SUB-01

## Module / Test type / Technique
Subtraction / Functional / Error Guessing

## Preconditions
- Người dùng đã truy cập vào trang web Basic Calculator: https://testsheepnz.github.io/BasicCalculator.html
- Trang web tải hoàn tất

## Test data
| Build | Prototype |
| First number | 12.3.4 |
| Second number | 5 |
| Operation | Subtract |
| Integers only | Unchecked |

## Test steps
1. Chọn Build là "Prototype"
2. Nhập "12.3.4" vào trường "First number"
3. Nhập "5" vào trường "Second number"
4. Chọn phép toán "Subtract" tại dropdown "Operation"
5. Nhấn nút "Calculate"

## Expected result
Hệ thống từ chối tính toán và hiển thị thông báo lỗi định dạng số không hợp lệ.

## Status / Related bugs
Not Run / None

---

# TC-SUB-022: Nhập khoảng trắng (spaces) vào các trường nhập liệu

## Requirement ID
FR-CALC-SUB-01

## Module / Test type / Technique
Subtraction / Functional / Error Guessing

## Preconditions
- Người dùng đã truy cập vào trang web Basic Calculator: https://testsheepnz.github.io/BasicCalculator.html
- Trang web tải hoàn tất

## Test data
| Build | Prototype |
| First number | &nbsp;&nbsp;&nbsp; |
| Second number | 15 |
| Operation | Subtract |
| Integers only | Unchecked |

## Test steps
1. Chọn Build là "Prototype"
2. Nhập các ký tự khoảng trắng vào trường "First number"
3. Nhập "15" vào trường "Second number"
4. Chọn phép toán "Subtract" tại dropdown "Operation"
5. Nhấn nút "Calculate"

## Expected result
Hệ thống xử lý khoảng trắng như trường trống hoặc báo lỗi không phải định dạng số hợp lệ.

## Status / Related bugs
Not Run / None

---

# TC-SUB-023: Kiểm tra tính năng Clear kết quả sau khi thực hiện phép trừ

## Requirement ID
FR-CALC-SUB-01

## Module / Test type / Technique
Subtraction / Functional / State Transition

## Preconditions
- Người dùng đã truy cập vào trang web Basic Calculator: https://testsheepnz.github.io/BasicCalculator.html
- Đã thực hiện thành công một phép tính trừ và có hiển thị kết quả tại ô "Answer"

## Test data
| Build | Prototype |
| First number | 70 |
| Second number | 30 |
| Operation | Subtract |
| Integers only | Unchecked |

## Test steps
1. Nhập "70" vào "First number", "30" vào "Second number", chọn "Subtract" và nhấn "Calculate"
2. Kiểm tra ô "Answer" hiển thị "40"
3. Nhấn nút "Clear" (nếu có nút Clear trên giao diện) hoặc xóa dữ liệu ô nhập

## Expected result
Các trường dữ liệu và trường "Answer" được xoá sạch / trở về trạng thái rỗng ban đầu.

## Status / Related bugs
Not Run / None

---

# TC-SUB-024: Kiểm tra phép trừ trên các phiên bản Build khác nhau (Build 1 - 9) để tìm lỗi

## Requirement ID
FR-CALC-SUB-01

## Module / Test type / Technique
Subtraction / Functional / Defect Finding

## Preconditions
- Người dùng đã truy cập vào trang web Basic Calculator: https://testsheepnz.github.io/BasicCalculator.html
- Trang web tải hoàn tất

## Test data
| Build | 1 (hoặc lần lượt 2 -> 9) |
| First number | 20 |
| Second number | 8 |
| Operation | Subtract |
| Integers only | Unchecked |

## Test steps
1. Chọn Build (ví dụ: "1") từ dropdown "Build"
2. Nhập "20" vào "First number"
3. Nhập "8" vào "Second number"
4. Chọn phép toán "Subtract" tại dropdown "Operation"
5. Nhấn nút "Calculate"
6. So sánh kết quả hiển thị ở ô "Answer" với kết quả chuẩn (12) của Prototype

## Expected result
Ghi nhận kết quả trả về của từng Build để đối chiếu xem Build có hoạt động đúng như Prototype hay phát sinh lỗi tính toán/giao diện.

## Status / Related bugs
Not Run / None
