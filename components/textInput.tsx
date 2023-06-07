"use client"
import { useEffect, useMemo, useRef } from "react"
import { useGlobalText } from "./providers/GlobalText"

type Props = {
    onInputChange: (value: string) => void
}

export const TextInput: React.FC<Props> = (p) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const [text, setText] = useGlobalText()
    const focus = (e: MouseEvent) => {
        const targetId = (e.target as HTMLElement)?.id;
        if (targetId === "keyboard") {
            inputRef.current?.focus()
        }
    }
    useEffect(() => {
        window.addEventListener("click", focus)
        setText("可憐な花")
    }, [])
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.value = text;
            inputRef.current.focus();
            //inputRef.current.selectionStart = inputRef.current.selectionEnd = inputRef.current.value.length;
        }
    }, [text])

    return (
        <div className="opacity-0">
            <input ref={inputRef} type="text" onChange={() => {
                p.onInputChange(inputRef.current?.value || "")
            }} ></input>
        </div>
    )
}