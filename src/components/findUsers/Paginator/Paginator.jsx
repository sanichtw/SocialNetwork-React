import style from "./paginator.module.css";
import { useState } from "react"

export const Paginator = ({ totalUsersCount, pageSize, currentPage, onPageChanged, portionSize }) => {
    let pageCount = Math.ceil(totalUsersCount / pageSize),
        pages = [];

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pageCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionNumber = portionNumber * portionSize;

    return <div>
        {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>PREV</button>}
        {
            pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionNumber)
                .map(p => {
                    return <span onClick={() => onPageChanged(p)}
                        className={currentPage === p && style.currentPage}>
                        {p}
                    </span>
                })
        }
        {portionNumber < portionCount && <button onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>}
    </div>
}
