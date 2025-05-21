import ClassComponent from "./components/ClassComponent.tsx";
import FunctionalComponent from "./components/FunctionalComponent.tsx";
import ArrowFunctionalCOmponent from "./components/ArrowFunctionalCOmponent.tsx";
import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
import ArrowFunctionalComponentwithPropsType from "./components/ArrowFunctionalComponentwithPropsType.tsx";

function App() {

  return (
    <>
    <ClassComponent/>
        <FunctionalComponent/>
        <ArrowFunctionalCOmponent/>
        <ArrowFunctionalComponentWithProps title="Is Arrow Functional Component with Props"/>
        <ArrowFunctionalComponentwithPropsType
            title="Hello World"
            description="This is a description"/>
    </>
  )
}

export default App
