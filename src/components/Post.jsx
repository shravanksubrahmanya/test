import classes from './Post.module.css';

const names = ['Shravan', 'K', 'Subrahmanya']

function Post(props){
    // name of the function should start with a uppercase letter

    const chosenName = Math.random() > 0.5 ? names[0] : names[2]
    return (
        <div className={classes.post}>
            <p className={classes.author}>{ props.author }</p>
            <p className={classes.text}>{ props.content }</p>
        </div>
    );
}

export default Post;