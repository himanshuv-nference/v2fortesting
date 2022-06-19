import { Typography as T } from '@material-ui/core'
import React from 'react'

const logo = '/NavbarImages/nferencelognav.svg'
const fbicon = '/FooterImages/Combined-Shape.svg'
const twittericon = '/FooterImages/Combined-Shape (1).svg'
const linkIcon = '/FooterImages/Group 3627.svg'
import Link from 'next/link'
import useStyles from './FooterStyles'
import FooterContactForm from './FooterContactForm'
import Section from '../Section/Section'
import { PrismicLink } from '@prismicio/react'

export default function Footer({ footer, theme }) {
  const styles = useStyles()

  return (
    <>
      <FooterContactForm />
      <Section size={'xl'}>
        <img className={styles.footerhead} src={logo} alt={'nference Logo'} />
        <div className={styles.menusContainer}>
          <div className={styles.firstContainer}>
            <div>
              {footer?.data?.menu1
                ?.filter((item) => !item.link.isBroken)
                ?.map(({ link, linkText }) => {
                  return (
                    <PrismicLink field={link} className={styles.footerText}>
                      {linkText}
                    </PrismicLink>
                  )
                })}
            </div>
            <div>
              {theme?.data?.facebook && (
                <Link href={theme.data.facebook} target={'_blank'}>
                  <a className={styles.footerlogos}>
                    <img
                      src={fbicon}
                      alt={'Facebook'}
                    />
                  </a>
                </Link>
              )}
              {theme?.data?.twitter && (
                <Link href={theme.data.twitter} target={'_blank'}>
                  <a className={styles.footerlogos}>
                    <img
                      src={twittericon}
                      alt={'Twitter'}
                    />
                  </a>
                </Link>
              )}
              {theme?.data?.linkedIn && (
                <Link href={theme.data.linkedIn} target={'_blank'}>
                  <a className={styles.footerlogos}>
                    <img
                      src={linkIcon}
                      alt={'LinkedIn'}
                    />
                  </a>
                </Link>
              )}
            </div>
          </div>
          <div>
            {footer?.data?.menu2
              ?.filter((item) => !item.link.isBroken)
              ?.map(({ link, linkText }) => {
                return (
                  <PrismicLink field={link} className={styles.footerText}>
                    {linkText}
                  </PrismicLink>
                )
              })}
          </div>
        </div>
        <div className={styles.copyrightDesktop}>
          <T className={styles.footerText}>
            @{new Date().getFullYear()} nference, Inc. All rights reserved.
          </T>
        </div>
      </Section>
    </>
  )
}
