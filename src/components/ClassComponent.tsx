import {Component} from "react";

class ClassComponent extends Component {
    render() {
        const title = "Is a Class Component"
        return <h1 className="text-center text-xl mt-12 font-bold">{title}</h1>
    }
}

export default ClassComponent;