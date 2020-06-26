import React from 'react';
import classes from './Order.css'

const Order=(props)=>{

    let ingredients=[];
    for(let ingredientName in props.ingredients){
        ingredients.push({
            name:ingredientName,
            amount:props.ingredients[ingredientName]
        })
        
    }

    console.log(ingredients);

    const ingredientsout=ingredients.map(output=>{
        return <span
        key={output.name}
        style={{
            textTransform:'capitalize',
            display:'inline-block',
            margin:'0 10px',
            border:'1px solid #ccc',
            padding:'5px'

        }}
        >{output.name}: ({output.amount}) </span>
    })


    return(
        <div className={classes.Order}>
            <p>Ingredients: {ingredientsout}</p>
            <p>Price:<strong>{Number.parseFloat(props.price).toFixed(2)} USD</strong></p>
        </div>
    )
}


export default Order;