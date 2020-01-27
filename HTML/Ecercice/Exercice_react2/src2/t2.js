/* file: index.js */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './t2.css';


// State data for 3 counters


// Counter Component
function Counter(props) {
    
    const { value } = props;
    const [count, setCount] = React.useState(0);
    function decrement() {
        if (count > 0) {
            setCount(count - 1)
            props.oui(-1)
        }
    }
    function increment (){
        if (count >= 0) {
            setCount(count + 1)
            props.oui(+1)
        }
      }
    
    return (
        <>
            <div className="counter">
                <span className="counter-value" >{count}</span>
                <button className="button inc" onClick={decrement}>-</button>
                <button className="button dec" onClick={increment}>+</button>
               
            </div>

        </>
    );

}




// Main Component

function App(props) {
    const data = [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }, { id: 4, value: 0 }]
    const [total,setTotal] = React.useState(0)
    const add = function(nb){
       
        setTotal(total + nb)
        console.log(total)
    }
    
    return (
        <>
            <div>
                {data.map(counter => (
                    <Counter key={counter.id} oui={add} value={counter.value} />
                ))}
            </div>
            <div>
                <span>Le total est de : {total} </span>
            </div>
        </>
    );
}

ReactDOM.render(
    <App />, document.querySelector("#app")
)


/*

CORRECTION

import React from 'react'

// State data for 3 counters
const data = [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }];

// Counter Component
function Counter(props) {
    const { value, setValue } = props;
    return (
        <div className="counter">
            <span className="counter-value">{value}</span>
            <button className="button inc"
                onClick={() => setValue(value - 1)}>-</button>
            <button className="button dec"
                onClick={() => setValue(value + 1)}>+</button>
        </div>
    );
}

function Total({ value }) {
    return <p>{value}</p>
}

// Main Component
export default function App(props) {
    const [counters, setCounters] = React.useState(data);

    const setValue = (newValue, counter) => {
        counter.value = newValue >= 0 ? newValue : 0;
        setCounters([...counters]);
    };

    return (
        <div>
            {counters.map(counter => (
                <Counter
                    key={counter.id}
                    value={counter.value}
                    setValue={(value) => setValue(value, counter)}
                />
            ))}
            <Total value={counters.reduce((acc, c) => acc + c.value, 0)} />
        </div>
    )
}
*/