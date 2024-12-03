import Footer from "./Footer";
import Main from "./main";

interface Props {
    children: React.ReactNode;
}
export default function Layout({ children }: Props) {
  return (
    <>
      <Main children={children} />
      <Footer/>
      
    </>
  );
}
