import axios from 'axios';
import {AppConstants} from '../constants';
import {EventRegister, isNull} from '@utils/index';
import {showErrorDialog} from '../utils/ErrorsDialog';

let timeout = 60000;
let noNetworkObj = {
  status: 999,
};
let networkErr = {
  status: 0,
};
/**
 * A common API method for calling network requests
 * @returns response or error
 */

let axiosConfig = {};
export const commonApi = async ({
  method = 'GET',
  url,
  params,
  color = 'blue',
  headerToken = AppConstants.USER_ACCESS_TOKEN,
  forStripe,
}) => {
  if (AppConstants.NETWORK_CHECK) {
    if (forStripe) {
      axiosConfig = {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Bearer ' + AppConstants.STRIPE_SECRET_KEY,
      };
    } else {
      axiosConfig = {
        'Content-Type': method === 'POST_WITH_FORM' ? 'multipart/form-data' : 'application/json',
        token: true,
        currencyCode: 'INR',
      };
      if (isNull(headerToken) !== '') {
        axiosConfig.authorization = 'Bearer ' + headerToken;
      }
    }
    switch (method) {
      case 'GET':
        if (color !== AppConstants.LOADER_OFF) {
          loaderOnOff(true, color);
        }
        return axios
          .get(url, {headers: axiosConfig, params: params, timeout: timeout})
          .then(response => {
            loaderOnOff(false, color);
            return response;
          })
          .catch(error => {
            catchError(error, color);
            return error;
          });
      case 'POST':
      case 'POST_WITH_FORM':
        if (color !== AppConstants.LOADER_OFF) {
          loaderOnOff(true, color);
        }
        return axios
          .post(url, params, {headers: axiosConfig, timeout: timeout})
          .then(response => {
            loaderOnOff(false, color);

            return response;
          })
          .catch(error => {
            catchError(error, color);
            return error;
          });
      case 'PATCH':
        if (color !== AppConstants.LOADER_OFF) {
          loaderOnOff(true, color);
        }
        return axios
          .patch(url, params, {headers: axiosConfig, timeout: timeout})
          .then(response => {
            loaderOnOff(false, color);

            return response;
          })
          .catch(error => {
            catchError(error, color);
            return error;
          });
      case 'PUT':
        if (color !== AppConstants.LOADER_OFF) {
          loaderOnOff(true, color);
        }
        return axios
          .put(url, params, {headers: axiosConfig, timeout: timeout})
          .then(response => {
            loaderOnOff(false, color);
            return response;
          })
          .catch(error => {
            catchError(error, color);
            return error;
          });
      case 'DELETE':
        if (color !== AppConstants.LOADER_OFF) {
          loaderOnOff(true, color);
        }
        return axios
          .delete(url, {headers: axiosConfig, params: params, timeout: timeout})
          .then(response => {
            loaderOnOff(false, color);

            return response;
          })
          .catch(error => {
            catchError(error, color);
            return error;
          });
    }
  } else {
    showErrorDialog(noNetworkObj);
  }
};
export const loaderOnOff = (isLoading, color) => {
  let obj = {
    data: isLoading,
    color: color ? color : AppConstants.TRANSPARENT,
  };
  EventRegister.emit('showLoader', obj);
};
const handleError = response => {
  loaderOnOff(false);
  setTimeout(() => {
    showErrorDialog(response);
  }, 500);
};
const catchError = (error, color) => {
  if (error && error.message && error.message === 'Network Error') {
    loaderOnOff(false, color);
    setTimeout(() => {
      showErrorDialog(networkErr);
    }, 500);
  } else {
    handleError(error.response);
  }
};
