describe("#init", () => {
    describe("should return true", () => {
        it("when _accountingService is equal to param", () => {
            controller.init(AccountingService);
            expect( this._accountingService).toEqual(AccountingService);
        })
        it("when init is fill", () => {
           
            expect(controller.init != undefined).toBeTruthy();
        })

    })
    describe("should return false", () => {
        it("when _accountingService is diferent to param", () => {
            controller.init(_accountingService);
            expect(this._accountingService).not.toEqual("palabrasService");
        })
        it("when init is empty", () => {
            expect(controller.init === undefined).toBeFalsy();
        })

    })
});
describe("#valueInput",()=>{
    beforeEach(function () {
        var fixture = '<div class="field" id="fixture">' +
        ' <input id="prueba" value ="2">'+
            '</div>';
        document.body.insertAdjacentHTML(
            'afterbegin',
            fixture);
    });
    afterEach(function () {
        document.body.removeChild(document.getElementById('fixture'));
    });
    describe("should return true", () => {
        it("when valueElement get Value correct", () => {
           expect(controller.valueInput("prueba") == 2).toBeTruthy();
        })
        it("when valueElement is fill", () => {
           const prueba = () =>{};
            expect(controller.valueInput != prueba).toBeTruthy();
        })

    })
    describe("should return false", () => {
        it("when valueElement get Value incorrect", () => {
            expect(controller.valueInput("prueba") != 2).toBeFalsy();
        })
        it("when valueElement is empty", () => {
            const prueba = () =>{};
            expect(controller.valueInput === prueba).toBeFalsy();
        })

    })
})
describe("#changeSign", () => {
    describe("should return true", () => {
        it("when changeSign is fill", () => {
           const prueba = () =>{};
           expect(controller.changeSign != prueba).toBeTruthy();
        })
        it("when value is positive return negative",()=>{
            expect(controller.changeSign(4)<0).toBeTruthy();
        })
        it("when value is negative return positive",()=>{
            expect(controller.changeSign(-4)>0).toBeTruthy();
        })
        it("when value is 0 return 0",()=>{
            expect(controller.changeSign(0)==0).toBeTruthy();
        })
   })
    describe("should return false", () => {
        it("when changeSign is empty", () => {
            const prueba = () =>{};
            expect(controller.changeSign == prueba).toBeFalsy();
        })
        it("when value is positive return negative",()=>{
            expect(controller.changeSign(4)>0).toBeFalsy();
        })
        it("when value is negative return positive",()=>{
            expect(controller.changeSign(-4)<0).toBeFalsy();
        })
        it("when value is 0 return diferent 0",()=>{
            expect(controller.changeSign(0)!=0).toBeFalsy();
        })
       

    })
})
describe("#pay", () => {
    beforeEach(function () {
        var fixture = '<div class="field" id="fixture"><table><thead/><tbody>' +
        ' <tr><td id="metodoPago">2</td">'+
       '</tr></tbody></table>'+
            '</div>';
        document.body.insertAdjacentHTML(
            'afterbegin',
            fixture);
     
    });
    afterEach(function () {
        document.body.removeChild(document.getElementById('fixture'));
    });
    describe("should return true", () => {
        it("when pay is fill", () => {
            expect(controller.pay != undefined).toBeTruthy();
        })

    })
    describe("should return false", () => {
        it("when pay is empty", () => {
            expect(controller.pay == undefined).toBeFalsy();
        })

    })
})
describe("#element",()=>{
    beforeEach(function () {
        var fixture = '<div class="field" id="fixture">' +
        ' <input id="prueba" value="2">'+
            '</div>';
        document.body.insertAdjacentHTML(
            'afterbegin',
            fixture);
    });
    afterEach(function () {
        document.body.removeChild(document.getElementById('fixture'));
    });
    describe("should return true", () => {
        it("when valueElement get Value correct", () => {
            let prueba = window.document.getElementById("prueba");
           expect(controller.element("prueba") == prueba).toBeTruthy();
        })
        it("when valueElement is fill", () => {
           const prueba = () =>{};
            expect(controller.element != prueba).toBeTruthy();
        })

    })
    describe("should return false", () => {
        it("when valueElement get Value incorrect", () => {
            let prueba = window.document.getElementById("prueba");
            expect(controller.element("prueba") != prueba).toBeFalsy();
        })
        it("when valueElement is empty", () => {
            const prueba = () =>{};
            expect(controller.element === prueba).toBeFalsy();
        })

    })
})
describe("#addpurchase", () => {
    beforeEach(function () {
        var fixture = '<div class="field" id="fixture">' +
            '<table><thead/><tbody><tr>'+
            ' <input id="idMonitor" value="3">' +
            ' <td id="idMonitorPrice">'+150+'</td>' +
            ' <td id="idMonitorPurchase">'+0+'</td>' +
            ' <td id="idMonitorPurchasePrice">'+ 0+'</td>' +
            ' <td id="idTotal">'+0+'</td>' +
            ' <td id="cantidadTotalSinComisiones">'+0+'</td>' +
            ' <td id="comision">'+2+'</td>' +
            ' <td id="totalInvoice">'+0+'</td>' +
            '</tr></tbody></table>'+
            '</div>';
        document.body.insertAdjacentHTML(
            'afterbegin',
            fixture);
    });
    afterEach(function () {
        document.body.removeChild(document.getElementById('fixture'));
    });
    describe("should return true", () => {
        it("when addpurchase is fill", () => {
           
            expect(controller.addPurchase != undefined).toBeTruthy();
        })
        it("when addPurchase is empty", () => {
            const prueba = () =>{};
            expect(controller.addPurchase !== prueba).toBeTruthy();
        })
        it("when reset el value of id is equal 0",()=>{
            const accountingService = new AccountingService();
            controller.init(accountingService);
            controller.addPurchase("idMonitor");
            expect(window.document.getElementById("idMonitor").value == 0).toBeTruthy();
        })
        it("when reset el value of idPurchase is equal 3",()=>{
            const accountingService = new AccountingService();
            controller.init(accountingService);
            controller.addPurchase("idMonitor");
            expect(window.document.getElementById("idMonitorPurchase").innerHTML == 3).toBeTruthy();
        })
        it("when reset el value of idPurchasePrice is equal 150",()=>{
            const accountingService = new AccountingService();
            controller.init(accountingService);
            controller.addPurchase("idMonitor");
            expect(window.document.getElementById("idMonitorPurchasePrice").innerHTML  == 450).toBeTruthy();;
        })

    })
    describe("should return false", () => {
        it("when addPurchase is empty", () => {
            expect(controller.addPurchase === undefined).toBeFalsy();
        })
        it("when addPurchase is empty", () => {
            const prueba = () =>{};
            expect(controller.addPurchase === prueba).toBeFalsy();
        })
        it("when reset el value of id is diferent 0",()=>{
            const accountingService = new AccountingService();
            controller.init(accountingService);
            controller.addPurchase("idMonitor");
            expect(window.document.getElementById("idMonitor").value != 0).toBeFalsy();
        })
        it("when reset el value of idPurchase is diferent 3",()=>{
            const accountingService = new AccountingService();
            controller.init(accountingService);
            controller.addPurchase("idMonitor");
            expect(window.document.getElementById("idMonitorPurchase").innerHTML != 3).toBeFalsy();
        })
        it("when reset el value of idPurchasePrice is diferent 150",()=>{
            const accountingService = new AccountingService();
            controller.init(accountingService);
            controller.addPurchase("idMonitor");
            expect(window.document.getElementById("idMonitorPurchasePrice").innerHTML  != 450).toBeFalsy();;
        })


    })
})


describe("#deletePurchase", () => {
  
    beforeEach(function () {
        var fixture = '<div class="field" id="fixture"><table><thead/><tbody>' +
        ' <tr><td id="idMonitorPurchase">2</td">'+
        ' <td id="idMonitorPurchasePrice">300</td>'+
        ' <td id="idTotal" value="300"</td>'+
        ' <td id="cantidadTotalSinComisiones">300</td>'+
        ' <td id="comision">300</td>'+
        ' <td id="totalInvoice" value="300"></tr></tbody></table>'+
            '</div>';
        document.body.insertAdjacentHTML(
            'afterbegin',
            fixture);
     
    });
    afterEach(function () {
        document.body.removeChild(document.getElementById('fixture'));
    });
    describe("should return true", () => {
        it("when deletePurchase is fill", () => {     
            expect(controller.deletePurchase != undefined).toBeTruthy();
        })
        it("when reset el value of idPurchase is equal 0",()=>{
            const accountingService = new AccountingService();
            controller.init(accountingService);
            controller.deletePurchase("idMonitorPurchase");
            expect(window.document.getElementById("idMonitorPurchase").innerHTML == 0).toBeTruthy();
        })
        it("when reset el value of idPurchasePrice is equal 0",()=>{
            const accountingService = new AccountingService();
            controller.init(accountingService);
            controller.deletePurchase("idMonitorPurchase");
            expect(window.document.getElementById("idMonitorPurchasePrice").innerHTML == 0).toBeTruthy();
        })

    })
    describe("should return false", () => {
        it("when deletePurchase is empty", () => {
           
            expect(controller.deletePurchase === undefined).toBeFalsy();
        })
        it("when reset el value of idPurchase is diferent 0",()=>{
            const accountingService = new AccountingService();
            controller.init(accountingService);
            controller.deletePurchase("idMonitorPurchase");
            expect(window.document.getElementById("idMonitorPurchase").innerHTML != 0).toBeFalsy();
        })
        it("when reset el value of idPurchasPrice is diferent 0",()=>{
            const accountingService = new AccountingService();
            controller.init(accountingService);
            controller.deletePurchase("idMonitorPurchase");
            expect(window.document.getElementById("idMonitorPurchasePrice").innerHTML != 0).toBeFalsy();
        })


    })
})
describe("#calcuInvoice", () => {
    beforeEach(function () {
        var fixture = '<div class="field" id="fixture"><table><thead/><tbody>' +
        ' <tr><td id="idTotal" value="300"</td>'+
        ' <td id="cantidadTotalSinComisiones">300</td>'+
        ' <td id="comision">300</td>'+
        ' <td id="totalInvoice" value="300"></tr></tbody></table>'+
            '</div>';
        document.body.insertAdjacentHTML(
            'afterbegin',
            fixture);
    });
    afterEach(function () {
        document.body.removeChild(document.getElementById('fixture'));
    });
    describe("should return true", () => {
        it("when calcuInvoice is fill", () => {
           const prueba = () =>{};
           expect(controller.calcuInvoice != prueba).toBeTruthy();
        })
        it("when execute change value of idTotal", () => {
            const accountingService = new AccountingService();
            controller.init(accountingService);
           this._accountingService.account.invoice =100;            
            controller.calcuInvoice();
            expect(window.document.getElementById("idTotal").innerHTML== 100).toBeTruthy();

        })
        it("when execute change value of cantidadTotalSinComisiones", () => {
            const accountingService = new AccountingService();
            controller.init(accountingService);
           this._accountingService.account.invoice =100;            
            controller.calcuInvoice();
            expect(window.document.getElementById("cantidadTotalSinComisiones").innerHTML == 100).toBeTruthy();
        })
        it("when execute change value of comision", () => {
            const accountingService = new AccountingService();
            controller.init(accountingService);
           this._accountingService.account.invoice =100;            
            controller.calcuInvoice();
            expect(window.document.getElementById("comision").innerHTML == 2).toBeTruthy();
        })
        it("when execute change value of totalInvoice", () => {
            const accountingService = new AccountingService();
            controller.init(accountingService);
           this._accountingService.account.invoice =100;            
            controller.calcuInvoice();
            expect(window.document.getElementById("totalInvoice").innerHTML == 102).toBeTruthy();
        })


    })
    describe("should return false", () => {
        it("when calcuInvoice is empty", () => {
            const prueba = () =>{};
            expect(controller.calcuInvoice == prueba).toBeFalsy();
        })
        it("when execute change error value of idTotal", () => {
            const accountingService = new AccountingService();
            controller.init(accountingService);
           this._accountingService.account.invoice =100;            
            controller.calcuInvoice();
            expect(window.document.getElementById("idTotal").innerHTML!= 100).toBeFalsy();

        })
        it("when execute change value error of cantidadTotalSinComisiones", () => {
            const accountingService = new AccountingService();
            controller.init(accountingService);
           this._accountingService.account.invoice =100;            
            controller.calcuInvoice();
            expect(window.document.getElementById("cantidadTotalSinComisiones").innerHTML != 100).toBeFalsy();
        })
        it("when execute change value error of comision", () => {
            const accountingService = new AccountingService();
            controller.init(accountingService);
           this._accountingService.account.invoice =100;            
            controller.calcuInvoice();
            expect(window.document.getElementById("comision").innerHTML != 2).toBeFalsy();
        })
        it("when execute change value error  of totalInvoice", () => {
            const accountingService = new AccountingService();
            controller.init(accountingService);
            this._accountingService.account.invoice =100;
            controller.calcuInvoice();
            expect(window.document.getElementById("totalInvoice").innerHTML != 102).toBeFalsy();
        })


    })
})





describe("#valueTd",()=>{
    beforeEach(function () {
        var fixture = '<div class="field" id="fixture">' +
        ' <td id="prueba">2</td>'+
            '</div>';
        document.body.insertAdjacentHTML(
            'afterbegin',
            fixture);
    });
    afterEach(function () {
        document.body.removeChild(document.getElementById('fixture'));
    });
    describe("should return true", () => {
       /* it("when valueElement get Value correct", () => {
           //expect(controller.valueTd("prueba") == 2).toBeTruthy();
           expect(controller.valueTd("prueba")).toEqual();
        })*/
        it("when valueElement is fill", () => {
           const prueba = () =>{};
            expect(controller.valueTd != prueba).toBeTruthy();
        })

    })
    describe("should return false", () => {
       /* it("when valueElement get Value incorrect", () => {
            expect(controller.valueTd("prueba") != 2).toBeFalsy();
        })*/
        it("when valueElement is empty", () => {
            const prueba = () =>{};
            expect(controller.valueTd === prueba).toBeFalsy();
        })

    })
})
