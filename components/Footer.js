import { Typography as T } from '@material-ui/core'
import { Icon } from '@material-ui/core'
import { TextField, NferxModal } from 'nferx-core-ui'
import React from 'react'
const logo = '/nference-web/NavbarImages/nferencelognav.svg'
const fbicon = '/nference-web/FooterImages/Combined-Shape.svg'
const twittericon = '/nference-web/FooterImages/Combined-Shape (1).svg'
const linkIcon = '/nference-web/FooterImages/Group 3627.svg'
import ClearIcon from '@material-ui/icons/Clear'
import emailjs from 'emailjs-com'
import Link from 'next/link'
import useStyles from '../public/styles/FooterStyles'

export default function Footer() {
  const styles = useStyles()
  const [formData, setFormData] = React.useState({
    company: '',
    title: '',
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  })
  const [thankModal, setThankyoumodal] = React.useState(false)
  const thankyouModalOpen = () => setThankyoumodal(true)
  const thankyouModalClose = () => setThankyoumodal(false)
  const [errorFormData, setErrorFormData] = React.useState({
    email: false,
  })

  const handleSubmit = () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
      let templateParams = {
        Company: formData.company,
        Title: formData.title,
        FirstName: formData.firstName,
        LastName: formData.lastName,
        email: formData.email,
        message: formData.message,
        url: window.location.href,
      }

      emailjs
        .send(
          'gmail',
          'template_icnp7rr',
          templateParams,
          'user_NDr8LLvItzOz9RUGuVouS',
        )
        .then(
          (result) => {
            thankyouModalOpen()
          },
          (error) => {
            console.log('formerror', error.text)
          },
        )
    } else {
      setErrorFormData((prev) => {
        return {
          ...prev,
          email: true,
        }
      })
    }
  }

  return (
    <div>
      <div className={styles.formcontanier}>
        <div className={styles.formbox}>
          <div>
            <T className={styles.formhead}>
              Let’s talk about how we can work together.
            </T>
            <T className={styles.formsub}>
              Fill out the form and we’ll get right back to you.
            </T>
          </div>
          <div>
            <div className={styles.inputname}>
              <TextField
                placeholder={'Company'}
                variant={'underlined'}
                className={styles.widthName}
                onChange={(e) => setFormData({ ...formData, company: e })}
              />
              <TextField
                placeholder={'Title'}
                variant={'underlined'}
                className={styles.widthName}
                onChange={(e) => setFormData({ ...formData, title: e })}
              />
            </div>
            <div className={styles.inputname}>
              <TextField
                placeholder={'First Name'}
                variant={'underlined'}
                className={styles.widthName}
                onChange={(e) => setFormData({ ...formData, firstName: e })}
              />
              <TextField
                placeholder={'Last Name'}
                variant={'underlined'}
                className={styles.widthName}
                onChange={(e) => setFormData({ ...formData, lastName: e })}
              />
            </div>
            <div>
              <TextField
                placeholder={'Email'}
                variant={'underlined'}
                className={styles.inputemail}
                onChange={(e) => setFormData({ ...formData, email: e })}
                helperText={
                  errorFormData.email
                    ? 'Please give valid email and try again'
                    : null
                }
                error={errorFormData.email}
              />
            </div>
            <div>
              <TextField
                placeholder={'Message'}
                variant={'underlined'}
                className={styles.inputmessage}
                onChange={(e) => setFormData({ ...formData, message: e })}
              />
            </div>

            <div className={styles.learnmore} onClick={handleSubmit}>
              <T className={styles.learnoretext}>Let’s talk -{'>'}</T>
            </div>
            <NferxModal
              contentPad
              className={styles.thankmodal}
              open={thankModal}
              onClose={thankyouModalClose}
              noCloseInRight
            >
              <div className={styles.formcontanier}>
                <div className={styles.thankbox}>
                  <div className={styles.iconDiv}>
                    <Icon onClick={thankyouModalClose} className={styles.icon}>
                      <ClearIcon />
                    </Icon>
                  </div>

                  <div className={styles.thankyoupad}>
                    <T className={styles.formhead}>Thank You!</T>
                    <T className={styles.formsub}>
                      Our team will contact you soon
                    </T>
                  </div>
                </div>
              </div>
            </NferxModal>
          </div>
        </div>
      </div>
      <div className={styles.body}>
        <div>
          <img className={styles.footerhead} src={logo} />
          <div className={styles.footercontainer}>
            <div>
              <Link href="https://nference.ai/privacy-policy">
                <a className={styles.link}>
                  <T className={styles.footerText}>Privacy policy</T>
                </a>
              </Link>
              <Link href="https://nference.ai/terms">
                <a className={styles.link}>
                  <T className={styles.footerText}>Terms of Use</T>
                </a>
              </Link>
              <T className={styles.footerText}>Trademark</T>
              <div className={styles.sociallogos}>
                <img className={styles.footerlogos} src={fbicon} />
                <img className={styles.footerlogos} src={twittericon} />
                <img className={styles.footerlogos} src={linkIcon} />
              </div>
            </div>
            <div>
              <Link href="/aboutus">
                <a className={styles.link}>
                  <T className={styles.footerText}>About Us</T>
                </a>
              </Link>
              <Link href="/pharma">
                <a className={styles.link}>
                  <T className={styles.footerText}>For Pharma</T>
                </a>
              </Link>
              <Link href="/medical">
                <a className={styles.link}>
                  <T className={styles.footerText}>For Medical Centers</T>
                </a>
              </Link>
              <Link href="/publications">
                <a className={styles.link}>
                  <T className={styles.footerText}>Publications</T>
                </a>
              </Link>
              <Link href="/news">
                <a className={styles.link}>
                  <T className={styles.footerText}>Media</T>
                </a>
              </Link>
              <Link href="/covid">
                <a className={styles.link}>
                  <T className={styles.footerText}>Covid</T>
                </a>
              </Link>

              {/* <NavLink to="/"" ><T className={styles.footerText}>Contact Us</T> */}
            </div>

            <div className={styles.copyrightDesktop}>
              <T className={styles.footerText}>
                @2021 nference, Inc. All rights reserved.
              </T>
            </div>
          </div>
          <div className={styles.mobile}>
            <div className={styles.copyrightMobile}>
              <T className={styles.footerText}>
                @2021 nference, Inc. All rights reserved.
              </T>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
