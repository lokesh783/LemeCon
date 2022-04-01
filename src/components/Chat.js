import React, { useRef, useState, useEffect } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { ChatEngine } from 'react-chat-engine'
import { useAuth } from "../context/auth_cont"
import { auth } from "../firebase"

export default function Chats() {
  const didMountRef = useRef(false)
  const [ loading, setLoading ] = useState(true)
  const { user } = useAuth()
  const history = useNavigate()
  // console.log(user)


  async function handleLogout() {
    await auth.signOut()
    history("/")
    window.location.reload()
  }

  async function getFile(url) {
    let response = await fetch(url);
    let data = await response.blob();
    return new File([data], "test.jpg", { type: 'image/jpeg' });
  }

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true

      if (!user || user === null) {
        history("/")
        //error prone
        // window.location.reload()
        return
      }

      // localhost:3000/app
    // console.log(process.env.REACT_APP_CHAT_ENGINE_KEY)
      //At end get file
      axios.get(
        'https://api.chatengine.io/users/me/',
        { headers: { 
          "project-id": process.env.REACT_APP_CHAT_ENGINE_ID,
          "user-name": user.email,
          "user-secret": user.uid
        }}
      )

      .then(() => setLoading(false))

      .catch(e => {
        let formdata = new FormData()
        formdata.append('email', user.email)
        formdata.append('username', user.email)
        formdata.append('secret', user.uid)

        getFile(user.photoURL)
        .then(avatar => {
          formdata.append('avatar', avatar, avatar.name)
          axios.post(
            'https://api.chatengine.io/users/',
            formdata,
            { 
              headers: { "private-key": process.env.REACT_APP_CHAT_ENGINE_KEY,
              "project-id": process.env.REACT_APP_CHAT_ENGINE_ID,
              "user-name": user.email,
              "user-secret": user.uid
            }
            }
          )
          .then(() => setLoading(false))
          .catch(e => console.log('e', e.response))
        })
      })

    }
  }, [user, history])
  

  if (!user || loading ) {return <div/>}

  return (
    <div className='chats-page'>
      <div className='nav-bar'>
        <div className='logo-tab'>
          Lemecon
        </div>

        <div onClick={handleLogout} className='logout-tab'>
          Logout
        </div>
      </div>

      <ChatEngine 
        height='calc(100vh - 66px)'
        projectID={process.env.REACT_APP_CHAT_ENGINE_ID}
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  )
}