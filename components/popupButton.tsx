import { deepStrictEqual } from "assert"
import { useEffect, useState } from "react";

type Props = {
    onClick?: () => void,
    children?: React.ReactNode,
    className?:string,
    buttonName:string
}

export const PopupButton: React.FC<Props> = (p) => {
    const [viewFlag, setViewFlag] = useState(false)
    useEffect(() => {
        const registerBackgroundFixed = () => {
            const body = document.body;
            const scrollWidth = window.innerWidth - body.clientWidth;
            body.style.marginRight = `${scrollWidth}px`;
            body.style.overflowY = 'hidden';
        };
        const unRegisterBackgroundFixed = () => {
            const body = document.body;
            body.style.overflowY = '';
            body.style.marginRight = '';
        };
        if (viewFlag) registerBackgroundFixed();

        return () => {
            unRegisterBackgroundFixed();
        };
    }, [viewFlag]);

    const onClickBackground = () => {
        setViewFlag(false);
    };

    const onClickCard = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
    };
    return (
        <>
            <div className={p.className}
                onClick={() => {
                    setViewFlag(true)
                    p.onClick?.()
                }}>{p.buttonName}</div>
            <div
                className={
                    'fixed flex flex-col items-center justify-center overflow-hidden bg-gray-500/50' +
                    (viewFlag
                        ? ' top-0 left-0 h-screen w-screen '
                        : ' top-1/2 left-1/2 h-0 w-0 ')
                }
                onClick={onClickBackground}
            >
                <div className="relative h-2/3 w-2/3 max-w-3xl">
                    <div
                        id="policy"
                        className="flex h-full w-full flex-col bg-none"
                        onClick={onClickCard}
                    >
                        {p.children}
                    </div>
                </div>
            </div>
        </>
    )
}