import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next';
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

import ReCAPTCHA from "react-google-recaptcha";
import styles from './signUpForm.module.scss';
import * as Yup from "yup";

const SignUpForm = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const inputFields = [
    { name: "email", label: t('authentication:signUp.email') },
    { name: "password", label: t('authentication:signUp.password') },
    { name: "confirmPassword", label: t('authentication:signUp.confirmPassword') },
    { name: "name", label: t('authentication:signUp.name') },
    { name: "phone", label: t('authentication:signUp.phone') },
    { name: "company", label: t('authentication:signUp.company') },
  ];

  const verifyCallback = () => {
    console.log('suc')
  }

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        confirmPassword: "",
        name: "",
        phone: "",
        company: ""
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Please enter a valid email.")
          .required("Email must not be empty."),
        password: Yup.string()
          .required("Password must not be empty."),
        confirmPassword: Yup.string()
          .required("ConfirmPassword must not be empty."),
        name: Yup.string()
          .required("Name must not be empty."),
        phone: Yup.string()
          .required("Phone must not be empty."),
        company: Yup.string()
          .required("Company must not be empty.")          
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {() => (
        <Form className={styles.signUpForm}>
          <div className={styles.titleField}>
            <FontAwesomeIcon icon={faBolt}/>
            <h1>Sign Up</h1>
          </div>
          <span className={styles.loginText}>
            {t('authentication:signUp.haveAccount')}
            <Link id="link" to={'/login'}>{t('authentication:signUp.login')}</Link>
          </span>
          <div>
            {inputFields.map((field, index) => (
              <div key={index} className={styles.inputField}>
                <ErrorMessage name={field.name}>{(msg) => <span>{msg}</span>}</ErrorMessage>
                <Field name={field.name} type="text" required/>
                <label className={styles.label}>{field.label}</label>
              </div>
            ))}
          </div>
          <div className={styles.checkboxField}>
            <input id="confirm" type="checkbox" required/>
            <label htmlFor="confirm" className={styles.label}>{t('authentication:signUp.agreeTerms')}</label>
          </div>
          <div className={styles.recaptchaField}>
            <ReCAPTCHA
              sitekey={process.env.REACT_APP_SITE_KEY}
              onChange={verifyCallback}
            />
          </div>
          <button type="submit" className={styles.signUpButton} disabled={loading}>
            <span className={styles.button__text}>{t('authentication:signUp.sendVerificationEmail')}</span>
          </button>
        </Form>
      )}
    </Formik>
  );
}
export default SignUpForm 