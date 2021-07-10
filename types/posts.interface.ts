export interface Owner {
    id: string;
    title: string;
    firstName: string;
    lastName: string;
    email: string;
    picture: string;
}

export interface PostData {
    owner: Owner;
    id: string;
    image: string;
    publishDate: Date;
    text: string;
    tags: string[];
    link: string;
    likes: number;
}

export interface PostsData {
    data: PostData[];
    total: number;
    page: number;
    limit: number;
    offset: number;
}
