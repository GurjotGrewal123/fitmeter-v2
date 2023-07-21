import Calendar from './Calendar.js'
import AddItem from "./AddItem.js";
import '../styles/Workout.css'
import { useState } from 'react';


const Workout = () => {
    const [data, setData] = useState({ items: [] });
    const [currDay, setDay] = useState();

    const addItemToData = (item) => {
        const workoutDate = currDay;
        item.workoutDate = workoutDate;
        let items = data["items"];
        items.push(item);
        setData({ items: items });
    };

    const deleteItem = (item) => {
        const items = data["items"];
        const idx = items.indexOf(item);
        items.splice(idx, 1);
        setData({ items: items });
    };

    return (
        <div className='workout'>
            <AddItem addItem={addItemToData} />
            <Calendar items={data["items"]} setDay={setDay} deleteItem={deleteItem} />
        </div>
    )
}

export default Workout