import './styles.css';

export function Card(props) { /*ou ({name,time})  que e desestroturar  e não precisa colocar o props em baixo*/
    return(
        <div className='card'>
            <strong>{props.name}</strong> 
            <small>{props.time} </small>
        </div>
    )
}