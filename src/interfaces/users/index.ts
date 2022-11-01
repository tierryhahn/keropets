export interface IUserRequest {
    name: string
    email: string
    password: string
    isAdm?: boolean
}

export interface IUser {
    id: string
    name: string
    email: string
    isAdm?: boolean
    createdAt: Date
    updatedAt: Date
}


export interface IUserLogin {
    email: string
    password: string
}

export interface IUserUpdate {
    id?: string
    isActive?: boolean
    isAdm?: boolean
    name?: string
    email?: string
    password?: string
}