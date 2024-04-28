import Navbar from "@/components/shared/navbar/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <div className="text-gray-700">
    <Navbar />
    <Component {...pageProps} />
    <h1>footer</h1>
  </div>
}
