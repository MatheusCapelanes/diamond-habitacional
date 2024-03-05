import Footer from "./partials/Footer";
import Header from "./partials/Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
