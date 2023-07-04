export class Personal {
    fieldName: string;
    description: string;
    codeValue: string;  
}

export class PersonalDetailsSub {
    status: string;
    message?: any;
    nbfcToken: string;
    error:Error;
    pendingNotificationList: PersonalDetailsList[];
}

export class Error{
    errorMessage: string;
    requestedURI: string;
}
export class PersonalDetailsList{
    
}