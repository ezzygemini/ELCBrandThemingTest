const utils = require("./utils")
// @ponicode
describe("utils.blockClasses", () => {
    test("0", () => {
        let callFunction = () => {
            utils.blockClasses("Anas")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            utils.blockClasses("Pierre Edouard")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            utils.blockClasses("Jean-Philippe")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            utils.blockClasses("Michael")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            utils.blockClasses("George")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            utils.blockClasses(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("utils.pdpProductClasses", () => {
    test("0", () => {
        let callFunction = () => {
            utils.pdpProductClasses()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("utils.pdpProductElementClasses", () => {
    test("0", () => {
        let callFunction = () => {
            utils.pdpProductElementClasses(false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            utils.pdpProductElementClasses(true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            utils.pdpProductElementClasses(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
