export async function handle(event, resolve) {
    console.log(event)
    return resolve({...event, data: {...event.data, "customData": 'this is custom data from middleware'}})
}