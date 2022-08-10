import BaseApi from '../base.api'

export default class PaymentMomoApi extends BaseApi{
    
  constructor(){
    super()
    this.setSubdiretory("/momo/get_qr").url = this.domain + this.subdiretory
  }
  async loadPaymentMomo({amount, note, redirectUrl, partnerName} = {}) {
    const data = {
        amount: amount,
        note: note,
        redirectUrl: redirectUrl,
        partnerName: partnerName,
      }
    this.setData(data)
    return await this.postData()
  }
}
