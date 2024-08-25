'use client'

import UserState from "@/context"


export default function CommonLayout({childern}){

    return <UserState>{childern}</UserState>
}