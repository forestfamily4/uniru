import { useEffect, useState } from "react"
import { ButtonArrow } from "./buttonArrow"
import { Cell } from "./cell"

type Props = {
    value: Array<NonNullableString[]>,
    onCellClicked?: (str: string) => void,
    onArrowClicked?: (direction: "left" | "right", num: number) => void,
    hide: boolean
}

export const CellTable: React.FC<Props> = (props) => {
    const [selectingCell, setSelectingCell] = useState<Array<number>>()
    useEffect(() => {
        window.addEventListener("click", focus)
    }, [])
    let spaceNum = props.value.length - 5
    if (spaceNum < 0) { spaceNum = 0 }
    if (props.value.length < 1) { return <></> }
    const pLength = props.value[0].length
    if (pLength % 2 === 0) { return <>Error:Length is even</>; }
    const hideNum = (pLength - 1) / 2

    const focus = (e: MouseEvent) => {
        const targetId = (e.target as HTMLElement)?.id;
        if (targetId === "keyboard") {
            setSelectingCell(undefined)
        }
    }


    return (
        <div className="grid gap-1 place-content-center">
            {props.value.map((v, i) => {
                return (
                    <div className="flex gap-1" key={i}>
                        {
                            !props.hide ? <ButtonArrow onClick={() => {
                                props.onArrowClicked?.("left", i)
                                setSelectingCell(undefined)
                            }} direction="left"></ButtonArrow> : <></>
                        }
                        {
                            v.map((v2, i2) => {
                                if (i2 === hideNum && props.hide && v2!=="") {
                                    return (
                                        <Cell value={""} key={`${i}-${i2}`} onClick={() => { props.onCellClicked?.(v2) }} hide={true} />
                                    )
                                }
                                return (
                                    <Cell value={v2} key={`${i}-${i2}`} onClick={() => {
                                        props.onCellClicked?.(v2)
                                        setSelectingCell([i, i2])
                                    }} selecting={
                                        selectingCell?.[0] === i && selectingCell?.[1] === i2
                                    } />
                                )
                            })}
                        {
                            !props.hide ? <ButtonArrow onClick={() => {
                                props.onArrowClicked?.("right", i)
                                setSelectingCell(undefined)
                            }} direction="right"></ButtonArrow> : <></>
                        }
                    </div>
                )
            })
            }
        </div>
    )
}
