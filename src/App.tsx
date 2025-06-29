import {BrowserRouter, Routes, Route} from "react-router"
import RouterLayout from "@/components/RouterLayout.tsx";
import ProductList from "@/pages/ProductList.tsx";
import Product from "@/pages/Product.tsx";
// import NameChangerPage from "./pages/NameChangerPage.tsx";
// import OnlineStatusPage from "./pages/OnlineStatusPage.tsx";
// import UserPage from "./pages/UserPage.tsx";
// import RouterLayout from "./components/RouterLayout.tsx";
// import RouterExamplesLayout from "./components/RouterExamplesLayout.tsx";
// import AutoRedirectPage from "./pages/AutoRedirectPage.tsx";
// import NotFoundPage from "./pages/NotFoundPage.tsx";
// import FocusInput from "./components/FocusInput.tsx";
// import UncontrolledInput from "./components/UncontrolledInput.tsx";
// import ControlledInput from "./components/ControlledInput.tsx";
// import ExamplesPage from "./pages/ExamplesPage.tsx";
// //import MultiFieldFormWithZodValidation from "./components/MultiFieldFormWithZodValidation.tsx";
// import MultiFieldFormWithReactHook from "./components/MultiFieldFormWithReactHook.tsx";

function App() {

    // useEffect(() => {
    //     const id: number = setInterval(() => console.log("tick"), 1000);
    //     return () => clearInterval(id);
    // }, []);

  return (
    <>
        <BrowserRouter>
                <Routes>

                    {/*<Route path="examples"  element={<RouterExamplesLayout/>}>*/}
                    {/*    <Route index element={<ExamplesPage/>}/>*/}
                    {/*    <Route path="name-changer" element={<NameChangerPage/>}/>*/}
                    {/*    <Route path="online-status" element={<OnlineStatusPage/>}/>*/}
                    {/*    <Route path="auto-redirect" element={<AutoRedirectPage/>}/>*/}
                    {/*    <Route path="controlled-input" element={<ControlledInput/>}/>*/}
                    {/*    <Route path="uncontrolled-input" element={<UncontrolledInput/>}/>*/}
                    {/*    <Route path="focus-input" element={<FocusInput/>}/>*/}
                    {/*</Route>*/}

                    {/*<Route element={<RouterLayout/>}>*/}
                    {/*    /!*<Route path="/" element={<HomePage />}/>*!/*/}
                    {/*    /!*<Route index element={<HomePage/>}/>*!/*/}
                    {/*    <Route index element={<MultiFieldFormWithReactHook/>}/>*/}
                    {/*    /!*<Route index element={<MultiFieldFormWithZodValidation/>}/>*!/*/}
                    {/*    <Route path="users/:userId" element={<UserPage />}/>*/}
                    {/*    <Route path="users" element={<UserPage/>}/>*/}
                    {/*    <Route path="*" element={<NotFoundPage/>}/>*/}
                    {/*</Route>*/}
                    <Route path="/" element={<RouterLayout/>}>
                        <Route index element={<ProductList/>}/>
                        {/*<Route path="new" element={<Product/>}/>*/}
                        <Route path="new" element={<Product mode="create" />}/>
                        <Route path=":productId" element={<Product mode="edit" />}/>
                    </Route>
                </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
