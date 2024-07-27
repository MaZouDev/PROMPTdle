import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import ThemeToggle from "@/app/theme-toggle";
import {ThemeProvider} from "next-themes";

const inter = Inter({ subsets: ["latin"] });

function Header() {
  return <header className="w-full flex justify-between py-4">
    <h1><strong>PROMPT</strong>dle</h1>
    <ThemeToggle/>
  </header>;
}

function Footer() {
    return (
        <footer className="mt-auto flex justify-between py-4 pt-24 overflow-y-clip">
            <h1>Made by. Hosted by.</h1>

            <div>
                <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/next.svg"
                    alt="Next.js Logo"
                    width={180}
                    height={37}
                    priority
                />
                <div className="relative z-[-1]
            after:absolute after:-z-20 after:h-[120px] after:w-full after:-translate-y-1/2 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-['']
            after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
                </div>
            </div>
        </footer>
    );
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={inter.className + " max-w-screen-lg m-auto min-h-screen flex flex-col"}>
        <ThemeProvider>
        <Header/>
            {children}
        <Footer/>
        </ThemeProvider>
        </body>
        </html>
    );
}
