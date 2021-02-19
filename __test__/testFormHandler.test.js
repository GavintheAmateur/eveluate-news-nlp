import {handleSubmit} from '../src/client/js/formHandler'

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