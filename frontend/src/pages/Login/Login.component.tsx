import { withFormik } from 'formik';
import { injectIntl } from 'react-intl';
import InnerLoginForm from './Form';

import { handleSubmit, mapPropsToValues, validateForm } from './Login.service';

const LoginFormContainer = withFormik({
  mapPropsToValues,
  validate: validateForm,
  handleSubmit,
})(injectIntl(InnerLoginForm));

export default LoginFormContainer;
