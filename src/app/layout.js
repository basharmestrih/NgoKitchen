// app/layout.js
import "../styles/globals.css";
import SessionProviderWrapper from "./components/SessionProviderWrapper";
import LayoutWrapper from "./LayoutWrapper.js";
import ReactQueryProvider from "./components/ReactQueryProvider"; // ✅

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Saira:wght@400;500;600;700&family=Orbitron&family=Lato&family=Lobster&family=Poetsen+One&family=Archivo+Black&display=swap"
          rel="stylesheet"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <SessionProviderWrapper>
          <ReactQueryProvider>
            <LayoutWrapper>{children}</LayoutWrapper>
          </ReactQueryProvider>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
