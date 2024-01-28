import { AppConstants } from './constant';
import { Validation } from './validation';
export const isValidMobile = (value = '') => {
  return AppConstants.MOBILE_REGEX.test(value);
};

export const isValidEmail = (value = '') => {
  return AppConstants.EMAIL_REGEX.test(value);
};

export const isValidPassword = (value = '') => {
  return AppConstants.PASSWORD_REGEX.test(value);
};

export const isUserNumber = (value = '') => {
  let isValid = '';
  let res = value.charAt(0);
  if (value === '') {
    isValid = 'Please enter mobile number';
  } else if (!isValidMobile(value)) {
    isValid = 'Please enter a valid mobile number';
  } else {
    if (res === '0') {
      isValid = 'Please enter a valid mobile number';
    }
  }
  return isValid;
};

export const isUserEmail = (value = '') => {
  let isValid = '';
  if (value === '') {
    isValid = Validation.validEmail;
  } else if (!isValidEmail(value)) {
    isValid = Validation.validEmailFormat;
  }
  return isValid;
};

// export const isUserPassword = (value = '') => {
//   if (value.replace(/\s/g, '') === '') {
//     let isPassword = Validation.validNewPassword;
//     let password = value;
//     return isPassword;
//   } else if (!isValidPassword(value)) {
//     let isPassword = Validation.validPasswordDetail;
//     let password = value.replace(/\s/g, '');
//     return isPassword;
//   } else if (isValidPassword(value)) {
//     let isPassword = Validation.validPasswordDetail;
//     return [isPassword, true];
//   }
// };

export const isUserCnfPassword = (value = '', password = '') => {
  if (value === '') {
    let isCnfPassword = 'Please enter confirm password';
    let cnfPassword = value;
    return isCnfPassword;
  } else if (password != value) {
    let isCnfPassword = Validation.validConfirmPasswordLength;
    let cnfPassword = value.replace(/\s/g, '');
    return isCnfPassword;
  }
};
// export const isUserEmailNumber = (value = '') => {
//   let isValid = '';
//   if (value === '') {
//     isValid = Validation.validEmailMobileEmail;
//   } else if (!isValidEmail(value)) {
//     isValid = Validation.validEmailFormat;
//   }
//   return isValid;
// };
