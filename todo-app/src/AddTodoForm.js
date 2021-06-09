import { useState } from "react";
import { v4 as uuid } from 'uuid';

const AddTodoForm = ({addTodo}) =>{
    const INITIAL_FORM_DATA = {
        todo: ''
    }

    const [formData, setFormData] = useState(INITIAL_FORM_DATA)

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData =>({
            ...formData, 
            [name]: value
        }))
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        addTodo({...formData, id: uuid()});
        setFormData(INITIAL_FORM_DATA);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            name='todo'
            id='todo'
            value={formData.todo}
            onChange={handleChange}
            type='text'
            placeholder='Enter Todo...'/>
            <button>Submit</button>
        </form>
    )
};

export default AddTodoForm;