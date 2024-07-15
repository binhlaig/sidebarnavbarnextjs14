import Link from 'next/link'
import styles from './menulink.module.css'

const menuLink = ({ item }) => {
    return (

        <Link href={item.path} className={styles.container}>
            {item.icon}
            {item.title}
        </Link>

    )
}

export default menuLink
