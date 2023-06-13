import { copyToClipboard } from "@/lib/util"

type Props = {
    value: string,

}

export const Footer: React.FC<Props> = (p) => {
    return (
        p.value === "" ? (<></>) :
            <div className="sticky pt-3 pb-2 bottom-2 flex flex-col items-center w-64 h-20 bg-gray-200 mt-auto rounded-2xl">
                <h1 className="text-lg">{p.value}</h1>
                <p>{`U+${p.value.charCodeAt(0).toString(16).toUpperCase()}`}</p>
            </div>
    )
}