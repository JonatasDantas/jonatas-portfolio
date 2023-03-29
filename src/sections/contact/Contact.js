/* eslint-disable no-nested-ternary */
import { useRef, useState } from 'react';

import {
  Button, Collapse, Grid, IconButton,
} from '@material-ui/core';
import { Close, WhatsApp } from '@material-ui/icons';
import { Alert } from '@material-ui/lab';
import { Form } from '@unform/web';
import { useTranslation } from 'react-i18next';

import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import { Input } from '../../components';

import './Contact.scss';

function Contact() {
  const { t } = useTranslation();
  const formRef = useRef();
  const [alert, setAlert] = useState(null);

  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required(t('contactMe.fields.name.required')),
        email: Yup.string().email(t('contactMe.fields.email.invalid')).required(t('contactMe.fields.email.required')),
        phone: Yup.string()
          .transform((phoneData) => (phoneData.match(/\d/g) ? phoneData.match(/\d/g).join('') : ''))
          .required(t('contactMe.fields.phone.required')),
        message: Yup.string().required(t('contactMe.fields.message.required')),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      emailjs.send('service_53qoc56', 'template_4iv0564', data, 'lryOlxwwsUh-bs2MG')
        .then(() => {
          setAlert({
            success: true,
            message: t('contactMe.success'),
          });
        }, () => {
          setAlert({
            success: false,
            message: t('contactMe.error'),
          });
        });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const validationErrors = {};

        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });

        formRef.current.setErrors(validationErrors);
      }
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="welcoming">{t('contactMe.title')}</div>
      <hr className="divider" />

      <div className="text">
        {t('contactMe.info.introduction')}
        <br />
        {t('contactMe.info.description')}
      </div>

      <Form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
        <Collapse in={alert}>
          <Alert
            variant="filled"
            style={{ marginBottom: 20 }}
            severity={alert ? (alert.success ? 'success' : 'error') : ''}
            action={(
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setAlert(null);
                }}
              >
                <Close fontSize="inherit" />
              </IconButton>
          )}
          >
            {alert ? alert.message : ''}
          </Alert>
        </Collapse>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Input name="name" id="name" label={t('contactMe.fields.name.name')} variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input name="email" id="email" label={t('contactMe.fields.email.name')} variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input name="phone" id="phone" label={t('contactMe.fields.phone.name')} mask="(99) 99999-9999" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <Input name="message" id="message" label={t('contactMe.fields.message.name')} multiline rows={5} variant="outlined" />
          </Grid>
        </Grid>

        <Grid className="buttons-container" container spacing={2}>
          <Grid item>
            <Button type="submit" variant="contained" color="primary">{t('contactMe.sendMessage')}</Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              endIcon={<WhatsApp />}
              onClick={() => { window.open('https://api.whatsapp.com/send?phone=5511960126820', '_blank'); }}
            >
              {t('contactMe.whatsapp')}
            </Button>
          </Grid>
        </Grid>
      </Form>
    </section>
  );
}

export default Contact;
