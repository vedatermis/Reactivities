export  interface IProfile {
    diplayName: string,
    username: string,
    bio: string,
    image: string,
    photos: IPhoto[]
}

export interface IPhoto {
    id: string,
    url: string,
    isMain: boolean
}