import {Component} from 'react';

class ReservationTicket extends Component{
    constructor(props){
        super(props)
        this.state={
            items:[]
        }
    }

    componentDidMount(){
        fetch('http://localhost:3001/Reservation_guest')
        .then(response=>response.json())
        .then(data=>this.setState({items:data}))
    }

    render(){
        const {items} = this.state

        return (
            <div>
                <p>Nami : {items.Name} </p>
                <ul>
                    {items.map((poin,index)=>
                        <li key={index}>
                            {poin.Name} ;
                            {poin.email}
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default ReservationTicket