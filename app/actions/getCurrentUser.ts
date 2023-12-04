import prisma from "@/app/libs/prismadb"
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth" // auth işlemlerininde kaydedilen giriş bilgilerini alamamıza yarayan fonksiyon


export async function getSession() {
    return await getServerSession(authOptions) // tanımladığımız giriş işlemlerinden bilgilerimizi dönen bir fonksiyon yazdık
}


export default async function getCurrenUSer() {
    
    const session = await getSession();

    if (!session?.user?.email) {
        return null
    }

    const user = await prisma.user.findUnique({
        where: {
            email: session.user.email
        }
    })

    if(!user){
        return null
    }

    return user
}