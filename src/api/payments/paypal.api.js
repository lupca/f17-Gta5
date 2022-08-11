import BaseApi from '../base.api'

export default class payPalWebhookApi extends BaseApi{
    
  constructor(){
    super()
    this.setSubdiretory("/api/v1/paypal/webhooks").url = this.domain + this.subdiretory
  }
  async loadPaymentPayPal({tranId, ackTime, amount, currency_code, status, partnerId, citizenid, fcoin} = {}) {
    const data = {
        tranId: tranId, 
        ackTime: ackTime, 
        amount: amount, 
        currency_code: currency_code, 
        status: status, 
        partnerId: partnerId, 
        citizenid: citizenid, 
        fcoin: fcoin
      }
    this.setData(data)
    return await this.postData()
  }
}
