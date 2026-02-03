import Header from "../components/layout/Header/Header"

const MainLayout = ({ children }) => {

    return (
        <>
            <Header />
            <main>{children}</main>
            <footer></footer>
        </>
    )
}


export default MainLayout