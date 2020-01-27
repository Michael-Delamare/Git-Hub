import React from 'react'
import ReactDom from 'react-dom'
import './trainingc.css'
import logo from './img/dev.jpg'
import coeur from './img/coeur1.jpg'
import message from './img/message1.png'
import upload from './img/upload.png'


/*
user : Object { fullName: string, userName: string, badge: string }
Les informations de utilisateur qui a créer le post.

message : string
Le message du post.

comments : number
Le nombre de commentaires associés au post.

likes : number
Le nombre d'appréciations associées au post.
*/



ReactDom.render(

  <SocialCard imgDev={logo} FullName="Delamare Michael"UserName="@ DelamareMichael" message="Learning REACT ? Start strong and go fast !" imgDev={coeur} imgDev2={message} imgDev={upload}></SocialCard>,
  document.getElementById('app')
)


function SocialCard(props) {
  console.log(props)
  const styles = props.color || 'default'
  return (
    <>
      <div className="card">
        <div className="dimg">
          <img className="imgDev" src={logo} alt="dev" />
        </div>
        <div className="duser">
          <span className="black" >{props.FullName}   </span>
          <span className="grey">{props.UserName}</span>
          <p className="red">{props.message}</p>
        </div>
        </div>
        <div className="divBas">
        <img className="imgDev3" src={message} alt="message"/><span className="nb">2</span>
          <img className="imgDev5" src={coeur} alt="coeur"/><span className="nb">18</span>
          <img className="imgDev4" src={upload} alt="upload"/>
        </div>
    </>
  )
}