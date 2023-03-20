import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate, Link } from 'react-router-dom';
import { useLoginMutation } from '../../store/slices/app';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import * as Yup from "yup";
import styles from './loginForm.module.scss';

const LoginForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [trigger, { isSuccess, isLoading }] = useLoginMutation();
  
  const inputFields = [
    { name: "email", label: t('authentication:login.account') },
    { name: "password", label: t('authentication:login.password') },
  ];

  const login = ({ email, password }) => {
    trigger({ email, password })
  };

  useEffect(() => {
    if(isSuccess) {
      navigate('/')
    }
  }, [isSuccess, navigate]);

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string(),
        password: Yup.string()  
      })}
      onSubmit={login}
    >
      {() => (
        <Form className={styles.loginForm}>
          <div className={styles.titleField}>
            <FontAwesomeIcon icon={faBolt}/>
            <h1>Login in</h1>
          </div>
          {inputFields.map((field, index) => (
            <div key={index} className={styles.inputField}>
              <ErrorMessage name={field.name}>{(msg) => <span>{msg}</span>}</ErrorMessage>
              <Field name={field.name} type="text" required/>
              <label className={styles.label}>{field.label}</label>
            </div>
          ))}
          <div className={styles.forgotField}>
            <span className={styles.forgotText}>{t('authentication:login.forgotPassword')}</span>
            <Link id="link" to={'/login?contactAdmin'}>{t('authentication:login.contactSystemAdmin')}</Link>
            <FontAwesomeIcon icon={faEnvelope}/>
          </div>
          <button type="submit" className={styles.loginButton} disabled={isLoading}>
            <span className={styles.button__text}>{t('authentication:login.login')}</span>
          </button>
          <span className={styles.singUpText}>{t('authentication:login.notHaveAccount')}
            <Link id="link" to={'/signUp'}>{t('authentication:login.signUp')}</Link>!
          </span>
        </Form>
      )}
    </Formik>
  );
}
export default LoginForm 