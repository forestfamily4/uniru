import { useEffect, useRef, useState } from "react"
import { useGlobalText } from "./providers/GlobalText"
import { TextInput } from "./textInput"
import { CellTable } from "./cellTable"
import { PopupButton } from "./popupButton"
import { useRouter, useSearchParams } from "next/navigation"
import { decrypt } from "@/lib/crypto"
import { copyToClipboard } from "@/lib/util"

type Props = {
    code: string
}
type UnicodeArray = Array<Array<string>>

export const Solver: React.FC<Props> = (p) => {
    const [unicodeArray, setUnicodeArray] = useState<UnicodeArray>()
    const [isResult, setIsResult] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)
    const [result, setResult] = useState("")
    const [count, setCount] = useState(0)
    const parm = useSearchParams()
    const code = parm.get("code")

    const unicode = (centerCharacter: string, num: number) => {
        const code = centerCharacter.charCodeAt(0);
        let result: Array<string> = []
        let startNum = -Math.floor(num / 2)
        for (let i = startNum; i < num + startNum; i++) {
            result.push(String.fromCharCode(code + i))
        }
        return result
    }

    const pushResult = () => {
        //星を並べる
        const c = count > 5 ? 5 : count
        let result = `uniru\n`
        for (let i = 0; i < 5 - c; i++) {
            result += "★"
        }
        for (let i = 0; i < c; i++) {
            result += "☆"
        }

        result += `\n\nhttps://uniru.vercel.app/solve?code=${code}`
        setResult(result)
    }

    useEffect(() => {
        setUnicodeArray(
            p.code.split('').map((v, i) => {
                return unicode(v, 5)
            })
        )
    }, [])

    return (<>
        <CellTable value={unicodeArray ?? [["", "", "", "", ""]]}
            hide={true}
        />
        <input ref={inputRef} className="mt-20 text-lg"></input>
        <button className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-5 mt-5 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            onClick={() => {
                setIsResult(true)
                setTimeout(() => {
                    setIsResult(false)
                }, 2000)
                setCount(count + 1)
            }}>解答する</button>
        <div>
            {
                inputRef.current?.value === p.code ?
                    <>
                        <h1 className="text-2xl text-red-500 text-center">正解！</h1>
                        <PopupButton onClick={() => {
                            pushResult()
                        }}>
                            <>
                                <div className="w-full h-full bg-gray-200 items-center rounded-3xl flex-col flex justify-center">
                                    <p className="text-center">結果</p>
                                    <p className="text-center">{`${count}回で正解しました。`}</p>
                                    <div className="w-5/6 h-2/3 pt-2 px-1 break-words bg-slate-100 rounded-lg">
                                        <p>
                                            {result}
                                        </p>
                                    </div>
                                    <button className="text-green-900 hover:text-white border border-green-800 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-5 mt-5 dark:border-green-600 dark:text-green-400 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
                                        onClick={() => {
                                            copyToClipboard(result)
                                        }}>共有する</button>
                                </div>
                            </>
                        </PopupButton>
                    </>
                    : !isResult ? <></> : <>
                        <h1 className="text-2xl text-blue-500 text-center">不正解！</h1>
                    </>
            }
        </div>
    </>)
}