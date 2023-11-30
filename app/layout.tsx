// 'use client'
import '../styles/globals.css'
import { Nunito } from "next/font/google"
import Navbar from "./components/navbar/Navbar"
import MountedClient from './components/MountedClient'
import Modals from './components/modals/Modals'
import RegisterModel from './components/modals/RegisterModel'
import ReduxProvider from './provider/ReduxProvider'
import LoginModel from './components/modals/LoginModal'
import ToastProvider from './provider/ToastProvider'
const newFont = Nunito({
    subsets: ['latin']
})

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body className={newFont.className}>
                <ReduxProvider>
                <MountedClient>
                    <ToastProvider/>
                    {/* <Modals
                    isOpen={true}
                    onSubmit={()=>{}}
                    onClose={()=>{}}
                    btnLabel='Register'
                    title='Register'
                    /> */}
                    <LoginModel/>
                    <RegisterModel/>
                    <Navbar />
                </MountedClient>
                {children}
                </ReduxProvider>
                
            </body>
        </html>
    )

}

export default RootLayout