import { HoneynutCheeriosRequestData } from './honeynut-cheerios-request-data';

export interface HoneynutCheeriosRequest {
  ipaddress: string;
  country: string;
  currentUrl: string;
  referringUrl: string;
  data: HoneynutCheeriosRequestData;
}
