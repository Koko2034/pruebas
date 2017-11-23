function Accounting(account  = {}){
    const { invoice =0,tax=2,totalInvoice=0,type="Transferencia_Bancaria"} = account;
    this._invoice=invoice;
    this._tax=2;
    this._totalInvoice=totalInvoice;
    this._type=type;
}

Accounting.prototype = {
    get invoice(){
        return this._invoice;
    },
    set invoice(invoice){
        this._invoice = this.invoice+parseInt(invoice);
    },
    get tax(){
        return this._tax;
    },
    set tax(tax){
        throw new Error("You can't set tax");
       },
    get totalInvoice(){
        return this._totalInvoice;
    },
    set totalInvoice(totalInvoice){
        throw new Error("You can't set totalinvoice");
    },
    get type(){
        return this._type;
    },
    set type(type){
        this._type=type;
    },
    settingtotalInvoice(){
        this._totalInvoice = parseFloat(this.invoice)+parseFloat(this.tax);
    },
    settingtax(){
        this._tax = (AppSettings.methodPayment[this.type].fijo + ((AppSettings.methodPayment[this.type].porcentaje/100)*this.invoice)).toFixed(2);
        
    }
}
 
   
    