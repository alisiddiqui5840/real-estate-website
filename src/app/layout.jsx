import Header from "../components/Layout/Header";
import "./globals.css";
import Footer from "../components/Layout/Footer";
import WhatsAppIcon from "@/components/Whatsapp/whatsapp";
import BackToTop from "@/components/BacktoTop/backtotop";

export const metadata = {
  title: "Jacksheo",
  description: "SINGAPORE PROPERTY AGENT, JACK SHEO",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body >
      <Header/> 
      <BackToTop/>
      <WhatsAppIcon/>
      <div className="mx-2 lg:mx-0">
        {children}
        </div>
        <Footer/>
        </body>
    </html>
  );
}
