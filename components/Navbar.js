import { Typography as T } from '@material-ui/core'
import { Drawer } from '@material-ui/core'
import { Icon } from '@material-ui/core'
import dynamic from 'next/dynamic'
import React from 'react'
const logo = '/nference-web/NavbarImages/nferencelognav.svg'
import MenuIcon from '@material-ui/icons/Menu'
import ClearIcon from '@material-ui/icons/Clear'
import clsx from 'clsx'
import useStyles from '../public/styles/NavbarStyles'
import { emailjs } from 'emailjs-com'
import { useRouter } from 'next/router'
import Link from 'next/link'

const NferxModal = dynamic(
  () => {
    return import('nferx-core-ui/src/widgets/NferxModal/NferxModal')
  },
  { ssr: false },
)
const TextField = dynamic(
  () => {
    return import('nferx-core-ui/src/widgets/TextField/TextField')
  },
  { ssr: false },
)

function Navbar() {
  const styles = useStyles()
  const [open, setOpen] = React.useState(false)
  const [thankModal, setThankyoumodal] = React.useState(false)
  const [formData, setFormData] = React.useState({
    company: '',
    title: '',
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  })
  const [errorFormData, setErrorFormData] = React.useState({
    email: false,
  })
  const emailValition = () => {
    return true
  }

  const modalClose = () => setOpen(false)
  const ModalOpen = () => setOpen(true)
  const thankyouModalOpen = () => setThankyoumodal(true)
  const thankyouModalClose = () => setThankyoumodal(false)

  const [state, setState] = React.useState({
    top: false,
  })
  const location = useRouter()
  const { pathname } = location
  const splitLocation = pathname.split('/')

  const toggle = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }
  const handleSubmit = () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
      let templateParams = {
        Company: formData.Company,
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
            modalClose()
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
      <div className={styles.topline}></div>
      <div className={styles.body}>
        <div className={styles.nav}>
          <div className={styles.image}>
            <Link href="/">
              <a>
                <img src={logo} />
              </a>
            </Link>
          </div>
          <div className={styles.navItems}>
            <div>
              <Link href="/aboutus">
                <a
                  className={
                    splitLocation[1] === 'aboutus'
                      ? styles.activeLink
                      : styles.link
                  }
                >
                  <T>About us</T>
                </a>
              </Link>
            </div>
            <T>
              <Link href="/pharma">
                <a
                  className={
                    splitLocation[1] === 'pharma'
                      ? styles.activeLink
                      : styles.link
                  }
                >
                  For Pharma
                </a>
              </Link>
            </T>
            <T>
              <Link href="/medical">
                <a
                  className={
                    splitLocation[1] === 'medical'
                      ? styles.activeLink
                      : styles.link
                  }
                >
                  For Medical Centers
                </a>
              </Link>
            </T>
            <div>
              <Link href="/publications">
                <a
                  className={
                    splitLocation[1] === 'publications'
                      ? styles.activeLink
                      : styles.link
                  }
                >
                  <T>Publications</T>
                </a>
              </Link>
            </div>
            <div>
              <Link href="/news">
                <a
                  className={
                    splitLocation[1] === 'news'
                      ? styles.activeLink
                      : styles.link
                  }
                >
                  <T>Media</T>
                </a>
              </Link>
            </div>
            <div>
              <Link href="/covid">
                <a
                  className={
                    splitLocation[1] === 'covid'
                      ? styles.activeLink
                      : styles.link
                  }
                >
                  <T>Covid</T>
                </a>
              </Link>
            </div>

            <div className={styles.selected} onClick={ModalOpen}>
              <T>Contact Us</T>
            </div>
          </div>
          <NferxModal
            contentPad
            className={styles.modal}
            open={open}
            onClose={modalClose}
            noCloseInRight
          >
            <div className={styles.formcontanier}>
              <div className={styles.formbox}>
                <div className={styles.iconDiv}>
                  <Icon onClick={modalClose} className={styles.icon}>
                    <ClearIcon />
                  </Icon>
                </div>
                <div className={styles.formboxFlex}>
                  <div>
                    <T className={styles.contactusText}>Contact Us</T>
                    <T className={styles.formhead}>
                      Let’s talk about how we can work together.
                    </T>
                    <T className={styles.formsub}>
                      Fill out the form and we’ll get right back href you.
                    </T>
                  </div>
                  <div>
                    <form>
                      <div
                        className={clsx(styles.inputname, styles.companyDiv)}
                      >
                        <TextField
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              company: e,
                            })
                          }
                          placeholder={'Company'}
                          variant={'underlined'}
                          className={styles.nameInput}
                        />
                        <TextField
                          value={formData.title}
                          onChange={(e) =>
                            setFormData({ ...formData, title: e })
                          }
                          placeholder={'Title'}
                          variant={'underlined'}
                          className={styles.nameInput}
                        />
                      </div>
                      <div className={styles.inputname}>
                        <TextField
                          value={formData.firstName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              firstName: e,
                            })
                          }
                          className={styles.nameInput}
                          placeholder={'First Name'}
                          variant={'underlined'}
                        />
                        <TextField
                          value={formData.lastName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              lastName: e,
                            })
                          }
                          className={styles.nameInput}
                          placeholder={'Last Name'}
                          variant={'underlined'}
                        />
                      </div>
                      <div>
                        <TextField
                          onChange={(e) =>
                            setFormData({ ...formData, email: e })
                          }
                          value={formData.email}
                          placeholder={'Email'}
                          variant={'underlined'}
                          className={styles.inputemail}
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
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              message: e,
                            })
                          }
                          value={formData.message}
                          placeholder={'Message'}
                          className={styles.inputmessage}
                          variant={'underlined'}
                        />
                      </div>

                      <div className={styles.learnmore} onClick={handleSubmit}>
                        <T className={styles.learnoretext}>Let's Talk</T>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </NferxModal>
          <NferxModal
            contentPad
            className={styles.thankmodal}
            open={thankModal}
            onClose={thankyouModalClose}
            noCloseInRight
          >
            <div>
              <div className={styles.formbox}>
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
          <div className={styles.mobile}>
            <Icon onClick={toggle('top', true)}>
              <MenuIcon />
            </Icon>
            <Drawer
              anchor={'top'}
              open={state['top']}
              onClose={toggle('top', false)}
              onOpen={toggle('top', true)}
            >
              <div className={styles.topline} />
              <div className={styles.logoDiv}>
                <Link href="/">
                  <a>
                    <img className={styles.mobileLogo} src={logo} />
                  </a>
                </Link>
                <Icon onClick={toggle('top', false)}>
                  <ClearIcon />
                </Icon>
              </div>
              <div className={styles.line} />
              <div className={styles.mobileNav}>
                <Link href="/aboutus">
                  <a
                    className={
                      splitLocation[1] === 'aboutus'
                        ? styles.activeLink
                        : styles.link
                    }
                  >
                    <T>About US</T>
                  </a>
                </Link>
                <Link href="/pharma">
                  <a
                    className={
                      splitLocation[1] === 'pharma'
                        ? styles.activeLink
                        : styles.link
                    }
                  >
                    <T>For Pharma</T>
                  </a>
                </Link>

                <Link href="/medical">
                  <a
                    className={
                      splitLocation[1] === 'medical'
                        ? styles.activeLink
                        : styles.link
                    }
                  >
                    <T>For Medical Centers</T>
                  </a>
                </Link>

                <Link href="/publications">
                  <a
                    className={
                      splitLocation[1] === 'publications'
                        ? styles.activeLink
                        : styles.link
                    }
                  >
                    <T>Publications</T>
                  </a>
                </Link>
                <Link href="/news">
                  <a
                    className={
                      splitLocation[1] === 'news'
                        ? styles.activeLink
                        : styles.link
                    }
                  >
                    <T>Media</T>
                  </a>
                </Link>
                <T>Careers</T>
              </div>
              <div className={styles.selected} onClick={ModalOpen}>
                <T>Contact Us</T>
              </div>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
