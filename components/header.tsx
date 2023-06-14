import Link from "next/link"
import { Cell } from "./cell"
import { ToolButton } from "./toolButton"

type props = {}

export const Header: React.FC<props> = () => {
    return (
        
            <Link href="/" className='justify-center flex gap-1 mx-auto w-60'>
                <Cell value="U" key={"0"} />
                <Cell value="N" key={"1"} />
                <Cell value="I" key={"2"} />
                <Cell value="R" key={"3"} />
                <Cell value="U" key={"3"} />
            </Link>
    )
}