const controller = (function (platform) {
   this._accountingService;
    const init = (accountingService) => {
        this._accountingService = accountingService;

    }
    const valueInput = (id) => platform.getElementById(id).value;
    const element = (id) => platform.getElementById(id);
    const valueTd = (id) => platform.getElementById(id).innerHTML;


    const addPurchase = (id) => {
        let cant = valueInput(`${id}`);
        let cantOri = valueTd(`${id}` + 'Purchase');
        let cantAdd = this._accountingService.add(cant, cantOri);
        let price = valueTd(`${id}` + 'Price');
        element(`${id}` + 'Purchase').innerHTML = cantAdd;
        element(`${id}`).value = 0;
        element(`${id}` + 'PurchasePrice').innerHTML = this._accountingService.calcuPrice(cantAdd, price);
        this._accountingService.account.invoice = this._accountingService.calcuPrice(cant, price);
        calcuInvoice();
    }

    const deletePurchase = (id) => {
        let elementPrice = element(`${id}` + 'Price');
        element(`${id}`).innerHTML = 0;
        this._accountingService.account.invoice =parseInt(changeSign(elementPrice.innerHTML));
        elementPrice.innerHTML = 0;
        calcuInvoice();
    }
    const pay = (value) => {
        this._accountingService.account.type = `${value}`;
        element('metodoPago').innerHTML = `${value}`;
        calcuInvoice();
    }
    const changeSign = (value) => -value;
    const calcuInvoice = () => {
        element("idTotal").innerHTML = this._accountingService.account.invoice;
        this._accountingService.account.settingtax();
        this._accountingService.account. settingtotalInvoice();
        element("cantidadTotalSinComisiones").innerHTML = this._accountingService.account.invoice;
        element("comision").innerHTML = this._accountingService.account.tax;
        element("totalInvoice").innerHTML = this._accountingService.account.totalInvoice;

    }
    return {
        init,
        addPurchase,
        deletePurchase,
        pay,
        valueInput,
        valueTd,
        element,
        calcuInvoice,
        changeSign
    }
})(window.document);