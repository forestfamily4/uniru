import { useEffect, useRef, useState } from "react"
import { useGlobalText } from "./providers/GlobalText"
import { TextInput } from "./textInput"
import { CellTable } from "./cellTable"

type Props = {
    code: string
}
type UnicodeArray = Array<Array<string>>

export const Solver: React.FC<Props> = (p) => {
    const [unicodeArray, setUnicodeArray] = useState<UnicodeArray>()
    const [selectingUnicode, setSelectingUnicode] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)
    const unicode = (centerCharacter: string, num: number) => {
        const code = centerCharacter.charCodeAt(0);
        let result: Array<string> = []
        let startNum = -Math.floor(num / 2)
        for (let i = startNum; i < num + startNum; i++) {
            result.push(String.fromCharCode(code + i))
        }
        return result
    }
    const [result,setResult]=useState("")

    useEffect(() => {
        setUnicodeArray(
            p.code.split('').map((v, i) => {
                return unicode(v, 5)
            })
        )
    }, [])

    return (<>
        <CellTable value={unicodeArray ?? [["", "", "", "", ""]]}
            onCellClicked={
                (str) => {
                    
                }
            }
            onArrowClicked={(d, i) => {
                /*
                const newInputText = inputText.split('')
                const num = d == "left" ? -1 : 1
                newInputText[i] = String.fromCharCode(newInputText[i].charCodeAt(0) + num)
                setInputText(newInputText.join(''))
                */
            }}
            hide={true}
        />
        <input ref={inputRef} className="mt-20 text-lg" onChange={()=>{
            setResult(
                inputRef.current?.value===p.code?"あってるよ":"バカなの？"
            )
        }}></input>
        <p>{result}</p>
    </>)
}