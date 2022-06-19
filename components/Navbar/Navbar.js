import React from 'react'
import useStyles from './NavbarStyles'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { ButtonBase } from '@material-ui/core'
import { PrismicLink } from '@prismicio/react'
import NavbarMenu from './NavbarMenu'
import ContactUsModal from './ContactUsModal'
import cx from 'clsx'

const logo = '/NavbarImages/nferencelognav.svg'

export default function Navbar({ menu }) {
  const styles = useStyles()
  const [isContactUsOpen, setIsContactUsOpen] = React.useState(false)

  const { asPath } = useRouter()

  return (
    <div className={styles.sticky}>
      <div className={styles.topline} />
      <div className={styles.body}>
        <div className={styles.nav}>
          <Link href="/">
            <a>
              <img src={logo} alt={'nference Logo'} />
            </a>
          </Link>
          <div className={styles.navItems}>
            {menu?.data?.links
              ?.filter((item) => !item.link.isBroken)
              ?.map(({ link, linkText }) => {
                return (
                  <PrismicLink
                    field={link}
                    internalComponent={({ href, children, ...props }) => {
                      return (
                        <Link href={href}>
                          <a
                            {...props}
                            className={cx(styles.link, {
                              [styles.activeLink]: href === asPath,
                            })}
                          >
                            {children}
                          </a>
                        </Link>
                      )
                    }}
                  >
                    {linkText}
                  </PrismicLink>
                )
              })}
            <ButtonBase
              className={styles.selected}
              onClick={() => setIsContactUsOpen(true)}
            >
              Contact Us
            </ButtonBase>
            <ContactUsModal
              isOpen={isContactUsOpen}
              onClose={() => setIsContactUsOpen(false)}
            />
          </div>
          <div className={styles.mobile}>
            <NavbarMenu
              menu={menu}
              onOpenContactUs={() => setIsContactUsOpen(true)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
