import { Client } from "@notionhq/client";
import type { QueryDatabaseParameters } from "@notionhq/client/build/src/api-endpoints";
const DATABASE_ID = '13bf61735352806691fae6bd3b50f982'
const notion = new Client({
    auth: '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'
})

const fetching = async ({ filterBy }: { filterBy?: any } = {}) => {
    const query: QueryDatabaseParameters = {
        database_id: DATABASE_ID,
        sorts: [{
            property: 'Agendacion',
            direction: 'ascending'
        }],
    }
    if (filterBy) {
        query.filter = filterBy
    }
    const response = await notion.databases.query(query)
    return response.results
}

export const getCalls = async ({ filterBy }: { filterBy?: any } = {}) => {
    const results = await fetching()
    return results.map((page: any) => {
        const { properties } = page
        return {
            agendacion: properties['Agendacion'].date.start,
            email: properties['Email'].title[0].plain_text,
            closer: { name: properties['Closer'].select.name, color: properties['Closer'].select.color },
            status: { name: properties['Estado'].status.name, color: properties['Estado'].status.color }
        }
    })


}



export const getPages = async ({ filterBy }: { filterBy?: any } = {}) => {
    const results = await fetching({ filterBy })
    return results.map((page: any) => {
        const { properties } = page
        return {
            agendacion: properties['Agendacion'].date.start,
            email: properties['Email'].title[0].plain_text,
            UTMSource: properties['UTM Source'].select !== null ? properties['UTM Source'].select['name'] : '',
            UTMCampaign: properties['UTM Campaign'].rich_text.plain_text,
            UTMMediun: properties['UTM Medium'].name,
            UTMTerm: properties['UTM Term'].rich_text.plain_text,
            UTMContent: properties['UTM Content'].rich_text.plain_text,
            closer: { name: properties['Closer'].select.name, color: properties['Closer'].select.color },
            status: { name: properties['Estado'].status.name, color: properties['Estado'].status.color }
        }
    })

}