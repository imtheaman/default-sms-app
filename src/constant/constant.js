export const AppConstants = {
  EMAIL_REGEX: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/,
  // MOBILE_REGEX: /^[0][1-9]\d{9}$|^[1-9]\d{5,15}$/,
  MOBILE_REGEX: /^\d{10}$/,
  NUMBER_OR_DECIMAL_REGEX: /^(\d*\.)?\d+$/,
  NUMBER_REGEX: /^\d+$/,
  CHARACTER_OR_NUMBER_REGEX: /^(?=.*[A-Z])(?=.*\d)[A-Z\d]{4,7}$/,
  NAME_REGEX: /([a-zA-Z]{2,30}\s*)+/,
  FULLNAME_REGEX: /^[a-zA-z]+([\s][a-zA-Z]+)*$/,
  PASSWORD_REGEX:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
  PIN_CODE_REGEX: /^[1-9][0-9]{5}$/,
  ADDRESS_REGEX: /^[a-zA-Z0-9\s,.'-]{3,}$/,
  CARD_REGEX:
    /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
};
