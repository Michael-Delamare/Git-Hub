import React from 'react'
import ReactDom from 'react-dom'
import './style.css'


function Greedings() {
    return <h1>hello world</h1>
}

ReactDom.render(
    <Greedings />,
    document.querySelector("#app")
)

const strs = [
    "foo", "bar", "bas"
]

function toUpperCase(s) {
    return s.toUpperCase()
}
//const upperstrs = strs.map(toUpperCase)
const upperstrs = strs.map(function (s, i) {
    return s.toUpperCase() + " - " + i
})
console.log(upperstrs)

const flit = strs.filter(function (s) {
    return s != 'bar'
})

ReactDom.render(
    <div>
        <Greedings name="Michael" color="red">
        <strong> he he</strong>
        </Greedings>
        <Greedings name="Vous !" color="blue"/>
    </div>,
    
    document.querySelector("#app")
)

function Greedings(props) {
    console.log(props)
    const cl = props.color || 'default'
    const styles = {
        color: props.color
    }
    return (
        <h1 className={cl}> hello {props.name}{props.children}</h1>
    )
}
