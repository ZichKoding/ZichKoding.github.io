import qs from "qs";

export interface EmailMessageDetails {
    from: string;
    firstName: string;
    lastName: string;
    text: string;
}

export async function sendEmail(emailMessageDetails: EmailMessageDetails): Promise<Response> {
    if (!emailMessageDetails) {
        throw new Error('No email message details provided');
    }

    if (!emailMessageDetails.from || emailMessageDetails.from.length < 5) {
        throw new Error('No email from provided');
    }

    if (!emailMessageDetails.firstName || emailMessageDetails.firstName.length < 2) {
        throw new Error('No first name provided');
    }

    if (!emailMessageDetails.lastName || emailMessageDetails.lastName.length < 2) {
        throw new Error('No last name provided');
    }

    if (!emailMessageDetails.text || emailMessageDetails.text.length < 2) {
        throw new Error('No text provided');
    }
    
    // FETCH THE API
    try {
        const url = `/api/send-email?${qs.stringify(emailMessageDetails, { encodeValuesOnly: true })}`;

        const response = await fetch(url, { method: 'POST' });

        const data = await response.json();
        return data;
    } catch (error: any) {
        throw new Error(error);
    }
}