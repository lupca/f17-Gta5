Trong project có file tên: data.js

File này lưu trữ cấu trúc của list video

File này gồm:
1. Gộp video theo nhóm
   - để ý từ khoá "key" và "label"
   - Hiện tại có 4 nhóm tương ứng 4 đối tượng trong file(newest, event, guides, share)

2. Mỗi video được hiển thị dựa vào id của video lấy từ url trong youtube
   - Để ý từ khoá videoIds, nó sẽ bao gồm danh sách các video(id của video)  

3. Theo mạc định, thì video hiển thị đầu tiên(video lớn) được lấy từ video đầu tiên cuả nhóm đầu tiên

