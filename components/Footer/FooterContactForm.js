import { Typography as T, Icon, TextField } from '@material-ui/core'
import React from 'react'
import NferxModal from '../NferxModal/NferxModal'
import { useRouter } from 'next/router'
import ClearIcon from '@material-ui/icons/Clear'
import emailjs from 'emailjs-com'
import useStyles from './FooterStyles'
import Section from '../Section/Section'

export default function FooterContactForm() {
  const location = useRouter()
  const { asPath } = location
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
          'service_el2cvyo',
          'template_3duokn9',
          templateParams,
          'user_805xdXJj2kUpbZjzH67Gx',
        )
        .then(
          (result) => {
            thankyouModalOpen()

            setFormData({
              company: '',
              title: '',
              firstName: '',
              lastName: '',
              email: '',
              message: '',
            })
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

  if (asPath === '/careers') {
    return null
  }

  return (
    <Section size={'xl'}>
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
                id={'company'}
                placeholder={'Company'}
                variant={'standard'}
                className={styles.widthName}
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
              />
              <TextField
                id={'title'}
                placeholder={'Title'}
                variant={'standard'}
                className={styles.widthName}
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
              />
            </div>
            <div className={styles.inputname}>
              <TextField
                id={'first_name'}
                placeholder={'First Name'}
                variant={'standard'}
                value={formData.firstName}
                className={styles.widthName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
              />
              <TextField
                id={'last_name'}
                placeholder={'Last Name'}
                variant={'standard'}
                className={styles.widthName}
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
              />
            </div>
            <div>
              <TextField
                id={'email'}
                placeholder={'Email'}
                variant={'standard'}
                className={styles.inputemail}
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
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
                id={'message'}
                placeholder={'Message'}
                variant={'standard'}
                className={styles.inputmessage}
                value={formData.message}
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
    </Section>
  )
}
