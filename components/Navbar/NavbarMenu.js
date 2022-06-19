import { ButtonBase, Drawer, Icon, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import Link from 'next/link'
import ClearIcon from '@material-ui/icons/Clear'
import React from 'react'
import useStyles from './NavbarStyles'
import { PrismicLink } from '@prismicio/react'
import cx from 'clsx'
import { useRouter } from 'next/router'

const logo = '/NavbarImages/nferencelognav.svg'

export default function NavbarMenu({ menu, onOpenContactUs }) {
  const styles = useStyles()
  const [isOpen, setIsOpen] = React.useState(false)
  const { asPath } = useRouter()

  return (
    <>
      <IconButton onClick={() => setIsOpen(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor={'top'} open={isOpen} onClose={() => setIsOpen(false)}>
        <div className={styles.topline} />
        <div className={styles.logoDiv}>
          <Link href="/">
            <a>
              <img
                className={styles.mobileLogo}
                src={logo}
                alt={'nference Logo'}
              />
            </a>
          </Link>
          <Icon onClick={() => setIsOpen(false)}>
            <ClearIcon />
          </Icon>
        </div>
        <div className={styles.line} />
        <div className={styles.mobileNav}>
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
                          onClick={() => setIsOpen(false)}
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
        </div>
        <ButtonBase
          className={styles.selected}
          onClick={() => {
            setIsOpen(false)
            onOpenContactUs()
          }}
        >
          Contact Us
        </ButtonBase>
      </Drawer>
    </>
  )
}
