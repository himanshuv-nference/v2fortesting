import NferxModal from '../NferxModal/NferxModal'
import { Icon, TextField, Typography as T } from '@material-ui/core'
import ClearIcon from '@material-ui/icons/Clear'
import clsx from 'clsx'
import React from 'react'
import { useRouter } from 'next/router'
import emailjs from 'emailjs-com'
import useStyles from './NavbarStyles'

export default function ContactUsModal({ isOpen, onClose }) {
  const styles = useStyles()
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

  const thankyouModalOpen = () => setThankyoumodal(true)
  const thankyouonClose = () => setThankyoumodal(false)

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
          'service_el2cvyo',
          'template_3duokn9',
          templateParams,
          'user_805xdXJj2kUpbZjzH67Gx',
        )
        .then((result) => {
          onClose()
          thankyouModalOpen()
          setFormData({
            company: '',
            title: '',
            firstName: '',
            lastName: '',
            email: '',
            message: '',
          })
        })
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
    <>
      <NferxModal
        contentPad
        className={styles.modal}
        open={isOpen}
        onClose={onClose}
        noCloseInRight
      >
        <div className={styles.formcontanier}>
          <div className={styles.formbox}>
            <div className={styles.iconDiv}>
              <Icon onClick={onClose} className={styles.icon}>
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
                  Fill out the form and we’ll get right back to you.
                </T>
              </div>
              <div>
                <form>
                  <div className={clsx(styles.inputname, styles.companyDiv)}>
                    <TextField
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          company: e,
                        })
                      }
                      placeholder={'Company'}
                      variant={'standard'}
                      className={styles.nameInput}
                    />
                    <TextField
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e })}
                      placeholder={'Title'}
                      variant={'standard'}
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
                      variant={'standard'}
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
                      variant={'standard'}
                    />
                  </div>
                  <div className={styles.inputemailDiv}>
                    <TextField
                      onChange={(e) => setFormData({ ...formData, email: e })}
                      value={formData.email}
                      placeholder={'Email'}
                      variant={'standard'}
                      helperText={
                        errorFormData.email
                          ? 'Please give valid email and try again'
                          : null
                      }
                      error={errorFormData.email}
                      className={styles.inputemail}
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
                      variant={'standard'}
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
        onClose={thankyouonClose}
        noCloseInRight
      >
        <div>
          <div className={styles.formbox}>
            <div className={styles.iconDiv}>
              <Icon onClick={thankyouonClose} className={styles.icon}>
                <ClearIcon />
              </Icon>
            </div>

            <div className={styles.thankyoupad}>
              <T className={styles.formhead}>Thank You!</T>
              <T className={styles.formsub}>Our team will contact you soon</T>
            </div>
          </div>
        </div>
      </NferxModal>
    </>
  )
}
