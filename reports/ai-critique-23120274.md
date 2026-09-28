Trong bài tập này, AI đã hỗ trợ tôi tạo 9 testcase cho chức năng division, tạo khung Playwright, viết báo cáo Test Run và mô tả bug. Tuy nhiên, tôi nhận thấy kết quả của AI không phải lúc nào cũng đúng và vẫn cần kiểm tra lại.

Ví dụ, tài liệu không có mã requirement nhưng AI tự đặt là `FR-DIV-001`. Đây chỉ là giả định của AI nên nếu sử dụng trực tiếp thì có thể làm sai phần traceability. AI cũng để Test Owner là `TBD`. 

Ngoài ra, báo cáo Test Run lúc đầu gộp hai build vào cùng một báo cáo nên sau đó phải tách lại. Hai bug report cũng cần có ID và liên kết riêng để đúng với phạm vi của từng bug.

Qua quá trình làm bài, tôi nhận ra AI thường dựa vào thông tin có sẵn hoặc các mẫu gần giống để đưa ra câu trả lời và ưu tiên hoàn thiện nhanh. Nếu tôi không cung cấp đủ requirement, template hoặc quy ước của nhóm thì AI có thể tự đưa ra giả định. Vì vậy, khi dùng AI tôi cần kiểm tra trực tiếp các file được tạo, tên file, ID, link và số liệu thay vì chỉ dựa vào câu trả lời của AI.

Qua bài này, tôi thấy AI phù hợp để hỗ trợ tạo nội dung và testcase ban đầu, nhưng người làm bài vẫn phải kiểm tra và chịu trách nhiệm về kết quả cuối cùng.
