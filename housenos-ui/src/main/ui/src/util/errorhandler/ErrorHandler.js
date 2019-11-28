export const handleError = (error) => {
    if (error.response) {
        //The request was made and server responded with a status code 
        //that falls out of the range of 2XX
        const errorCode = error.response.status

        if (errorCode >= 500 && errorCode <= 511) {
            return "There was an error processing your request. Please try again later";
        }
        else {
            return error.response.data.detail;
        }
    }

    if (error.request) {
        //The request was made but no response was received
        return "Error connecting to the server";
    }
}