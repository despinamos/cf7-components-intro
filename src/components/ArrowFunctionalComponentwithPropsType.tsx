type A = {
    title: string;
}

type B = {
    description: string;
}

type Props = A & B;

const ArrowFunctionalComponentwithPropsType =({title, description}: Props) => {
    return (
        <>
            <h1 className="text-center text-x; font-bold mt-12">{title}</h1>
            <h1 className="text-center">{description}</h1>
        </>
    )
}

export default ArrowFunctionalComponentwithPropsType;