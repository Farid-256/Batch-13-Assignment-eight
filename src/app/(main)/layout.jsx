import Bannar from "@/components/Bannar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

// All-layouts
const layout = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            <Bannar></Bannar>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default layout;