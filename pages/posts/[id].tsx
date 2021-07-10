import React, { useEffect, useState } from 'react';
import { GetStaticPaths, GetStaticPropsContext } from 'next';
import { getPost, getPostsList } from '../../api/api';
import { PostData } from '../../types/posts.interface';
import styles from '../../styles/Post.module.css';
import { withLayout } from '../../layout/layout';

const Post = ({ post }: PostPropsInterface) => {
    return (
        <div className={styles.post + ' container'}>
            <div
                className={styles.image}
                style={{ backgroundImage: `url(${post?.image})` }}
            />
            <div className={styles.postData}>
                <div className={styles.postDataColumn}>
                    <p className={styles.dataName}>Author:</p>
                    <p
                        className={styles.dataValue}
                    >{`${post?.owner.firstName} ${post?.owner.lastName}`}</p>
                </div>
                <div className={styles.postDataColumn}>
                    <p className={styles.dataName}>Likes:</p>
                    <p className={styles.dataValue}>{post?.likes}</p>
                </div>
                <div className={styles.postDataColumn}>
                    <p className={styles.dataName}>Published:</p>
                    <p className={styles.dataValue}>{post?.publishDate}</p>
                </div>

                <div className={styles.postDataColumn}>
                    <p className={styles.dataName}>Description:</p>
                    <p className={styles.dataValue}>{post?.text}</p>
                </div>
            </div>
        </div>
    );
};

export default withLayout(Post as React.FC);

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await getPostsList();
    return {
        paths: posts.data.map((post) => {
            return '/posts/' + post.id;
        }),
        fallback: true,
    };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
    if (!params || typeof params.id !== 'string') {
        return {
            notFound: true,
        };
    }

    const post = await getPost(params.id);
    return {
        props: { post },
    };
};

interface PostPropsInterface {
    post: PostData;
}
