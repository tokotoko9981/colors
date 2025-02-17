// src/app/layout.js
import "../main.css";

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className="bg-gray-100">
        {children}
      </body>
    </html>
  );
}
