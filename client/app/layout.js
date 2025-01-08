import { Frank_Ruhl_Libre, Rubik } from "next/font/google";
import "./globals.css";



const rubik = Rubik({
    variable: "--font-rubik",
    subsets: ["latin"],
    weight:"400"
})

const frankRuhlLibre =  Frank_Ruhl_Libre({
    variable: "--font-frank-ruhl",
    subsets: [ 'latin'],
    weight: "700",
})


export const metadata = {
  title: "Next Blog",
  description: "Latest News ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${rubik.variable} ${frankRuhlLibre.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
