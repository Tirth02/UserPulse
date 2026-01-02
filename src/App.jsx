import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";
import RandomUser from "./pages/RandomUser";
import { FavouritesContextProvider } from "./context/FavouritesContextProvider";
import Favourites from "./pages/Favourites";
function App() {
  return (
    <FavouritesContextProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/users/:id" element={<UserDetails />} />
            <Route path="/random" element={<RandomUser />} />
            <Route path = "/favourite" element ={<Favourites/>} />
            <Route />
          </Routes>
        </Layout>
      </BrowserRouter>
    </FavouritesContextProvider>
  );
}

export default App;
