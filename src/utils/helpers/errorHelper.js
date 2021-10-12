
class ErrorHelper  {
    
    constructor( error ) {
        this.error = error;
    }

    addMessage () {
        if ( this.error.status === 404 ) {
            return this.error.message
        } 
    }
    
}

export default ErrorHelper;