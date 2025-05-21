// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalCOmponent from "./components/ArrowFunctionalCOmponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentwithPropsType from "./components/ArrowFunctionalComponentwithPropsType.tsx";
// import CodingFactoryLogo from "./components/CodingFactoryLogo.tsx";
import Layout from "./components/Layout.tsx";
//import ClassComponentWithState from "./components/ClassComponentWithState.tsx";
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
import Counter from "./components/Counter.tsx";

function App() {

  return (
    <>
        <Layout>
            {/*<ClassComponent/>*/}
            {/*<FunctionalComponent/>*/}
            {/*<ArrowFunctionalCOmponent/>*/}
            {/*<ArrowFunctionalComponentWithProps title="Is Arrow Functional Component with Props"/>*/}
            {/*<ArrowFunctionalComponentwithPropsType*/}
            {/*    title="Hello World"*/}
            {/*    description="This is a description"/>*/}
            {/*<FunctionalComponent/>*/}

            {/*<ClassComponentWithState/>*/}
            {/*<FunctionalComponentWithState/>*/}
            <Counter/>
        </Layout>
    </>
  )
}

export default App
