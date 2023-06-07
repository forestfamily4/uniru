import { deepStrictEqual } from "assert"
import { useEffect, useState } from "react";

type Props = {
    onClick?: () => void,
    children: React.ReactNode
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
            <div className="text-green-900 hover:text-white border border-green-800 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-5 mt-5 dark:border-green-600 dark:text-green-400 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
                onClick={() => {
                    setViewFlag(true)
                    p.onClick?.()
                }}>結果を共有</div>
            <div
                className={
                    'fixed flex flex-col items-center justify-center overflow-hidden bg-gray-500/50' +
                    (viewFlag
                        ? ' top-0 left-0 h-screen w-screen '
                        : ' top-1/2 left-1/2 h-0 w-0 ')
                }
                onClick={onClickBackground}
            >
                <div className="relative h-2/3 w-5/6 max-w-3xl">
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