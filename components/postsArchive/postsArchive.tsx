import React from 'react';
import { PostsArchiveInterface } from './postsArchive.interface';
import styles from './postsArchive.module.css';
import { Title } from '../title/title';
import Link from 'next/link';

export const PostsArchive = ({
    postsData,
}: PostsArchiveInterface): JSX.Element => {
    return (
        <div className={styles.postsArchive + ' container'}>
            {postsData.data.map((post) => {
                if (post.image) {
                    return (
                        <div key={post.id} className={styles.post}>
                            <div
                                className={styles.img}
                                style={{
                                    backgroundImage: 'url(' + post.image + ')',
                                }}
                            />
                            <Title tag={'h4'}>
                                {post.owner.firstName +
                                    ' ' +
                                    post.owner.lastName}
                            </Title>
                            <div className={styles.text}>{post.text}</div>
                            <Link href={`/posts/${post.id}`}>
                                <a className={styles.link} />
                            </Link>
                        </div>
                    );
                }
            })}
        </div>
    );
};
