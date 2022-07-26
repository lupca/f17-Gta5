
export default class BaoKim {
  constructor(paymentUrl, mrcOrderId,
      totalAmount, description,
      urlSuccess, merchantId,
      urlDetail, lang, bpmId,
      webhooks) {
    this.payment_url = paymentUrl;
    this.mrcOrderId = mrcOrderId;
    this.totalAmount = totalAmount;
    this.description = description;
    this.urlSuccess = urlSuccess;
    this.merchantId = merchantId;
    this.urlDetail = urlDetail;
    this.lang = lang;
    this.bpmId = bpmId;
    this.webhooks = webhooks;
  }
}
