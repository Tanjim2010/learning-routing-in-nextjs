"use client"

import { useSession } from "next-auth/react";

const UserInfo = () => {
    const session = useSession()
    return (
        <div>
            <p className="text-xl font-bold ">from client</p>
            <p>{JSON.stringify(session)}</p>
        </div>
    );
};

export default UserInfo;