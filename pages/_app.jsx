import { JetBrains_Mono } from "next/font/google";
import "../styles/globals.css";
import Header from "../components/Header";
import { ThemeProvider } from "next-themes";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata = {
  title: "Revalla Tarun",
  description: "Full Stack Developer",
};

export default function App({ Component, pageProps, router }) {
  return (
    <div>
      <style jsx global>{`
        :root {
          --font-jetbrains-mono: ${jetBrainsMono.style.fontFamily};
        }
      `}</style>
      <ThemeProvider enableSystem={true} attribute="class">
        <Header />
        <Component key={router.route} {...pageProps} />
      </ThemeProvider>
    </div>
  );
}
