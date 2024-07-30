var sale = {
    price: 0,
    taxRate: 0,
    tax: 0,
    total: 0,
    updateSale: function(price, taxRate) {
        this.price = price;
        this.taxRate = taxRate;
        this.tax = this.price * this.taxRate/100;
        this.total = this.price + this.tax;
        this.displaySale();
    },
    displaySale: function() {
        console.log("price = $" + this.price);
        console.log("tax @ " + this.taxRate + "% = $" + this.tax);
        console.log("total cost = $" + this.total);
        console.log("------------------------------");
    }
};

sale.updateSale(140, 15);
sale.updateSale(40, 10);
