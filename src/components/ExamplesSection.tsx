import {NavLink} from "react-router";

const ExamplesSection = () => {
    return (
        <>
            <div className="bg-gray-200 py-24 ">
                <ul className="container mx-auto flex justify-center space-x-4">
                    <li>
                        <NavLink
                            to="/examples/name-changer"
                            className={( {isActive}) =>
                                isActive ? "text-cf-dark-red" : "text-cf-dark-grey"}
                        >
                            Name Changer
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/examples/online-status"
                            className={( {isActive}) =>
                                isActive ? "text-cf-dark-red" : "text-cf-dark-grey"}
                        >
                            Online Status
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default ExamplesSection;