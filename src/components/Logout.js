import { signOut } from 'firebase/auth'
import React from 'react'
// Firebaseの認証機能とプロバイダーを使えるようにする
import { auth, provider } from '../firebase'

// 自動的に所定の画面に遷移する
import { useNavigate } from 'react-router-dom'


const Logout = ({ setIsAuth }) => {
    const navigate = useNavigate()
    const logout = () => {
        //ログアウト
        signOut(auth).then(() => {
            localStorage.clear()
            setIsAuth(false)
            navigate("/login")
        })
    }

    return (
        <div>
            <p>ログアウトする</p>
            <button onClick={logout}>ログアウト</button>
        </div>
    )
}
export default Logout
