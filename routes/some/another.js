export async function get() {
    console.log('get another')

    return {
        body: {
            "some": true,
            "another": true,
            "test": false
        }
    }
}