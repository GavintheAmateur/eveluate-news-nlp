import {handleSubmit} from '../src/client/js/formHandler.js'

describe(
    "Test suite for form submitting functionality",
    ()=> {
        test(
            "Test handleSubmit() exists",
            ()=> {
                expect(handleSubmit).toBeDefined();
            }
        
        )
    }
)