import Header from "../components/layout/Header/Header";
import Footer from "../components/layout/Footer/Footer";

const MainLayout = ({ children }) => {
    return (
        <div className="app-layout">
            <Header />

            <main className="site-main">
                {children}
            </main>

            <Footer />
        </div>
    );
};

export default MainLayout;
