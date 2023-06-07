"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { CellTable } from "./cellTable"
import { TextInput } from "./textInput"
import { ButtonArrow } from "./buttonArrow"
import { Footer } from "./footer"
import { GlobalTextProvider, useGlobalText } from "./providers/GlobalText"
import { URLGenerator } from "./urlGenerator"
import { copyToClipboard } from "@/lib/util"

type Props = {}
type UnicodeArray = Array<Array<string>>

export const InputString = createContext("")

export const Editor: React.FC<Props> = () => {
    const [inputText, setInputText] = useGlobalText()
    const [unicodeArray, setUnicodeArray] = useState<UnicodeArray>()
    const [selectingUnicode, setSelectingUnicode] = useState("")
    const unicode = (centerCharacter: string, num: number) => {
        const code = centerCharacter.charCodeAt(0);
        let result: Array<string> = []
        let startNum = -Math.floor(num / 2)
        for (let i = startNum; i < num + startNum; i++) {
            result.push(String.fromCharCode(code + i))
        }
        return result
    }

    useEffect(() => {
        setUnicodeArray(
            inputText.split('').map((v, i) => {
                return unicode(v, 5)
            })
        )
    }, [inputText])

    return (<>
        <URLGenerator code={inputText} />
        <TextInput onInputChange={(a) => {
            setInputText(a)
        }}></TextInput>
        <CellTable value={unicodeArray ?? [["", "", "", "", ""]]}
            onCellClicked={
                (str) => {
                    setSelectingUnicode(str)
                    copyToClipboard(str)
                }
            }
            onArrowClicked={(d, i) => {
                const newInputText = inputText.split('')
                const num = d == "left" ? -1 : 1
                newInputText[i] = String.fromCharCode(newInputText[i].charCodeAt(0) + num)
                setInputText(newInputText.join(''))
            }}
            hide={false}
        />
        <Footer value={selectingUnicode} />
    </>)
}