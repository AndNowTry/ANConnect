import { create } from "zustand"



interface User
{
    id: string
    name: string
    video: boolean
    sound: boolean
}

interface RoomStore
{
    users: User[]
    currentUsers: User[]
    page: number

    //video: boolean
    //sound: boolean

    recalculation: () => void
    addUser: (user: User) => void
    removeUser: (id: string) => void
}



export const useRoomStore = create<RoomStore>((set) => ({
    users: [],
    currentUsers: [],
    page: 1,

    recalculation: () =>
        set(() => ({
            users: [],
        })),

    addUser: (user) =>
        set((state) => ({
            users: [...state.users, user],
        })),

    removeUser: (id) =>
        set((state) => ({
            users: state.users.filter((u) => u.id !== id),
        })),
}))