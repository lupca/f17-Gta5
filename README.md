# Hưỡng dẫn deploy.

## Các khái niệm đầu tiên
- Docker là 1 server ảo, chạy trong máy thật.( file Dockerfile, và docker-compose.yml chứa config)
- nodejs trình thông dịch thực thi mã JavaScript
- NPM Node package manager là một công cụ tạo và quản lý các thư viện lập trình Javascript cho Node.js.

## 2 Cách cài.
### Cách 1: Không phụ thuộc môi trường
  - Với khái niện Docker bên trên, chúng ta sẽ upweb chỉ với 1 click hoặc 1 dòng lệnh bằng cách cài docker.

  - Máy ảo này chạy trên bất kỳ máy thật nào được cài docker.
  Việc còn lại để docker lo(các tác vụ tự động được code ở 2 file trong khái niệm)
### Cách 2: Phụ thuộc môi trường.
  - Cách này đòi hỏi phải cài các thư viện phức tạp liên quan(cũng ko quá nhiều)
  - Nhược điểm so với cách 1 là dễ phát sinh lỗi do cài nhiều và mỗi loại máy cài 1 cách khác nhau.
  - Ưu điểm là tự kiểm soát, không phụ thuộc docker
## Cách 1: Không phụ thuộc môi trường
Server cần có:
1. Cài sẵn docker
- Link cài linux: [Trang chủ intall](https://docs.docker.com/engine/install/ubuntu/)
- Link cho window: [Trang chủ install](https://docs.docker.com/desktop/windows/install/)

2. Run web với 1 dòng lệnh
- di chuyển dòng lệnh tới thư mục dự án này.
- Sau đó dùng lệnh: docker-compose -f compose.yml up --build -d

Giải thích: 
- `docker-compose` là từ khoá của docker.
- -f compose.yml là chỉ định file: - compose.yml
- `up` là báo cho docker biết: chúng ta muốn đưa ứng dụng lên(vào) trong container để sử dụng
- --build đây là option, báo cho docker biết: chúng ta sẽ build ứng dụng này(thư mục hiện tại)
- -d là Detached mode, chạy web ở chế độ backgroud
## Cách 2: Phụ thuộc môi trường.
Server cần có:
1. Nodejs: [Tại đây có file cài đặt, hãy chọn hệ điều hành đang dùng](https://nodejs.org/en/download/)
- Link Nodejs cho window: [here](https://nodejs.org/dist/v16.15.0/node-v16.15.0-x86.msi)

2. Cài đặt + run web

- npm là từ khoá thuộc NPM(cần cài nodejs trước)
- install yêu cầu cài đặt ứng dụng nào đó
- -g global: Cài cho toàn hệ thống sử dụng( chứ ko chỉ cho ứng dụng hiện tại)

***Lưu ý***: cần cấp quyền cao nhất khi cài các thư viện dưới
1. Cài máy chủ xử lý nhận request và handle.
- npm install -g serve

2. Cài các gói phụ thuộc nodejs
- Dùng lệnh: npm install

3. Bắt đầu build
- npm run build

4. Run server:
- serve -s build

5. [option] Run server with port
- serve -s build -l 4000

# Tài liệu liên quan web:
To be continues...
