import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <div>   
        <h1>Bienvenue sur la Nouvelle BAM</h1>
        <p>Ceci est le layout</p>

        <main>
            <Outlet />
        </main>

        <footer>
            <p>© 2024 Nouvelle BAM. Tous droits réservés.</p>
        </footer>
    </div>
  );
}   

export default Layout;