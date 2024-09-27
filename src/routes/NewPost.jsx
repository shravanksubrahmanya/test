import Modal from '../components/Modal';
import classes from './NewPost.module.css'
import { useState } from 'react';

function NewPost(props){
    const [enteredAuthor, setEnteredAuthor] = useState('');
    const [enteredBody, setEnteredBody] = useState('');

    function bodyChangeHandler(event){
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler(event){
        setEnteredAuthor(event.target.value);
    } 

    function submitHandler(event) {
        event.preventDefault();
        const postData = {
            content: enteredBody,
            author: enteredAuthor
        }
        console.log(postData);
        props.onAddPost(postData);
        props.onCancel();
    }

    // const [enteredBody, setEnteredBody] = useState(''); // to store string in registerd text we are using '' in usestate

    // function changeBodyHandler(event) {
    //     setEnteredBody(event.target.value)
    // }

    return(
        <Modal>
        <form className={classes.form} onSubmit={ submitHandler }>
            <p>
                <label htmlFor="body">Text</label>
                <textarea name="text" id="body" cols="30" rows="3" required onChange={bodyChangeHandler}></textarea>
            </p>
            <p>
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" id="name" required onChange={authorChangeHandler}/>
            </p>
            <p className={classes.actions}>
                <button className='' type='button' onClick={props.onCancel}> Cancel</button>
                <button>Submit</button>
            </p>
        </form>
        </Modal>
    );
}

export default NewPost;