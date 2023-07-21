import { useState } from "react";
import '../styles/AddItem.css'

const AddItem = (props) => {
    const [workoutName, setWorkoutName] = useState("");
    const [workoutSets, setWorkoutSets] = useState(0);
    const [workoutReps, setWorkoutReps] = useState(0);
    const [workoutDate, setDate] = useState("");

    const addItemButtonPressed = () => {
        const workoutItem = {
            workoutName: workoutName,
            workoutSets: workoutSets,
            workoutReps: workoutReps,
        };
        props.addItem(workoutItem);
        setWorkoutName("");
        setWorkoutReps(0);
        setWorkoutSets(0);
        setDate(new Date());
    }


    return (
        <div className="background">
            <div className="container">

                <div className="row"><h2 className="text-center">ADD A WORKOUT</h2></div>
                <div className="row"><h4>Make sure to click on a day before adding...</h4></div>

                <div className="row-inputs">
                    <div className="input-group">
                        <label htmlFor="input-field">Name:</label>
                        <div className="inputs">
                            <input id="name-field" type="text" value={workoutName} onChange={(e) => setWorkoutName(e.target.value)} />
                        </div>
                    </div>

                    <div className="input-group">
                        <label htmlFor="input-field">Sets:</label>
                        <div className="inputs">
                            <input id="price-field" type="number" value={workoutSets} onChange={(e) => setWorkoutSets(e.target.value)} />
                        </div>
                    </div>

                    <div className="input-group">
                        <label htmlFor="input-field">Reps:</label>
                        <div className="inputs">
                            <input id="type-field" type="number" value={workoutReps} onChange={(e) => setWorkoutReps(e.target.value)} />
                        </div>
                    </div>

                    <div className="add-btn">
                        <button onClick={(addItemButtonPressed)}>ADD</button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default AddItem;