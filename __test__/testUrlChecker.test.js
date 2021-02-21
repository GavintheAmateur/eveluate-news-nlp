import {validateUrl} from '../src/client/js/urlChecker'

describe(
    "Test suite for url validating functionality",
    ()=> {
        test(
            "Test good url with protocol",
            ()=> expect(validateUrl("http://www.google.com")).toBe(true)
        ),
        test(
            "Test good url without protocol",
            ()=> expect(validateUrl("www.google.com")).toBe(true)
        ),
        test(
            "Test bad url with protocol",
            ()=> expect(validateUrl("htttt://www.google.com")).toBe(false)
        ),
        test(
            "Test bad url without protocol",
            ()=> expect(validateUrl("google")).toBe(false)
            
        )
    }
)
