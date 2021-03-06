import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({currentPage, pageSize, onPageChanged, totalUsersCount, users, ...props}) => {
    return (
        <div>
            <Paginator currentPage={currentPage} pageSize={pageSize}
                       onPageChanged={onPageChanged} totalItemsCount={totalUsersCount}/>
            {users.map((u) => (
                <User key={u.id} user={u} followingInProgress={props.followingInProgress}
                      follow={props.follow} unfollow={props.unfollow}/>
            ))}
        </div>
    );
};

export default Users;
