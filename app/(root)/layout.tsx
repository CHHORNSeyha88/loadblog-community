import NavBarComponent from "../components/Navbar";

export default function Layout({children} : Readonly<{children: React.ReactNode}>){
    return(
        <main className="font-work-sans">
            <NavBarComponent/>
             {children}
        </main>
    )

}