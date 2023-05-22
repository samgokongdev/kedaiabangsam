import "./globals.css";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata = {
  title: "Kedai Abang",
  description: "Makan Minum gausah dibikin ribet :)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <div className="container pt-10">{children}</div>
      </body>
    </html>
  );
}
