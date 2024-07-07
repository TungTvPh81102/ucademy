# Tìm hiểu next font

## Cách import font

`import { Font } from '@next/font/google'`

## Khai báo

const inter = Inter({ subsets: ["latin"] });

-- subsets: kiểu chữ, thông thường là latin

# Typescript

- `ComponentProps<"svg">`: Lấy ra các props của thẻ svg

# Next/Link

- Link
- herk
- replace: thay thế đường dẫn và ko lưu lại lịch sử
- scroll: mặc định là `true` nghĩa là khi nhấn vào link thì sẽ scroll lên trên cùng, ko muốn scroll thì thiết lập `false`
- prefetch: giúp

# Routing

- Group: sẽ không tạo ra routing -> tạo thư mục () -> VD: (dashboard)

- Segment dynamic: [name] -> [course]: mục đích là để lấy parmas để xử lý 1 công việc gì đó

```course/lession: - [course]/lession/page.tsx

```

- Nested routes: thư mục trồng thư mục

```
[course]/[lession]: course/lession
```

- Catch-all Segments: sign-in/[...sign-in]

- Optinal Catch-add Segments: sign-in/[[...sign-in]]

- Parallel Routes
- Intercepting Routes

# Parmas

- Params: Thông thường là dynamic routes: [item]/lession
- Search Parmas: thường là những query ở trên url

# Layout

# Next Image

- Image yêu cầu có 3 thuộc tính bắt buộc: alt , width, height
- Nếu sử dụng thuộc tính fill thì ko cần width và height. Tuy nhiên thẻ img sẽ trở thành absolute, cho nền cần 1 phần tử chứa nó chuyển thành relative
- Khi sử dụng src từ bên ngoài thì phải thiết lập trong next.config.mins
