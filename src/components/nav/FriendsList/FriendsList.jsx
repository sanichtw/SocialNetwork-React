export const FriendsList = (props) => {
    return <>
        {
            props.friends.map(fr => {
                return (
                    <div key={fr.id}>
                        <img src={fr.avatar}></img>
                        <div>{fr.name}</div>
                    </div>
                );
            })
        }
    </>
};