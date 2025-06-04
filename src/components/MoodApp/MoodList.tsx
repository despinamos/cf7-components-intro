import { Trash2 } from "lucide-react";
import type {Dispatch} from "react";

type Mood = {
    id: number;
    text: string;
    background: string;
}

type MoodListProps = {
    moods: Mood[];
    dispatch: Dispatch<{type: "DELETE"; payload: number}>;
}

const MoodList = ({moods, dispatch}: MoodListProps) => {

    const handleDelete = (id: number) => ()=> {
        dispatch({type: "DELETE", payload: id});
    }

    return (
        <>
            <ul className="space-y-2">
                {moods.map(mood => (
                    <li key={mood.id} className={"flex items-center justify-around bg-gray-100 p-2 rounded " + mood.background}>
                        <span>{mood.id}</span>
                        <span>{mood.text}</span>
                        <button
                            onClick={handleDelete(mood.id)}
                            className="text-cf-dark-red"
                        >
                            Delete
                            <Trash2 size={18} />
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default MoodList;