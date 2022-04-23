import s from './post-item.module.css';

const PostItem = (props) => {

    let posts = [...props.postsData]
        .reverse()
        .map(post => (
            <div className={s.postItem}>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbvaBdtJ4GaN7m79jU-Y47NqT3Grvxd7qIZ9VKUZKyU1ynYKxoNdlQCixTRDnliBE62os&usqp=CAU"></img>
                </div>
                <div>{post.text}</div>
                <div>Likes: {post.likesCount}</div>
            </div>)
        );

    return (
        <div>
            {posts}
        </div>
    )
};

export default PostItem;