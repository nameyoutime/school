export enum UserRole {
    NONE = '',
    ADMIN = 'ADMIN',
    USER = 'USER'
}

export const USER_ROLES_MAP = [
    { value: UserRole.USER, label: 'User' },
    { value: UserRole.ADMIN, label: 'Admin' },
]

export interface User {
    _id: string;
    userName?: string;
    passWord?: string;
    role: UserRole | null;
    employeeCode?: string;
    dateStart?: string;
    department?: string;
    dateOfBirth?: string;
    position?: string;
    gender?: "MALE" | "FEMALE";
    bankNumber?: string;
    firstName?: string;
    phoneNumber?: string;
    bankName?: string;
    lastName?: string;
    identityId?: string;
    taxCode?: string;
    basicInformation?: string;
    createdAt?: string;
    updatedAt?: string;
}