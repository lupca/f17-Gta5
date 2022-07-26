export default class Paypal {
  constructor(tranId,
      ackTime,
      amount,
      currencyCode,
      status,
      partnerId,
      citizenid,
      fcoin) {
    this.tranId = tranId;
    this.ackTime = ackTime;
    this.amount = amount;
    this.currencyCode = currencyCode;
    this.status = status;
    this.partnerId = partnerId;
    this.citizenid = citizenid;
    this.fcoin = fcoin;
  }
}
