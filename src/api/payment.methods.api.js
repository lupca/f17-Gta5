import BaseApi from './base.api'

export default class PaymentMethodApi extends BaseApi{
  constructor(){
    super()
    this.setSubdiretory("/baokim/method_payment").url = this.domain + this.subdiretory
  }

  async loadPaymentMethods() {
    return await this.getData()
  }
}
