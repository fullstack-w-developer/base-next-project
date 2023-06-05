import GlobalContextProvider from "@/context/GlobalContextProvider";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <GlobalContextProvider>{children}</GlobalContextProvider>
            </body>
        </html>
    );
}
