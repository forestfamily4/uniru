
type Props = {
    onClick: () => void,
    direction: "left" | "right"
}

export const ButtonArrow: React.FC<Props> = (p) => {
    return (
        <div className="mx-auto w-12 h-12">
            <button className="w-12 h-12 bg-transparent hover:bg-zinc-500 text-slate-700 font-semibold hover:text-white   border border-slate-400 hover:border-transparent rounded" onClick={p.onClick}>
                {p.direction === "left" ? (
                    "←"
                ) : p.direction === "right" ? "→" : ""}
            </button>
        </div>
    )
}