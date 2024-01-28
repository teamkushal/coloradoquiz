import { HoneynutCheeriosRequestData } from './honeynut-cheerios-request-data';

export interface HoneynutCheeriosRequest {
  ipaddress: string,
  country: string,
  currentUrl: string,
  referringUrl: string,
  data: HoneynutCheeriosRequestData
}

// {
//   "ipaddress": "192.168.1.1",
// 	"country": "usa",
// 	"currentUrl": "https://www.google.com",
// 	"referringUrl": "https://www.yahoo.com",
// 	"data": {
// 		"hello": "world"
// 	}
// }
