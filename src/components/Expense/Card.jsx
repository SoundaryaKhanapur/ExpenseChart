import "./Card.css";
;

const Card = (props) => {
    // card space is a must
    const classes = 'card ' + props.className;
    return (
        <div className={classes}>
           {props.children}
        </div>
    );
}

export default Card;