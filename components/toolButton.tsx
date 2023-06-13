import { FC } from "react"
import { PopupButton } from "./popupButton"

type Props = {
    className?: string
}

export const ToolButton: FC<Props> = ({ className }) => {

    return (
        <div className={className}>
            <PopupButton className="w-12 h-12 bg-transparent hover:bg-zinc-500 text-slate-700 font-semibold hover:text-white border border-slate-400 hover:border-transparent rounded text-center py-2"
                buttonName="?">
                <div className="w-full h-full bg-gray-200 items-center rounded-3xl flex-col flex justify-center">
                    <p className="text-center my-4">遊び方</p>

                    <p>適当な所を押せば入力できます。</p>
                </div>
            </PopupButton>
        </div>
    )
}