export interface UserProps {
    id?: string;
    userName?: string | null;
    companyName?: string;
    country?: string;
    city?: string;
    email? : string | null;
    phone?: string;
    address?: string;
    zipCode?: string;
    emailVerified?: false;
    role?: 'ADMIN' | 'EDITOR'| 'CLIENT'| 'POD'| 'TV'| 'MOBILE' ;
}
