import styles from '../styles/Home.module.css';
import React from 'react';
import { PostsData } from '../types/posts.interface';
import { getPostsList } from '../api/api';
import { PostsArchive } from '../components/postsArchive/postsArchive';
import { withLayout } from '../layout/layout';

const Home = ({ postsData }: HomeProps): JSX.Element => {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                {postsData ? <PostsArchive postsData={postsData} /> : ''}
            </main>
        </div>
    );
};

export default withLayout(Home as React.FC);

export const getStaticProps = async () => {
    const postsData = await getPostsList();
    return {
        props: { postsData },
    };
};

interface HomeProps extends React.FC {
    postsData: PostsData;
}
