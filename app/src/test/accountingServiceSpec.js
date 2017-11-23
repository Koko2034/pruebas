describe("#AccountingService", () => {
    describe("should return true", () => {
        it("when inicializate AccountingService is fill", () => {
            const prueba = () => {};
            expect(AccountingService != prueba).toBeTruthy();
        })
        it("when inicializate AccountingService to be undefined", () => {
            expect(AccountingService()).toBeUndefined();
        })
    })
    describe("should return false", () => {
        it("when inicializate AccountingService is empty", () => {
            const prueba = () => {};
            expect(AccountingService == prueba).toBeFalsy();
        })
        it("when inicializate AccountingService to be defined", () => {
            expect(AccountingService()).not.toBeDefined();

        })
    })

})
describe("getter y setter", () => {
    describe("should return true", () => {
        it("when inicializate set is fill", () => {
            const prueba = () => {};
            const accountingService = new AccountingService();
            expect(accountingService.set == undefined).toBeTruthy();
        })
        it("when inicializate get is fill", () => {
            const prueba = () => {};
            const accountingService = new AccountingService();
            expect(accountingService.get != prueba).toBeTruthy();
        })
        it("when get account return { _invoice: 0, _tax: 2,_totalInvoice: 0,_type: 'Transferencia_Bancaria'}", () => {
            const accountingService = new AccountingService();
            const prueba = {
                _invoice: 0,
                _tax: 2,
                _totalInvoice: 0,
                _type: 'Transferencia_Bancaria'
            }
            expect(accountingService.account).toEqual(prueba);
        })
        it("when get account return { _invoice: 110, _tax: 2,_totalInvoice: 0,_type: 'Transferencia_Bancaria'}", () => {
            const accountingService = new AccountingService(); 
            const prueba = {
                _invoice: 110,
                _tax: 2,
                _totalInvoice: 0,
                _type: 'Transferencia_Bancaria'
            }
            accountingService.account =prueba;
            expect(accountingService.account !== prueba).toBeTruthy();
        })

    })

    describe("should return false", () => {
        it("when inicializate set is empty", () => {
            
            const accountingService = new AccountingService();
            const prueba = () => {};
            expect(accountingService.set != undefined).toBeFalsy();
        })
        it("when inicializate get is empty", () => {
            const prueba = () => {};
            const accountingService = new AccountingService();
            expect(accountingService.get == prueba).toBeFalsy();
        })
        it("when get account return { _invoice: 0, _tax: 2,_totalInvoice: 0,_type: 'Transferencia_Bancaria'}", () => {
            const accountingService = new AccountingService();
            expect(accountingService.account).not.toEqual();
        })
        it("when get account return { _invoice: 110, _tax: 2,_totalInvoice: 0,_type: 'Transferencia_Bancaria'}", () => {
            const accountingService = new AccountingService(); 
            const prueba = {
                _invoice: 110,
                _tax: 2,
                _totalInvoice: 0,
                _type: 'Transferencia_Bancaria'
            }
            accountingService.account =prueba;
            expect(accountingService.account === prueba).toBeFalsy();
        })
    })
})
describe("#add", () => {
    describe("should return true", () => {
        it("when two param are positive", () => {
            const accountingService = new AccountingService();
            let param1 = 9;
            let param2 = 5;
            expect(accountingService.add(param1, param2) >= 0).toBeTruthy();
        })
        it("when two param1 es positive and equals than param2 who is negative", () => {
            const accountingService = new AccountingService();
            let param1 = 9;
            let param2 = -9;
            expect(accountingService.add(param1, param2) == 0).toBeTruthy();
        })
        it("when param1 and param2 are negative", () => {
            const accountingService = new AccountingService();
            let param1 = -9;
            let param2 = -9;
            expect(accountingService.add(param1, param2) < 0).toBeTruthy();
        })
        it("when param1 is positive and param2 is negative and is big than param1", () => {
            const accountingService = new AccountingService();
            let param1 = 5;
            let param2 = -9;
            expect(accountingService.add(param1, param2) < 0).toBeTruthy();
        })
        it("when param1 is positive and param2 is negative and is little than param1", () => {
            const accountingService = new AccountingService();
            let param1 = 5;
            let param2 = -4;
            expect(accountingService.add(param1, param2) > 0).toBeTruthy();
        })
        it("when param1 is negative and param2 is positive and is big than param1", () => {
            const accountingService = new AccountingService();
            let param1 = -5;
            let param2 = 7;
            expect(accountingService.add(param1, param2) > 0).toBeTruthy();
        })
        it("when param1 is negative and param2 is positive and is little than param1", () => {
            const accountingService = new AccountingService();
            let param1 = -5;
            let param2 = 3;
            expect(accountingService.add(param1, param2) < 0).toBeTruthy();
        })
        it("when add is fill", () => {
            const accountingService = new AccountingService();
            const prueba = () => {};
            expect(accountingService.add !== prueba).toBeTruthy();
        })
        it("when add is fill", () => {
            const accountingService = new AccountingService();
            const prueba = () => {};
            expect(accountingService.add != prueba).toBeTruthy();
        })

    });
    describe("should return false", () => {
        it("when two param are positive", () => {
            const accountingService = new AccountingService();
            let param1 = 9;
            let param2 = 5;
            accountingService.add(param1, param2);
            expect(accountingService.add(param1, param2) < 0).toBeFalsy();
        })
        it("when two param1 es positive and equals than param2 who is negative", () => {
            const accountingService = new AccountingService();
            let param1 = 9;
            let param2 = -9;
            expect(accountingService.add(param1, param2) != 0).toBeFalsy();
        })
        it("when param1 and param2 are negative", () => {
            const accountingService = new AccountingService();
            let param1 = -9;
            let param2 = -9;
            expect(accountingService.add(param1, param2) >= 0).toBeFalsy();
        })
        it("when param1 is positive and param2 is negative and is big than param1", () => {
            const accountingService = new AccountingService();
            let param1 = 5;
            let param2 = -9;
            expect(accountingService.add(param1, param2) > 0).toBeFalsy();
        })
        it("when param1 is positive and param2 is negative and is little than param1", () => {
            const accountingService = new AccountingService();
            let param1 = 5;
            let param2 = -4;
            expect(accountingService.add(param1, param2) < 0).toBeFalsy();
        })
        it("when param1 is negative and param2 is positive and is big than param1", () => {
            const accountingService = new AccountingService();
            let param1 = -5;
            let param2 = 7;
            expect(accountingService.add(param1, param2) < 0).toBeFalsy();
        })
        it("when param1 is negative and param2 is positive and is little than param1", () => {
            const accountingService = new AccountingService();
            let param1 = -5;
            let param2 = 3;
            expect(accountingService.add(param1, param2) > 0).toBeFalsy();
        })
        it("when add is not empty", () => {
            const accountingService = new AccountingService();
            const prueba = () => {};
            expect(accountingService.add === prueba).toBeFalsy();
        })
        it("when add is empty", () => {
            const accountingService = new AccountingService();
            const prueba = () => {};
            expect(accountingService.add == prueba).toBeFalsy();
        })
    });
})
describe("#calcuPrice", () => {
    describe("should return true", () => {
        it("when calcuPrice is fill", () => {
            const accountingService = new AccountingService();
            const prueba = () => {};
            expect(accountingService.calcuPrice != prueba).toBeTruthy();
        })
        it("when param1 and param2 is positive and !=0", () => {
            const accountingService = new AccountingService();
            let param1 = 4;
            let param2 = 5;
            expect(accountingService.calcuPrice(param1, param2) > 0).toBeTruthy();
        })
        it("when param1 and param2 is positive and ==0", () => {
            const accountingService = new AccountingService();
            let param1 = 4;
            let param2 = 0;
            expect(accountingService.calcuPrice(param1, param2) == 0).toBeTruthy();
        })
        it("when param1 is positive and param2 is negative and !=0", () => {
            const accountingService = new AccountingService();
            let param1 = 4;
            let param2 = -3;
            expect(accountingService.calcuPrice(param1, param2) < 0).toBeTruthy();
        })
        it("when param1 is negative and param2 is positive and !=0", () => {
            const accountingService = new AccountingService();
            let param1 = -4;
            let param2 = 3;
            expect(accountingService.calcuPrice(param1, param2) < 0).toBeTruthy();
        })
        it("when param1 is negative and param2 is negative and !=0", () => {
            const accountingService = new AccountingService();
            let param1 = -4;
            let param2 = -3;
            expect(accountingService.calcuPrice(param1, param2) > 0).toBeTruthy();
        })

    })
    describe("should return false", () => {
        it("when calcuPrice is empty", () => {
            const accountingService = new AccountingService();
            const prueba = () => {};
            expect(accountingService.calcuPrice == prueba).toBeFalsy();
        })
        it("when param1 and param2 is positive and !=0", () => {
            const accountingService = new AccountingService();
            let param1 = 4;
            let param2 = 5;
            expect(accountingService.calcuPrice(param1, param2) <= 0).toBeFalsy();
        })
        it("when param1 and param2 is positive and ==0", () => {
            const accountingService = new AccountingService();
            let param1 = 4;
            let param2 = 0;
            expect(accountingService.calcuPrice(param1, param2) != 0).toBeFalsy();
        })
        it("when param1 is positive and param2 is negative and !=0", () => {
            const accountingService = new AccountingService();
            let param1 = 4;
            let param2 = -3;
            expect(accountingService.calcuPrice(param1, param2) >= 0).toBeFalsy();
        })
        it("when param1 is negative and param2 is positive and !=0", () => {
            const accountingService = new AccountingService();
            let param1 = -4;
            let param2 = 3;
            expect(accountingService.calcuPrice(param1, param2) >= 0).toBeFalsy();
        })
        it("when param1 is negative and param2 is negative and !=0", () => {
            const accountingService = new AccountingService();
            let param1 = -4;
            let param2 = -3;
            expect(accountingService.calcuPrice(param1, param2) <= 0).toBeFalsy();
        })
    })
})