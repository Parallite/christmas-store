export const ButtonsMenu = () => {
    return (
        <>
            <ul className="w-1/5 flex justify-end items-center font-normal sm:text-xs 2xl:text-xl transition-all duration-1000">
                <li className="p-2">
                    <button>S</button>
                </li>
                <li className="p-2">
                    <button>C</button>
                </li >
                <li className="p-2 border-primary-white border-r-2">
                    <button>RU</button>
                </li>
                <li className="p-2">
                    <button>ENG</button>
                </li>
            </ul>
        </>
    )
}