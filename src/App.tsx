import {BrowserRouter, Routes, Route} from "react-router"
//import Layout from "./components/Layout"
import HomePage from "./pages/HomePage.tsx";
import NameChangerPage from "./pages/NameChangerPage.tsx";
import OnlineStatusPage from "./pages/OnlineStatusPage.tsx";
import UserPage from "./pages/UserPage.tsx";
import RouterLayout from "./components/RouterLayout.tsx";
import ExamplesPage from "./pages/ExamplesPage.tsx";
import RouterExamplesLayout from "./components/RouterExamplesLayout.tsx";

function App() {

    // useEffect(() => {
    //     const id: number = setInterval(() => console.log("tick"), 1000);
    //     return () => clearInterval(id);
    // }, []);

  return (
    <>
        <BrowserRouter>
                <Routes>
                    <Route element={<RouterLayout/>}>
                        {/*<Route path="/" element={<HomePage />}/>*/}
                        <Route index element={<HomePage/>}/>
                        <Route path="users/:userId" element={<UserPage />}/>
                        <Route path="users" element={<UserPage/>}/>
                    </Route>

                    {/*<Route index element={<HomePage />}/>*/}

                    <Route path="examples"  element={<RouterExamplesLayout/>}>
                        <Route index element={<ExamplesPage/>}/>
                        <Route path="name-changer" element={<NameChangerPage/>}/>
                        <Route path="online-status" element={<OnlineStatusPage/>}/>
                    </Route>
                    {/*<Route path={"files/*" }*/}
                </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
