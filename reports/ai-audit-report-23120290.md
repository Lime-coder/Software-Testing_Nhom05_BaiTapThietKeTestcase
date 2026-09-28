# Báo Cáo Kiểm Toán Sử Dụng AI (AI Audit Report)

- **Họ và tên:** Nguyễn Hoàng Liêm
- **MSSV:** 23120290
- **Phân công:** Thiết kế Test Case, viết Playwright Test Script, thực thi kiểm thử tự động và lập Báo cáo lỗi cho chức năng **Concatenation** (`Concatenate`)

---

## Tuyên bố sử dụng AI

> **"Tôi sử dụng các công cụ AI cho những tác vụ sau:"**
> 1. Phân tích trang web [Basic Calculator](https://testsheepnz.github.io/BasicCalculator.html#main-body) (cấu trúc HTML, thuộc tính giới hạn đầu vào và logic xử lý JavaScript của phép tính `Concatenate`).
> 2. Thiết kế và khởi tạo bộ 12 Test Case (`TC-CONCAT-001` đến `TC-CONCAT-012`) theo đúng biểu mẫu chuẩn của nhóm cho phép tính `Concatenate`, áp dụng các kỹ thuật kiểm thử hộp đen: Phân vùng tương đương (Equivalence Partitioning), Phân tích giá trị biên (Boundary Value Analysis), Chuyển đổi trạng thái (State Transition) và Đoán lỗi (Error Guessing).
> 3. Xây dựng bộ kịch bản kiểm thử tự động Playwright theo mô hình Page Object Model (`ConcatenationPage`) và Data-Driven (`concatenationCases`) trong thư mục `tests/test-script/concatenation/`.
> 4. Cấu hình môi trường Playwright, thực thi kịch bản kiểm thử tự động trên bản Build `Prototype`, `Build 1` và `Build 2`.
> 5. Tổng hợp báo cáo thực thi kiểm thử (`concatenation-build-1-test-run.md` và `concatenation-build-2-test-run.md`) trong thư mục `tests/test-runs/`.
> 6. Phân tích nguyên nhân gốc (Root cause) và lập báo cáo lỗi (`BUG-CONCAT-001.md` cùng ảnh bằng chứng `BUG-CONCAT-001.png`) trong thư mục `tests/test-summary/`.

---

## Chi tiết các lần tương tác với AI

### Lần tương tác 1: Phân tích trang web và thiết kế Test Case cho phép tính Concatenate

- **Tên công cụ AI:** Google Antigravity (Model: Gemini 3.8 Flash High)
- **Ngày và giờ:** 2026-09-28 14:35:46 (GMT+7)
- **Câu lệnh (Prompt) của bạn:**
  ```text
  I have created the test-cases folder inside "D:\Science\Study\Technology\Software Testing\Submission-AI assisted\Folder\tests\test-cases", specifically I was assigned to write test case for folder "concatenation". Could you access this website "https://testsheepnz.github.io/BasicCalculator.html#main-body" and help me write test cases for the operation "Concatenate" using this template 
  "
  # TC-LOGIN-001: Đăng nhập thành công

  ## Requirement ID
  FR-LOGIN-01

  ## Module / Test type / Technique
  Login / Functional / Equivalence Partitioning

  ## Preconditions
  - User đã có tài khoản hợp lệ
  - User đang ở trang Login

  ## Test data
  | Email | user01@gmail.com |
  | Password | Abc@123456 |

  ## Test steps
  1. Mở trang Login
  2. Nhập email và password hợp lệ
  3. Bấm Login

  ## Expected result
  Đăng nhập thành công và chuyển về Home.

  ## Status / Related bugs
  Not Run / None

  ## Test owner
  Nguyễn Hoàng Liêm (23120290)
  "
  ```
  *(Kèm phản hồi làm rõ yêu cầu lúc `2026-09-28 14:38:57 GMT+7`:*
  - *Cách tổ chức file: Tách mỗi test case thành một file riêng biệt (`TC-CONCAT-001.md`, `TC-CONCAT-002.md`, ...)*
  - *Quy ước mã định danh: `TC-CONCAT-001` & `FR-CONCAT-01`*
  - *Phạm vi kiểm thử: Tập trung vào đặc tả chuẩn trên bản Build `Prototype` bao phủ các kỹ thuật EP, BVA, State Transition, Error Guessing).*

- **Kết quả do AI tạo ra:**
  AI đã truy cập trang `BasicCalculator.html`, phân tích yêu cầu nghiệp vụ của phép tính `Concatenate` (xử lý đầu vào như chuỗi ký tự, không kiểm tra kiểu số, ẩn tùy chọn `Integers only`, giới hạn `maxlength="10"` ở mỗi ô nhập) và tạo 12 file test case trong thư mục `tests/test-cases/concatenation/`:
  1. **`TC-CONCAT-001.md`** (`FR-CONCAT-01` - Equivalence Partitioning): Nối hai chuỗi số nguyên dương hợp lệ (`12` và `34` $\rightarrow$ `1234`, không cộng thành `46`).
  2. **`TC-CONCAT-002.md`** (`FR-CONCAT-01` - Equivalence Partitioning): Nối hai chuỗi ký tự chữ cái (`Hello` và `World` $\rightarrow$ `HelloWorld`) mà không báo lỗi kiểm tra số.
  3. **`TC-CONCAT-003.md`** (`FR-CONCAT-01` - Equivalence Partitioning): Nối chuỗi số âm và số thập phân (`-12.5` và `3.4` $\rightarrow$ `-12.53.4`).
  4. **`TC-CONCAT-004.md`** (`FR-CONCAT-01` - Equivalence Partitioning): Nối chuỗi kết hợp chữ, số và ký tự đặc biệt (`User_01@` và `#2026!` $\rightarrow$ `User_01@#2026!`).
  5. **`TC-CONCAT-005.md`** (`FR-CONCAT-01` - Equivalence Partitioning): Nối khi để trống ô `First number` và nhập chuỗi vào ô `Second number` (`""` và `Test123` $\rightarrow$ `Test123`).
  6. **`TC-CONCAT-006.md`** (`FR-CONCAT-02` - Boundary Value Analysis): Nối khi để trống cả hai ô dữ liệu đầu vào (biên tối thiểu 0 ký tự $\rightarrow$ `""`).
  7. **`TC-CONCAT-007.md`** (`FR-CONCAT-02` - Boundary Value Analysis): Nối hai chuỗi đạt độ dài biên tối đa 10 ký tự mỗi ô (`1234567890` và `abcdefghij` $\rightarrow$ `1234567890abcdefghij`).
  8. **`TC-CONCAT-008.md`** (`FR-CONCAT-02` - Boundary Value Analysis): Kiểm tra giới hạn `maxlength="10"` chặn ký tự thứ 11 trên các ô đầu vào (`1234567890A` và `abcdefghijB` $\rightarrow$ `1234567890abcdefghij`).
  9. **`TC-CONCAT-009.md`** (`FR-CONCAT-03` - State Transition): Kiểm tra tự động ẩn và hủy chọn checkbox `Integers only` khi chuyển từ `Add` sang `Concatenate` (`12.34` và `56.78` $\rightarrow$ `12.3456.78`).
  10. **`TC-CONCAT-010.md`** (`FR-CONCAT-01` - Error Guessing): Nối hai chuỗi có chứa ký tự khoảng trắng ở đầu và cuối (`"Hello "` và `" World"` $\rightarrow$ `"Hello  World"`).
  11. **`TC-CONCAT-011.md`** (`FR-CONCAT-01` - State Transition): Kiểm tra tính thứ tự (không giao hoán) và nối liên tiếp nhiều lần (`AB` + `CD` $\rightarrow$ `ABCD`, sau đó `CD` + `AB` $\rightarrow$ `CDAB`).
  12. **`TC-CONCAT-012.md`** (`FR-CONCAT-03` - State Transition): Kiểm tra xóa thông báo lỗi cũ (`Number 1 is not a number`) khi chuyển sang `Concatenate` và chức năng nút `Clear` xóa trống ô `Answer`.

---

### Lần tương tác 2: Tạo bộ kịch bản kiểm thử tự động Playwright ban đầu

- **Tên công cụ AI:** Google Antigravity (Model: Gemini 3.8 Flash High)
- **Ngày và giờ:** 2026-09-28 14:58:47 (GMT+7)
- **Câu lệnh (Prompt) của bạn:**
  ```text
  can you read folder "D:\Science\Study\Technology\Software Testing\Submission-AI assisted\Folder\tests\test-cases\concatenation" and write for me test script that I would use in playwright, and then stored them at folder location "D:\Science\Study\Technology\Software Testing\Submission-AI assisted\Folder\tests\test-script\concatenation"? the test cases are tested against this website "https://testsheepnz.github.io/BasicCalculator.html#main-body"
  ```
  *(Kèm phản hồi làm rõ qua modal chọn lựa lúc `2026-09-28 15:03:38 GMT+7`: Chọn ngôn ngữ JavaScript `.spec.js`, tạo file tương ứng từng test case và chỉ tạo các file test script).*

- **Kết quả do AI tạo ra:**
  AI đã khởi tạo 12 file test script Playwright độc lập từ `TC-CONCAT-001.spec.js` đến `TC-CONCAT-012.spec.js` trong thư mục `tests/test-script/concatenation/`.

---

### Lần tương tác 3: Tái cấu trúc bộ test script theo chuẩn Page Object Model & Data-Driven

- **Tên công cụ AI:** Google Antigravity (Model: Gemini 3.6 Flash High)
- **Ngày và giờ:** 2026-09-28 15:18:03 (GMT+7)
- **Câu lệnh (Prompt) của bạn:**
  ```text
  could you simplified the test script files for concatenation similar to how multiplication did?
  ```

- **Kết quả do AI tạo ra:**
  AI đã tham chiếu cấu trúc của module `multiplication` và tái cấu trúc toàn bộ bộ test script `concatenation` thành cấu trúc gọn nhẹ, chuẩn mực theo mô hình Page Object Model (POM) và Data-Driven Testing:
  1. `concatenation.page.js`: Định nghĩa lớp `ConcatenationPage` đóng gói các phần tử giao diện (`getByTestId`) và các phương thức tương tác (`goto`, `selectBuild`, `selectOperation`, `concatenate`, `expectOutput`, `clear`).
  2. `concatenation.data.js`: Khởi tạo mảng dữ liệu `concatenationCases` chứa thông tin dữ liệu kiểm thử và kết quả mong đợi cho các test case lặp lại.
  3. `concatenation.spec.js`: File thực thi kiểm thử chính, tự động duyệt mảng dữ liệu với `test.step()` và viết các hàm test riêng biệt cho các trường hợp đặc thù (TC-CONCAT-008 gõ từng phím với `pressSequentially`, TC-CONCAT-009 kiểm tra ẩn checkbox, TC-CONCAT-011 kiểm tra tính không giao hoán, TC-CONCAT-012 kiểm tra xóa lỗi cũ và nút Clear).
  4. `README.md`: Hướng dẫn chi tiết cách cài đặt và câu lệnh thực thi kiểm thử.

---

### Lần tương tác 4: Cấu hình môi trường Playwright, thực thi kiểm thử trên Build 1 & Build 2 và lập Test Run Report

- **Tên công cụ AI:** Google Antigravity (Model: Gemini 3.6 Flash High)
- **Ngày và giờ:** 2026-09-28 15:22:47 (GMT+7)
- **Câu lệnh (Prompt) của bạn:**
  ```text
  could you also setup playwright environment then test for me the concatenated script using playwright then write for me the test run for build 1, 2 in this website "https://testsheepnz.github.io/BasicCalculator.html#main-body". The report you could reference template from "multiplication-build-4-test-run.md" and "multiplication-build-4-test-run.md" in test-runs folder
  ```

- **Kết quả do AI tạo ra:**
  1. Cấu hình môi trường Playwright, cài đặt trình duyệt Chromium (`playwright chromium v1243`) và bổ sung script `"test:concatenation"` vào file `package.json`.
  2. Chạy kịch bản kiểm thử tự động trên 3 phiên bản Build:
     - **Prototype (Build 0):** 12/12 test case Passed (100%).
     - **Build 1:** 12/12 test case Passed (100%).
     - **Build 2:** 2/12 test case Passed, 10/12 test case Failed (Tỷ lệ thành công 16.67%).
  3. Tạo 2 file báo cáo thực thi kiểm thử theo đúng biểu mẫu tham chiếu:
     - `tests/test-runs/concatenation-build-1-test-run.md`
     - `tests/test-runs/concatenation-build-2-test-run.md`

---

### Lần tương tác 5: Lập báo cáo lỗi (Bug Report) cho các lỗi phát hiện trên Build 2

- **Tên công cụ AI:** Google Antigravity (Model: Gemini 3.6 Flash High)
- **Ngày và giờ:** 2026-09-28 15:34:32 (GMT+7)
- **Câu lệnh (Prompt) của bạn:**
  ```text
  based on the success rate, further write Test-summary for the bug occured during playwright test run in folder "test-summary", you can reference "BUG-MUL-001.md" and "BUG-MUL-002.md"
  ```

- **Kết quả do AI tạo ra:**
  1. Lập báo cáo lỗi chi tiết `tests/test-summary/BUG-CONCAT-001.md` tham chiếu từ mẫu `BUG-MUL-002.md`, mô tả lỗi `[BUG][Concatenation] Phép tính Concatenate bị hoán đổi thành Add trên Build 2`.
  2. Trích xuất và lưu ảnh bằng chứng thất bại `tests/test-summary/evidence/BUG-CONCAT-001.png`.

---

### Lần tương tác 6: Giải trình gom nhóm lỗi (Bug Grouping) và cập nhật Báo cáo kiểm toán AI

- **Tên công cụ AI:** Google Antigravity (Model: Gemini 3.6 Flash High)
- **Ngày và giờ:** 2026-09-28 15:41:27 (GMT+7)
- **Câu lệnh (Prompt) của bạn:**
  ```text
  why is that you only have 1 bug report but there are 10 test cases failed?
  ```

- **Kết quả do AI tạo ra:**
  AI đã giải thích nguyên lý quản lý chất lượng phần mềm (Software Quality Assurance): Gom 10 test case thất bại về 1 bug report duy nhất `BUG-CONCAT-001` vì cả 10 thất bại đều bắt nguồn từ 1 nguyên nhân gốc (Root cause) duy nhất trong mã nguồn Build 2 (đoạn mã 5 dòng tự động tráo `selection = 4` thành `selection = 0`). Cách quản lý này hoàn toàn đồng bộ với file `BUG-MUL-002.md` (gom 18 test case hỏng về 1 báo cáo bug).
