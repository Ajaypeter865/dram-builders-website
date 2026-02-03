import Header from "../components/layout/Header/Header"
import Footer from "../components/layout/Footer/Footer"

const MainLayout = ({ children }) => {

    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}


export default MainLayout