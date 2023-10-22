import { toast, ToastOptions } from 'react-toastify';

// eslint-disable-next-line max-len
type ToastDefaultConfig = Pick<ToastOptions, 'position' | 'hideProgressBar' | 'icon' | 'autoClose' | 'closeButton' | 'theme'>;

interface UseToastApi {
    showError: (message: string) => void;
    showSuccess: (message: string) => void;
    showWarning: (message: string) => void;
    showInfo: (message: string) => void;
}

const toastDefaultConfig: ToastDefaultConfig = {
  position: 'bottom-center',
  hideProgressBar: true,
  theme: 'colored',
  autoClose: 3000,
  closeButton: false,
};

export const useToast = (): UseToastApi => {
  const showError = (message: string): void => {
    toast.error(message, { ...toastDefaultConfig });
  };

  const showSuccess = (message: string): void => {
    toast.success(message, { ...toastDefaultConfig });
  };

  const showWarning = (message: string): void => {
    toast.warn(message, { ...toastDefaultConfig });
  };

  const showInfo = (message: string): void => {
    toast.info(message, { ...toastDefaultConfig });
  };

  return {
    showError,
    showSuccess,
    showWarning,
    showInfo,
  };
};
