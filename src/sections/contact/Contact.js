import { useRef } from 'react';

import { Button, Grid } from '@material-ui/core';
import { WhatsApp } from '@material-ui/icons';
import { Form } from '@unform/web';

import * as Yup from 'yup';
import './Contact.scss';
import { Input } from '../../components';

function Contact() {
  const formRef = useRef();

  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatório'),
        email: Yup.string().email('Email inválido').required('Email é obrigatório'),
        phone: Yup.string()
          .transform((phoneData) => (phoneData.match(/\d/g) ? phoneData.match(/\d/g).join('') : ''))
          .min(11, 'Mínimo de 11 caracteres').required('Telefone é obrigatório'),
        message: Yup.string().required('Mensagem obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
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
      <div className="welcoming">Contato</div>
      <hr className="divider" />

      <div className="text">
        Entre em contato comigo e faça um orçamento. Será um prazer atendê-lo(a)!
        <br />
        Se preferir, meu whatsapp é (11) 96012-6820.
      </div>

      <Form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Input name="name" id="name" label="Nome" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input name="email" id="email" label="E-mail" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input name="phone" id="phone" label="Telefone" mask="(99) 99999-9999" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <Input name="message" id="message" label="Mensagem" multiline rows={5} variant="outlined" />
          </Grid>
        </Grid>

        <Grid className="buttons-container" container spacing={2}>
          <Grid item>
            <Button type="submit" variant="contained" color="primary">Enviar Mensagem</Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              endIcon={<WhatsApp />}
              onClick={() => { window.open('https://api.whatsapp.com/send?phone=5511960126820', '_blank'); }}
            >
              Me chame no Whatsapp
            </Button>
          </Grid>
        </Grid>
      </Form>
    </section>
  );
}

export default Contact;
