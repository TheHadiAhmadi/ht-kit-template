export async function get({params, data}) {
    
    // pass prop for /some/[id].html
    return {
        body: {
            id: params.id,
            customData: data.customData
        }
    }
}