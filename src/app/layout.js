// layout.js (ルートレイアウト)
import "../main.css"; // TailwindCSS の適用

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className="bg-gray-100">{children}</body>
    </html>
  );
}
