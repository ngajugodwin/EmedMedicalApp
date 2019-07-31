import { environment } from 'src/environments/environment';

const SERVER_END_POINT = environment.SERVER_END_POINT;

export const PATIENT_URL = {
    CREATE: `${SERVER_END_POINT}/patient`,
    GET_PATIENT: `${SERVER_END_POINT}/patient/GetPatient`,
    UPDATE_PATIENT: `${SERVER_END_POINT}/patient`,
    ALL_PATIENTS: `${SERVER_END_POINT}/patients`,
    DELETE_PATIENT: `${SERVER_END_POINT}/patient/`,
};
