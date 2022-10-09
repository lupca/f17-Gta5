# Thay đổi slideshow, tính năng game

## Ảnh và nội dung được lưu ở file:
src/assets/images/index.js

## Cấu trúc:

File này(index.js trên) bao gồm đường dẫn tới các ảnh và gồm cả nội dung của slideshow.

Tất cả ảnh slide nằm ở thư mục /src/assets/images/features

Lưu ý, tên ảnh phải đồng bộ, ví dụ sửa tên ảnh mà không sửa code sẽ không nhận ảnh.

## Nơi để thay đổi nội dung:
1. Tìm dòng có nội dung sau:: 
```js
Features: [
```

2. Đổi nội dung:
- Từ dòng đó trở xuống, tìm chữ "content: "
- Mỗi giá trị đằng sau content đại diện cho nội dung của 1 slide.

3. Đổi ảnh
- Từ dòng đó(`Features: [`) trở xuống, tìm chữ "image: "(Nó nằm ở trên từ content viết ở mục 2 trên)
- Mỗi giá trị đằng sau từ image là một ảnh
- Để thay đổi ảnh, cần tìm ảnh đúng với tên đó, và thay đổi ảnh.
Ví dụ: Ở slide đầu, có ảnh tên là "Feature2". Thì trong project này có 1 ảnh tên là feature2.png.
- Thay ảnh mới vào thì đổi tên y hệt ảnh cũ.