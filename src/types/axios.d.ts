
import 'axios';

declare module 'axios' {
  export interface AxiosRequestConfig {
    tokenName?: string;
  }
}
