import React, { Component } from 'react';
import Order from '../../Components/Order/Order';
import axios from 'axios';

class Orders extends Component {
    state={
        orders:[],
        loading:true
    }

    componentDidMount(){
        axios.get('https://react-burgerbuilder-f1f12.firebaseio.com/order.json').then(response=>{
             const fetcheorder=[];
            // console.log(response)
            for (let key in response.data){
                fetcheorder.push({
                    ...response.data[key],
                    id:key
                })
                 console.log(fetcheorder);
            }
            this.setState({loading:false,orders:fetcheorder})
            // console.log(this.state.orders);

        }).catch(err=>{
            console.log(err);
            this.setState({loading:false});
        })
    }

    render() {
        return(
        <div>
        {this.state.orders.map(orders=>(
            <Order key={orders.id} ingredients={orders.ingredients} price={orders.totalPrice}/>
        ))}
            
        </div>
        )
    }
}

export default Orders;