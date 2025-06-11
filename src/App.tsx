import {BrowserRouter, Routes, Route} from "react-router"
//import Layout from "./components/Layout"
import HomePage from "./pages/HomePage.tsx";
import NameChangerPage from "./pages/NameChangerPage.tsx";
import OnlineStatusPage from "./pages/OnlineStatusPage.tsx";
import UserPage from "./pages/UserPage.tsx";
import RouterLayout from "./components/RouterLayout.tsx";
import ExamplesPage from "./pages/ExamplesPage.tsx";
import RouterExamplesLayout from "./components/RouterExamplesLayout.tsx";
import AutoRedirectPage from "./pages/AutoRedirectPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import FocusInput from "./components/FocusInput.tsx";

function App() {

    // useEffect(() => {
    //     const id: number = setInterval(() => console.log("tick"), 1000);
    //     return () => clearInterval(id);
    // }, []);

  return (
    <>
        <BrowserRouter>
                <Routes>

                    <Route path="examples"  element={<RouterExamplesLayout/>}>
                        <Route index element={<ExamplesPage/>}/>
                        <Route path="name-changer" element={<NameChangerPage/>}/>
                        <Route path="online-status" element={<OnlineStatusPage/>}/>
                        <Route path="auto-redirect" element={<AutoRedirectPage/>}/>
                    </Route>

                    <Route element={<RouterLayout/>}>
                        {/*<Route path="/" element={<HomePage />}/>*/}
                        {/*<Route index element={<HomePage/>}/>*/}
                        <Route index element={<FocusInput/>}/>
                        <Route path="users/:userId" element={<UserPage />}/>
                        <Route path="users" element={<UserPage/>}/>
                        <Route path="*" element={<NotFoundPage/>}/>
                    </Route>
                </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
