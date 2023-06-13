import Link from "next/link"
import { Cell } from "./cell"
import { ToolButton } from "./toolButton"

type props = {}

export const Header: React.FC<props> = () => {
    return (
        <div className="mt-3 flex w-1/3 mx-auto">
            <div className="w-80 mx-auto flex relative">
                <Link href="/" className='justify-center flex gap-1 mx-auto w-60'>
                    <Cell value="U" key={"0"} />
                    <Cell value="N" key={"1"} />
                    <Cell value="I" key={"2"} />
                    <Cell value="R" key={"3"} />
                    <Cell value="U" key={"3"} />
                </Link>
            </div>
        </div>
    )
}