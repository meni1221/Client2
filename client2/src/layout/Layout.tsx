import Footer from "./Footer";
import Header from "./Header";
import Main from "./main";

interface Props {
  children: React.ReactNode;
}
export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <Main children={children} />
      <Footer />
    </>
  );
}
