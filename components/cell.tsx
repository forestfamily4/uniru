
type CellProps = {
    value: NonNullableString,
    key: string,
    onClick?: () => void,
    hide?: boolean,
    selecting?: boolean
}

export const Cell: React.FC<CellProps> = (p) => {
    const color = (p.hide ?? false) ? "bg-slate-800" : ""
    if (p.value.match(/[一-龠]/)) {
        return (
            <div className={`border-2 rounded-lg text-center w-12 h-12 text-3xl ${color} ${p.selecting ? "border-pink-500" : "border-slate-500 "}`}
                onClick={p.onClick}
            >
                <p className="p-1 font-serif" >
                    {p.value}
                </p>
            </div>
        )
    }
    return (
        <div className={`border-2 rounded-lg text-center w-12 h-12 text-3xl ${color} ${p.selecting ? "border-pink-500" : "border-slate-500 "}`}
            onClick={p.onClick}
        >
            <p className="p-1 font-serif">
                {p.value}
            </p>
        </div>
    )
}