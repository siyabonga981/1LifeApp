import { SDBaseService } from 'app/n-services/SDBaseService';
//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-api
import { api } from '../sd-services/api';

export const sdProviders = [
  SDBaseService,
  //CORE_REFERENCE_PUSH_TO_SD_ARRAY
  //CORE_REFERENCE_PUSH_TO_SD_ARRAY-api
  api,
];
