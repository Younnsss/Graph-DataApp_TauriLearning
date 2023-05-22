import { Outlet, Link } from "react-router-dom";
import Logo from "../assets/logo.png";

export default function Root() {

    return (
        <>

            <main className="flex">
                <aside className="relative bg-sidebar h-screen w-64 sm:block shadow-xl bg-stone-200 ">
                    <div className="p-6">
                        <img src={Logo} />
                        <h1 className="text-sm font-bold tracking-widest">Les E-changeurs</h1>
                    </div>
                    <nav className="text-slate-950 hover:text-slate-300 text-base font-semibold pt-3">
                        <Link to="/calcul" className="flex items-center text-slate-950 hover:text-slate-300 opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                            <i className="fas fa-tachometer-alt mr-3"></i>
                            Calcul
                        </Link>

                        <Link to="/graphe" className="flex items-center text-slate-950 hover:text-slate-300 opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                            <i className="fas fa-table mr-3"></i>
                            Graphes
                        </Link>

                        <Link to="/extrapolation" className="flex items-center text-slate-950 hover:text-slate-300 opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                        <i className="fas fa-chart-line mr-3"></i>
                            Extrapolation
                        </Link>
                    </nav>
                    <a href="#" className="absolute w-full upgrade-btn bottom-0 active-nav-link text-slate-950 hover:text-slate-300 flex items-center justify-center py-4">
                        <i className="fas fa-arrow-circle-up mr-3"></i>
                        Les E-changeurs!
                    </a>
                </aside>

                <div className="relative w-full flex flex-col h-screen overflow-y-hidden ">

                    <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
                        <main className="w-full flex-grow p-6">
                            <Outlet />
                        </main>

                        <footer className="w-full bg-white text-right p-4">
                            Made by Les E-changeurs.
                        </footer>
                    </div>

                </div>

            </main>
        </>
    );
}