/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import axios, { AxiosRequestConfig, Method } from 'axios';
import { useState } from 'react';
import { useSnackbar } from 'notistack';
import { useLogout } from './useLogout';

interface HookProps extends AxiosRequestConfig {
  method: Method;
  url?: string;
  body?: any;
  local?: boolean;
  onSuccessMessage?: string;
  hideErrorMessage?: boolean;
  hideSuccessMessage?: boolean;
  onSuccess?: (data: any) => void;
  onError?: (error: any, data: any) => void;
}

interface RequestProps {
  url?: string;
  body?: any;
}

const useRequest = (hookProps: HookProps) => {
  const [pending, setPending] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const { handleLogout } = useLogout();

  const request = async (props?: RequestProps) => {
    setPending(true);

    try {
      const response = await axios({
        baseURL: 'http://localhost:3100',
        url: props?.url || hookProps.url,
        method: hookProps.method,
        data: props?.body || hookProps.body,
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('token')?.slice(1, -1)}`,
          'Content-Type':
            hookProps.headers?.['Content-Type'] || 'application/json',
        },
      });
      hookProps.onSuccess &&
        hookProps.onSuccess(response.data ? response.data : response);
      hookProps.onSuccessMessage && !hookProps.hideSuccessMessage &&
        enqueueSnackbar(hookProps.onSuccessMessage, {
          variant: 'success',
        });
    } catch (error: import('axios').AxiosError | any) {
      hookProps.onError && hookProps.onError(error, error.response?.data);

      !hookProps.hideErrorMessage &&
        enqueueSnackbar(error.response?.data?.message || error.message, {
          variant: 'error',
        });

      if (error.response?.status === 401 || error.response?.status === 403) {
        // handleLogout();
      }
    }

    setPending(false);
  };

  return { request, pending };
};

export default useRequest;
