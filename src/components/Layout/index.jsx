import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { motion } from "framer-motion";

export const Layout = () => {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="w-full h-full max-w-[1360px]">
        <Header />
        {/* <motion.div layoutScroll> */}
        <div className="w-full h-full px-[3em]">
          <Outlet></Outlet>
        </div>
        {/* </motion.div> */}
        <Footer />
      </div>
    </div>
  );
};
