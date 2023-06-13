
import { encrypt } from "@/lib/crypto"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

type props = {
    code: string
}

export const URLGenerator: React.FC<props> = (p) => {
    const [url, setUrl] = useState("")

    useEffect(() => {
        setUrl(
            "/solve" + "?code=" + encrypt(p.code)
        )
    }, [p.code])

    const router = useRouter()
    return (<>
        <button className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={() => {
                router.push(url)
            }}>問題を作成する</button>
    </>)
}