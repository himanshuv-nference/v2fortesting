import { makeStyles } from '@material-ui/styles'
import { Typography as T } from '@material-ui/core'
import { Icon } from '@material-ui/core'
import dynamic from 'next/dynamic'
import { TextField, NferxModal } from 'nferx-core-ui'
import React from 'react'
const logo = '/nference-web/NavbarImages/nferencelognav.svg'
const fbicon = '/nference-web/FooterImages/Combined-Shape.svg'
const twittericon = '/nference-web/FooterImages/Combined-Shape (1).svg'
const linkIcon = '/nference-web/FooterImages/Group 3627.svg'
import ClearIcon from '@material-ui/icons/Clear'
import emailjs from 'emailjs-com'
import Link from 'next/link'

const useStyles = makeStyles({
  body: {
    marginLeft: '120px',
    marginRight: '120px',
    ['@media (max-width:780px)']: {
      marginLeft: '16px',
      marginRight: '16px',
    },
  },
  desktop: {
    display: 'block',
    ['@media (max-width:780px)']: {
      display: 'none',
    },
  },
  mobile: {
    display: 'none',
    ['@media (max-width:780px)']: {
      display: 'block',
    },
  },
  footerText: {
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: '17px',
    color: '#627181',
    marginBottom: '16px',
  },
  footercontainer: {
    display: 'flex',
    gap: '52px',
  },
  sociallogos: {
    paddingTop: '90px',
  },
  footerlogos: {
    paddingRight: '12px',
  },
  copyrightDesktop: {
    paddingTop: '200px',
    paddingLeft: '45%',
    display: 'block',
    ['@media (max-width:780px)']: {
      paddingTop: '20px',
      paddingLeft: '0px',
      display: 'none',
    },
  },
  copyrightMobile: {
    paddingTop: '200px',
    paddingLeft: '45%',
    display: 'none',
    ['@media (max-width:780px)']: {
      paddingTop: '20px',
      paddingLeft: '0px',
      display: 'block',
    },
  },
  footerhead: {
    marginBottom: '28px',
    marginTop: '96px',
    ['@media (max-width:780px)']: {
      marginTop: '35px',
    },
  },
  formhead: {
    fontSize: '44px',
    fontWeight: '300',
    lineHeight: '150%',
    color: '#0057FF',
    ['@media (max-width:780px)']: {
      fontSize: '22px',
    },
    // textAlign: 'center',
    // paddingRight: '180px',
    // paddingLeft: '180px',
    // marginTop: '32px',
  },
  formsub: {
    fontSize: '24px',
    fontWeight: '300',
    lineHeight: '150%',
    color: '#627181',
    // textAlign: 'center',
    // paddingRight: '180px',
    // paddingLeft: '180px',
    marginTop: '16px',
    marginBottom: '60px',
    ['@media (max-width:780px)']: {
      fontSize: '16px',
      marginTop: '8px',
      marginBottom: '32px',
    },
  },
  formcontanier: {
    background: '#FAFBFC',
    padding: '60px',
    ['@media (max-width:780px)']: {
      padding: '0px',
    },
  },
  formbox: {
    display: 'flex',
    borderWidth: '1px',
    borderStyle: 'dashed',
    borderColor: '#0057FF',
    boxSizing: 'border-box',
    borderRadius: '1px',
    gap: '60px',
    padding: '102px 60px 80px 60px',
    ['@media (max-width:780px)']: {
      flexDirection: 'column',
      gap: '0px',
      padding: '16px',
    },
  },
  thankbox: {
    borderWidth: '1px',
    borderStyle: 'dashed',
    borderColor: '#0057FF',
    boxSizing: 'border-box',
    borderRadius: '1px',
    gap: '60px',
    ['@media (max-width:780px)']: {
      flexDirection: 'column',
      gap: '0px',
      padding: '16px',
    },
  },
  learnoretext: {
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '19px',
    color: '#0057FF',
    textAlign: 'center',
  },
  learnmore: {
    borderRadius: '20px',
    borderStyle: 'solid',
    borderColor: '#0057FF',
    boxSizing: 'border-box',
    borderWidth: '1px',
    textAlign: 'center',
    background: '#FFFFFF',
    maxWidth: '146px',
    padding: '8px 16px 8px 16px',
    marginBottom: '60px',
    ['@media (max-width:780px)']: {
      marginBottom: '28px',
    },
    '&:hover': {
      cursor: 'pointer',
    },
  },

  inputname: {
    display: 'flex',
    gap: '18px',
  },
  inputemail: {
    width: '100%',
  },
  inputmessage: {
    width: '100%',
    marginTop: '16px',
    marginBottom: '58px',
  },
  link: {
    textDecorationLine: 'none',
  },
  widthName: {
    width: '200px',
    marginBottom: '16px',
    ['@media (max-width:780px)']: {
      width: '100px',
    },
  },
  thankmodal: {
    margin: 'auto',
    // paddingTop: '13%',

    width: '1128px',

    ['@media (max-width:780px)']: {
      width: '300px',

      height: '80%',
      padding: '0px',
    },
    ['@media (min-width:100000px)']: {
      width: '60%',
    },
  },
  thankyoupad: {
    padding: '145px 5px 100px 45px',
    ['@media (max-width:780px)']: {
      padding: '10px',
    },
  },
  iconDiv: {
    textAlign: 'right',
    paddingTop: '25px',
    paddingRight: '23px',
  },
  icon: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
})

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
