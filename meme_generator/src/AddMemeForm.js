import { useState } from "react";
import { v4 as uuid } from 'uuid';

const AddMemeForm = ({addMeme}) =>{
    const INITIAL_FORM_DATA = {
        topText: '',
        bottomText: '',
        img: ''
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
        addMeme({...formData, id: uuid()});
        setFormData(INITIAL_FORM_DATA);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='topText'>Top Text</label>
            <input 
            name='topText'
            id='topText'
            value={formData.topText}
            onChange={handleChange}
            type='text'/>
            <label htmlFor='bottomText'>Bottom Text</label>
            <input 
            name='bottomText'
            id='bottomText'
            value={formData.bottomText}
            onChange={handleChange}
            type='text'/>
            <label htmlFor='img'>Image URL</label>
            <input 
            name='img'
            id='img'
            value={formData.img}
            onChange={handleChange}
            type='text'/>
            <button>Submit</button>
        </form>
    )
};

export default AddMemeForm;