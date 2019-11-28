
export const baseUrl = process.env.NODE_ENV === 'development' ?
    'http://localhost:3001/housenos-api' : '/housenos-api';


export const ROLES = {
    ADMIN: 'ROLE_ADMIN',
    USER: 'ROLE_USER',
    AGENT: 'ROLE_AGENT',
    LANDLORD: 'ROLE_LANDLORD'
};