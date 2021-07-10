import { LayoutInterface } from './layout.interface';
import { CustomHeader } from '../components/header/header';
import React, { Component } from 'react';

export const Layout = ({ children }: LayoutInterface) => {
    return (
        <>
            <CustomHeader />
            {children}
        </>
    );
};

export const withLayout = <T extends JSX.Element>(
    Component: React.ComponentType<T>
) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        );
    };
};
