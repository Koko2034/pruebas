/*describe("#init", () => {
    describe("should return true", () => {
        it("when inicializate invoice is 0", () => {
            accountingService.init();
            expect(accountingService.getInvoice() == 0).toBeTruthy();
        })
        it("when inicializate totalInvoice is 0", () => {
            accountingService.init();
            expect(accountingService.getTotalInvoice() == 0).toBeTruthy();
        })
        it("when inicializate tax is 0", () => {
            accountingService.init();
            expect(accountingService.getTax() == 0).toBeTruthy();
        })
        it("when inicializate type is Transferencia_Bancaria", () => {
            accountingService.init();
            expect(accountingService.getType() == "Transferencia_Bancaria").toBeTruthy();
        })
        it("when init is fill", () => {
            const prueba = () => {};
            expect(accountingService.init != prueba).toBeTruthy();
        })
    })
    describe("should return false", () => {
        it("when inicializate invoice is diferent 0", () => {
            accountingService.init();
            expect(accountingService.getInvoice() != 0).toBeFalsy();
        })
        it("when inicializate totalInvoice is diferent 0", () => {
            accountingService.init();
            expect(accountingService.getTotalInvoice() != 0).toBeFalsy();
        })
        it("when inicializate tax is diferent 0", () => {
            accountingService.init();
            expect(accountingService.getTax() != 0).toBeFalsy();
        })
        it("when inicializate type is diferent Transferencia_Bancaria", () => {
            accountingService.init();
            expect(accountingService.getType() != "Transferencia_Bancaria").toBeFalsy();
        })
        it("when init is empty", () => {
            const prueba = () => {};
            expect(accountingService.init == prueba).toBeFalsy();
        })
    })
});
describe("#getType", () => {
    describe("should return true", () => {
        it("when Type is equal to type assignation", () => {
            accountingService.setType("Paypal");
            expect(accountingService.getType() == "Paypal").toBeTruthy();
        })
        it("when getType is fill", () => {
            const prueba = () => {};
            expect(accountingService.getType != prueba).toBeTruthy();
        })
    })
    describe("should return false", () => {
        it("when Type is diferent to type assignation", () => {

            accountingService.setType("Paypal");
            expect(accountingService.getType() != "Paypal").toBeFalsy();
        })
        it("when getType is empty", () => {
            const prueba = () => {};
            expect(accountingService.getType == prueba).toBeFalsy();
        })
    })
})
describe("#getInvoice", () => {
    describe("should return true", () => {
        it("when getInvoice is fill", () => {
            const prueba = () => {};
            expect(accountingService.getInvoice != prueba).toBeTruthy();
        })
        it("when Invoice is equal to assignation", () => {
            accountingService.init();
            accountingService.setInvoice(100);
            expect(accountingService.getInvoice() == 100).toBeTruthy();
        })
        it("when Invoice is equal to assignation", () => {
            accountingService.init();
            accountingService.setInvoice(100);
            accountingService.setInvoice(200);
            expect(accountingService.getInvoice() == 300).toBeTruthy();
        })
    })
    describe("should return false", () => {
        it("when getInvoice is empty", () => {
            const prueba = () => {};
            expect(accountingService.getInvoice == prueba).toBeFalsy();
        })
        it("when Invoice is equal to assignation", () => {
            accountingService.init();
            accountingService.setInvoice(100);
            expect(accountingService.getInvoice() != 100).toBeFalsy();
        })
        it("when Invoice is equal to assignation", () => {
            accountingService.init();
            accountingService.setInvoice(100);
            accountingService.setInvoice(200);
            expect(accountingService.getInvoice() != 300).toBeFalsy();
        })

    })
})*/

describe("#Accounting", () => {
    describe("should return true", () => {
        it("when Accounting is empty", () => {
            const prueba = () => {};
            expect(Accounting == prueba).toBeFalsy();
        })
        it("when invoice is different to 100", () => {
            const prueba = {
                invoice: 100,
                tax: 2,
                totalinvoice: 400,
                type: 'PayPal'
            }
            const account = new Accounting(prueba);
            expect(account.invoice == 100).toBeTruthy();

        })
        it("when invoice is equal to 0 with object", () => {
            const prueba = {
                tax: 2,
                totalinvoice: 400,
                type: 'PayPal'
            }
            const account = new Accounting(prueba);
            expect(account.invoice == 0).toBeTruthy();
            it("when invoice is equal to 0 without object", () => {

                const account = new Accounting();
                expect(account.invoice == 0).toBeTruthy();
            })
            it("when tax is 2", () => {
                const prueba = {
                    invoice: 100,
                    tax: 2,
                    totalinvoice: 400,
                    type: 'PayPal'
                }
                const account = new Accounting(prueba);
                expect(account.tax == 2).toBeTruthy();
            })
            it("when tax is 2 with object", () => {
                const prueba = {
                    invoice: 100,
                    tax: 2,
                    totalinvoice: 400,
                    type: 'PayPal'
                }
                const account = new Accounting(prueba);
                expect(account.tax == 2).toBeTruthy();
            })
            it("when tax is 2 without object", () => {
                const prueba = {
                    invoice: 100,
                    totalinvoice: 400,
                    type: 'PayPal'
                }
                const account = new Accounting(prueba);
                expect(account.tax == 2).toBeTruthy();
            })
            it("when totalinvoice is 0", () => {
                const prueba = {
                    invoice: 100,
                    tax: 2,
                    totalinvoice: 0,
                    type: 'PayPal'
                }
                const account = new Accounting(prueba);
                expect(account.totalInvoice == 0).toBeTruthy();
            })
            it("when totalinvoice is 0 with object", () => {
                const prueba = {
                    invoice: 100,
                    tax: 2,
                    type: 'PayPal'
                }
                const account = new Accounting(prueba);
                expect(account.totalInvoice == 0).toBeTruthy();
            })
            it("when totalinvoice is 0 without object", () => {
                const account = new Accounting();
                expect(account.totalInvoice == 0).toBeTruthy();
            })
            it("when type is Paypal", () => {
                const prueba = {
                    invoice: 100,
                    tax: 2,
                    totalinvoice: 400,
                    type: 'PayPal'
                }
                const account = new Accounting(prueba);
                expect(account.type == 'PayPal').toBeTruthy();
            })
            it("when type is Transferencia_bancaria with Object", () => {
                const prueba = {
                    invoice: 100,
                    tax: 2,
                    totalinvoice: 400
                }
                const account = new Accounting(prueba);
                expect(account.type == 'Transferencia_Bancaria').toBeTruthy();
            })
            it("when type is PayPal without Object", () => {

                const account = new Accounting();
                expect(account.type == 'Transferencia_Bancaria').toBeTruthy();
            })
        })
        describe("should return false", () => {
            it("when Accounting is empty", () => {
                const prueba = () => {};
                expect(Accounting == prueba).toBeFalsy();
            })
            it("when invoice is different to 100", () => {
                const prueba = {
                    invoice: 100,
                    tax: 2,
                    totalinvoice: 400,
                    type: 'PayPal'
                }
                const account = new Accounting(prueba);
                expect(account.invoice != 100).toBeFalsy();

            })
            it("when invoice is equal to 0 with object", () => {
                const prueba = {
                    tax: 2,
                    totalinvoice: 400,
                    type: 'PayPal'
                }
                const account = new Accounting(prueba);
                expect(account.invoice != 0).toBeFalsy();
            })
            it("when invoice is equal to 0 without object", () => {

                const account = new Accounting();
                expect(account.invoice != 0).toBeFalsy();
            })
            it("when tax is 2", () => {
                const prueba = {
                    invoice: 100,
                    tax: 2,
                    totalinvoice: 400,
                    type: 'PayPal'
                }
                const account = new Accounting(prueba);
                expect(account.tax != 2).toBeFalsy();
            })
            it("when tax is 2 with object", () => {
                const prueba = {
                    invoice: 100,
                    tax: 2,
                    totalinvoice: 400,
                    type: 'PayPal'
                }
                const account = new Accounting(prueba);
                expect(account.tax != 2).toBeFalsy();
            })
            it("when tax is 2 without object", () => {
                const prueba = {
                    invoice: 100,
                    totalinvoice: 400,
                    type: 'PayPal'
                }
                const account = new Accounting(prueba);
                expect(account.tax != 2).toBeFalsy();
            })
            it("when totalinvoice is 0", () => {
                const prueba = {
                    invoice: 100,
                    tax: 2,
                    totalinvoice: 0,
                    type: 'PayPal'
                }
                const account = new Accounting(prueba);
                expect(account.totalInvoice != 0).toBeFalsy();
            })
            it("when totalinvoice is 0 with object", () => {
                const prueba = {
                    invoice: 100,
                    tax: 2,
                    type: 'PayPal'
                }
                const account = new Accounting(prueba);
                expect(account.totalInvoice != 0).toBeFalsy();
            })
            it("when totalinvoice is 0 without object", () => {
                const account = new Accounting();
                expect(account.totalInvoice != 0).toBeFalsy();
            })
            it("when type is Paypal", () => {
                const prueba = {
                    invoice: 100,
                    tax: 2,
                    totalinvoice: 400,
                    type: 'PayPal'
                }
                const account = new Accounting(prueba);
                expect(account.type != 'PayPal').toBeFalsy();
            })
            it("when type is Transferencia_bancaria with Object", () => {
                const prueba = {
                    invoice: 100,
                    tax: 2,
                    totalinvoice: 400
                }
                const account = new Accounting(prueba);
                expect(account.type != 'Transferencia_Bancaria').toBeFalsy();
            })
            it("when type is PayPal without Object", () => {

                const account = new Accounting();
                expect(account.type != 'Transferencia_Bancaria').toBeFalsy();
            })
        })
    })
})
describe("#getter y setter", () => {
    describe("should return true", () => {
        it("when get is fill", () => {
            const account = new Accounting();
            const prueba = () => {};
            expect(account.get != prueba).toBeTruthy();
        })
        it("when set is fill", () => {
            const account = new Accounting();
            const prueba = () => {};
            expect(account.set != prueba).toBeTruthy();
        })
        it("when invoice is 15", () => {
            const account = new Accounting();
            account.invoice = 15;
            expect(account.invoice == 15).toBeTruthy();
        })
        it("when type is PayPal", () => {
            const account = new Accounting();
            account.type = "PayPal";
            expect(account.type == "PayPal").toBeTruthy();
        })
        it("when tax is 2", () => {
            const account = new Accounting();
            expect(account.tax == 2).toBeTruthy();
        })
        it("when tax setter throw error msg You can't set tax ", () => {
            const account = new Accounting();
            expect(function () {
                account.tax = "PayPal"
            }).toThrowError("You can't set tax");
        })
        it("when totalinvoice is 102", () => {
            const account = new Accounting();
            account.invoice = 100;
            account.settingtax();
            account.settingtotalInvoice();
            expect(account.totalInvoice == 102).toBeTruthy();
        })
        it("when totalinvoice throw error msg You can't set totalinvoice", () => {
            const account = new Accounting();
            expect(function () {
                account.totalInvoice = 1098948
            }).toThrowError("You can't set totalinvoice");

        })
    })
    describe("should return false", () => {
        it("when get is empty", () => {
            const account = new Accounting();
            const prueba = () => {};
            expect(account.get == prueba).toBeFalsy();
        })
        it("when set is empty", () => {
            const account = new Accounting();
            const prueba = () => {};
            expect(account.set == prueba).toBeFalsy();
        })
        it("when invoice is not 15", () => {
            const account = new Accounting();
            account.invoice = 15;
            expect(account.invoice != 15).toBeFalsy();
        })
        it("when type is not  PayPal", () => {
            const account = new Accounting();
            account.type = "PayPal";
            expect(account.type != "PayPal").toBeFalsy();
        })
        it("when tax is not 2", () => {
            const account = new Accounting();
            expect(account.tax != 2).toBeFalsy();
        })
        it("when totalinvoice is not 102", () => {
            const account = new Accounting();
            account.invoice = 100;
            account.settingtax();
            account.settingtotalInvoice();
            expect(account.totalInvoice != 102).toBeFalsy();
        })
        it("when tax setter throw error msg You can't set tax ", () => {
            const account = new Accounting();
            expect(function () {
                account.tax = "PayPal"
            }).not.toThrowError("x");
        })
        it("when totalinvoice throw error msg You can't set totalinvoice", () => {
            const account = new Accounting();
            expect(function () {
                account.totalInvoice = 1098948
            }).not.toThrowError("Y");

        })
    })
})

describe("#settingtax", () => {
    describe("should return true", () => {
        it("when setTax is fill", () => {
            const prueba = () => {};
            const account = new Accounting();
            expect(account.settingtax() != prueba).toBeTruthy();
        })
        it("when setTax change good", () => {
            const account = new Accounting();
            account.invoice = 100;
            account.settingtax();
            expect(account.tax == 2).toBeTruthy();
        })
        it("when setTax is correct", () => {
            const account = new Accounting();
            account.invoice = 100;
            account.type = 'PayPal';
            account.settingtax();
            expect(parseFloat(account.tax) == 3.75).toBeTruthy();
        })
    })
    describe("should return false", () => {
        it("when setTax is empty", () => {
            const prueba = () => {};
            const account = new Accounting();
            expect(account.tax == prueba).toBeFalsy();
        })
        it("when setTax is incorrect", () => {
            const account = new Accounting();
            account.invoice = 100;
            account.type = 'PayPal';
            account.settingtax();
            expect(parseFloat(account.tax) != 3.75).toBeFalsy();
        })
    })
})

describe("#setTotalInvoice", () => {
    describe("should return true", () => {
        it("when getTotalInvoice is fill", () => {
            const prueba = () => {};
            const account = new Accounting();
            expect(account.getTotalInvoice != prueba).toBeTruthy();
        })
        it("when calcu de totalInvoice", () => {
            const account = new Accounting();
            account.invoice = 200;
            account.settingtax();
            account.settingtotalInvoice();
            expect(account.totalInvoice == 202).toBeTruthy();
        })
        it("when calcu de totalInvoice", () => {
            const account = new Accounting();
            account.invoice = 200;
            account.type = "PayPal";
            account.settingtax();
            account.settingtotalInvoice();
            expect(parseFloat(account.totalInvoice) == 207.15).toBeTruthy();
        })
    })
    describe("should return false", () => {
        it("when setTotalInvoice is empty", () => {
            const prueba = () => {};
            const account = new Accounting();
            expect(account.totalInvoice == prueba).toBeFalsy();
        })
        it("when calcu de totalInvoice is error", () => {
            const account = new Accounting();
            account.invoice = 200;
            account.settingtax();
            account.settingtotalInvoice();
            expect(account.totalInvoice != 202).toBeFalsy();
        })
        it("when calcu de totalInvoice", () => {
            const account = new Accounting();
            account.invoice = 200;
            account.type = "PayPal";
            account.settingtax();
            account.settingtotalInvoice();
            expect(parseFloat(account.totalInvoice) != 207.15).toBeFalsy();
        })
    })
})