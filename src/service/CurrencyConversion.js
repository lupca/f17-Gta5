export default class CurrencyConversionService {
  constructor(fcoin, type){
    this.fcoin = fcoin
    this.type = type
    this.amount = 0
    this.denominations = 22;
  }

  perform() {
    this.fcoin = parseInt(this.fcoin);
  
    if (this.type === "USD") {
      if (this.fcoin >= 550) this.amount = (this.fcoin * 0.9) / this.denominations ;
      else this.amount = this.fcoin / this.denominations;
  
      return Math.round(this.amount * 10) / 10
    }
    else {
      if (this.fcoin >= 550) return this.fcoin * 0.9 * 1000;
      else return this.fcoin * 1000;
    }
  }
}
