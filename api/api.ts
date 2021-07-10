import { PostData, PostsData } from '../types/posts.interface';
import axios from 'axios';

axios.interceptors.request.use(function (config) {
    config.headers['app-id'] = process.env.NEXT_API_KEY;
    return config;
});

export const getPostsList = async (): Promise<PostsData> => {
    try {
        const data = await axios.get<PostsData>(
            process.env.NEXT_API_URL + 'data/api/post'
        );
        return data.data;
    } catch (e) {
        throw new Error(e);
    }
};

export const getPost = async (id: string): Promise<PostData> => {
    try {
        const data = await axios.get<PostData>(
            process.env.NEXT_API_URL + 'data/api/post/' + id
        );
        return data.data;
    } catch (e) {
        throw new Error(e);
    }
};
