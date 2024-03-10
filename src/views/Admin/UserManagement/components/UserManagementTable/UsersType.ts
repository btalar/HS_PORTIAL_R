export interface UserProps {
    id?: string;
    userName?: string;
    companyName?: string;
    country?: string;
    city?: string;
    email : string;
    phone?: string;
    address?: string;
    zipCode?: string;
    role: 'ADMIN' | 'EDITOR'| 'CLIENT'| 'POD'| 'TV'| 'MOBILE' ;
}
