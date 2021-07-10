import React, { ReactFragment, useEffect } from 'react';
import styles from './header.module.css';
import { Title } from '../title/title';
import Link from 'next/link';
export const CustomHeader = (): JSX.Element => {
    return (
        <header
            className={`${styles.header} container`}
            style={{
                backgroundImage:
                    'url(' +
                    'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg' +
                    ')',
            }}
        >
            <div className={`${styles.dFlex} ${styles.spaceBetween}`}>
                <div className={styles.logo}>
                    <Link href="/">
                        <a>Blog</a>
                    </Link>
                </div>
            </div>
            <div className={styles.titleBlock}>
                <Title tag="h1">Simple posts blog</Title>
            </div>
        </header>
    );
};
