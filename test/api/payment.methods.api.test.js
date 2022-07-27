import PaymentMethodApi from '../../src/api/payment.methods.api'

describe('Check attr of paymentMethodApi', () => {
  const userApi = new PaymentMethodApi()

  it('UserApi have url', () => {
    expect(userApi.subdiretory).toBe("/baokim/method_payment");
  })
})
