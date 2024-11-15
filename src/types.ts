export interface FormInterface {
    id: string;
    pathReturn: string;
    data: {
        agendacion: string;
        email: string;
        UTMSource: string;
        UTMCampaign: string;
        UTMMediun: string;
        UTMTerm: string;
        UTMContent: string;
        closer: {
            name: string;
            color: string;
        };
        status: {
            name: string;
            color: string;
        };
    };
}