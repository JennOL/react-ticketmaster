import styles from './Error404.module.css';

import { useRouteError } from 'react-router-dom';

const Error404 = () => {
    const error = useRouteError();
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Error 404</h1>
            <p className={styles.description}>{ error.data || error.statusText }</p>
        </div>
    )
};

export default Error404;