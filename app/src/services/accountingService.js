function AccountingService(){
    this._account = new Accounting();
}

AccountingService.prototype = {
    get account(){
        return this._account;
    },
    set account(account){
        this._account = this.account;
    },
    add(param1,param2){
        return parseInt(param1)+parseInt(param2);
    },
    calcuPrice(param1,param2){
       return parseInt(param1)*parseInt(param2)
    },
    
}
 

   
   
    