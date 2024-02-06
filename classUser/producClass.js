'use strict'

class Product {
    constructor (description, price, stock) {
        this.description = description;
        this.price = price;
        this.stock = stock;

    }

    showInfo(){
        alert("Description: "+this.description);
       alert("Price: "+this.price);
        alert("Stock: "+this.stock);
}

    minusStock(venta){
        this.stock = this.stock - venta;
    }

    incrementStock(incre) {
        this.stock = this.stock +incre;    
    }

    updatePrice(price){
        this.price = price;
    } 
  }

  let cereal = new Product ('Camisa de Caballero', 10, 21);
  cereal.showInfo();
  cereal.minusStock(10);
  cereal.incrementStock(6);
  cereal.updatePrice(18.5);
  cereal.showInfo();