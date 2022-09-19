import { useRouter } from 'next/router'
import Footer from "../../containers/Footer";
import Menu  from '../Menu';

const Layout = ({ children, categories, global }) => {
  const { navbar, smallText, social, headerLogo, footerSection1, footerSection2, footerSection3, footerSection4, topNav, footerLogo } = global;
  return (
    <>
     {/* <Seo metadata={metadata} /> */}
      <Menu navBar={navbar} />
      <div className="flex-grow">{children}</div>
      <Footer global={global} />
    </>
  );
};

export default Layout;
