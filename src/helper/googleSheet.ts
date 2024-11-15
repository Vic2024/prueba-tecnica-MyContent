const url = 'https://script.google.com/macros/s/AKfycbyYu4Plnz_wBLOKmUotC5qIE8V2uW71clUShw2mY-l88S6SFclLG6sHJGzZwR4mI5WW/exec'
const fetching = async ({ filterBy }: { filterBy?: any } = {}) => {
    const response = await fetch(`${filterBy ? `${url}?filter=true&option=${filterBy.option}&search=${filterBy.search}` : url}`, {
        method: 'GET',
        headers: {
            "content-type": "application/json",
        }
    })
    const result = await response.json()
    return result
}

export const getCallsG = async ({ filterBy }: { filterBy?: any } = {}) => {
    const { allData } = await fetching({ filterBy })
    return allData.map((page: any) => {
        const { agendacion, email, closer, status } = page
        return { agendacion, email, closer, status }
    })


}

export const getPagesG = async ({ filterBy }: { filterBy?: any } = {}) => {
    const { allData } = await fetching({ filterBy })
    return allData

}