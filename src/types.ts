export interface firstPageType extends isForm {
    firstName:string;
    lastName:string;
    password:string;
    confirmPassword:string;
}

export interface secondPageType extends isForm {
    primarySelect:string;
    secondarySelect:string;
    agree:boolean;
    email:string;
}

export interface thirdPageType extends isForm{
    startDay: number;
    startMonth: number;
    startYear: number;
    endDay: number;
    endMonth: number;
    endYear: number;
}

export interface isForm {
    form:boolean
}