/*
    Catch-all route for invalid path
*/

export default defineEventHandler( () => {
    throw createError({
        statusCode: 404,
        statusMessage: 'Page not found :( '
    })
})