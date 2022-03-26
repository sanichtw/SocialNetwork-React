import * as axios from 'axios';
import { Component } from 'react';
import style from './findUsers.module.css';

export default class FindUsers extends Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pagesCount}`)
                .then(response => {
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount);
                })
        }

    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pagesCount}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    };

    render() {
        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pagesCount);
        let pages = [];

        for (let i = 1; i <= pageCount; i++) {
            if (pageCount > 10 && i === 10) {
                break
            }
            pages.push(i)
        }

        return <div className={style.users_wrapper}>
            {
                pages.map(p => {
                    return <span
                        onClick={() => this.onPageChanged(p)}
                        className={this.props.currentPage === p && style.active_page}>{p}
                    </span>
                })
            }
            {
                this.props.users.map(user =>
                (
                    <div key={user.id} className={style.user}>
                        <div className={style.user_photo}>
                            <div>img</div>
                            <button onClick={() => this.props.follow(user.id)}>{user.followed ? 'Follow' : 'unFollow'}</button>
                        </div>

                        <div className={style.user_info}>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </div>

                        <div className={style.user_location}>
                            <div>{'user.location.city'}</div>
                            <div>{'user.location.country'}</div>
                        </div>
                    </div>)
                )
            }
        </div >

    }
};