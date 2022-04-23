import style from "./paginator.module.css"

export const Paginator = ({ totalUsersCount, pageSize, currentPage, onPageChanged }) => {
    let pageCount = Math.ceil(totalUsersCount / pageSize),
        pages = [];

    for (let i = 1; i <= pageCount; i++) {
        if (pageCount > 10 && i === 10) {
            break
        }
        pages.push(i)
    }

    return <div>
        {
            pages.map(p => {
                return <span onClick={() => onPageChanged(p)}
                    className={currentPage === p && style.currentPage }>
                    {p}
                </span>
            })
        }
    </div>
}
