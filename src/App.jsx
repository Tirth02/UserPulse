import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";
import RandomUser from "./pages/RandomUser";
import { FavouritesContextProvider } from "./context/FavouritesContextProvider";
import Favourites from "./pages/Favourites";
import { ThemeContextProvider } from "./context/ThemeContextProvider";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import { UsersContextProvider } from "./context/UsersContext";
import Profile from "./pages/Profile";
import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";
import NotFoundRedirect from "./routes/NotFoundRedirect";
function App() {
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <UsersContextProvider>
          <AuthContextProvider>
            <FavouritesContextProvider>
              <Layout>
                <Routes>
                  <Route element={<PublicRoute />}>
                    <Route path="/login" element={<Login />} />
                  </Route>

                  <Route element={<ProtectedRoute/>}>
                    <Route path="/" element={<Users />} />
                    <Route path="/users/:id" element={<UserDetails />} />
                    <Route path="/random" element={<RandomUser />} />
                    <Route path="/favourite" element={<Favourites />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route />
                  </Route>

                  <Route path="*" element={<NotFoundRedirect/>}/>
                </Routes>
              </Layout>
            </FavouritesContextProvider>
          </AuthContextProvider>
        </UsersContextProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  );
}

export default App;
