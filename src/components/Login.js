
import { signInWithPopup } from 'firebase/auth'
import React from 'react'
// Firebaseの認証機能とプロバイダーを使えるようにする
import { auth, provider } from '../firebase'

// 自動的に所定の画面に遷移する
import { useNavigate } from 'react-router-dom'

const Login = ({ setIsAuth }) => {

    const navigate = useNavigate()
    const loginInWIthGoogle = () => {
        //Googleでログイン
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true)
            setIsAuth(true)
            //ルートディレクトリに戻る
            navigate("/")
        })

    }

    return (
        <div>
            <p>ログインして始める</p>
            <button onClick={loginInWIthGoogle}>Googleでログイン</button>
        </div>
    )
}
export default Login

