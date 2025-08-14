import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer"; // if you have one
import FloatingCTA from "./components/FloatingCTA";
import ScrollToTop from "./components/ScrollToTop";


export const metadata = {
  title: "Wholesale Acrylic & Channel Letters | Custom Sign Manufacturing",
  description: "Bulk acrylic letters, trimless channel letters, cabinet & blade signs. Custom illuminated signage solutions for businesses nationwide. Fast, reliable fabrication.",
  keywords: "wholesale acrylic sign letters, flush-face channel letters, LED illuminated cabinet signs, blade signage systems, bulk sign fabrication, custom illuminated signs, slim profile letters, dimensional letters and logos, illuminated signage components, low profile flush letters, sign lighting solutions, metal dimensional signs, acrylic dimensional signs, custom plaques, hard-case signage, business sign manufacturing, commercial sign solutions",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en" className="dark antialiased"> {/* <- forces dark theme */}
      <body className="min-h-screen bg-background text-foreground">
    
        <ScrollToTop />
        <Header />
        <main>{children}</main>
        <FloatingCTA />
        <Footer />
      </body>
      
    </html>
  );
}
