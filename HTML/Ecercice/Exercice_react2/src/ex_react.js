import React from 'react'
import ReactDOM from 'react-dom'


/*

const arr = [0,1,2]
const [a,_,c] = arr

const obj = {name : "...", email : "..."}
obj.name
const {name} = obj

function calc([a]){ arguement }
calc([1,2,3,4])
*/


/*
function Clicker(props) {
    const [count, setCount] = React.useState(0)

    return (
        <button onClick={() => setCount(count + 1)}>
            Clicks: {count}
        </button>
    )
}

ReactDom.render(
    <Clicks />
    
)
*/
function ListItem(props) {
  return <li>{props.truc.title}</li>
}

function Listing(props) {
    const [items, setItems] = React.useState([{ key: 1, title: "bonbons !" }])

    const onClick = function () {
        const item = { key: items.length + 1, title: "Bonbons !" }
        const newItems = items.concat(item)
        //A la place du concat : const newItems = {...items,item}
        setItems(newItems)
    }
    const lis = items.map((item) => <ListItem key={item.key} truc ={item}/>)
    console.log(items)
    /*

    const lis = []
    for(let i=0;i<items.lenght;i++){
        const item = items[i]
        list[i] = <li key ={item.key}>{item.title}</li>   
     }

     ou  {items.map((item) => <ListItem truc ={item}/>)}
    */
    return (
        <>
            <ul>
               {lis}
            </ul>

            <button onClick={onClick}>Ajouter</button>
        </>
    )
}
/*window.onload = function(){
}  body en head */

ReactDOM.render(
    <Listing />, document.querySelector("#app")
)