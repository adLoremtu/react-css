import Link from 'next/link'
import styles from './pageLink.module.scss'

type Props = {
  current: string
}

const linkObj = [
  {
    href: "/",
    title: "Top",
  },
  {
    href: "/modules/cssmodules",
    title: "CSS Modules",
  },
  {
    href: "/styledComponents/cssinjs",
    title: "CSS in JS",
  },
]

export default function PageLink(props: Props) {
  const links = linkObj.map((link, i) => {
    const isCurrentShowPage = props.current === link.title

    return (
      <li key={i} className={`${styles['links__item']} ${isCurrentShowPage ? styles['current'] : ''}`}>
        {isCurrentShowPage ? link.title : <Link href={link.href}>{link.title}</Link>}
      </li>
    )
  })

  return (
    <ul className={styles.links}>
      {links}
    </ul>
  )
}
