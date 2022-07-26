import Momo from '../../../src/models/payments/Momo'

describe('Check attr of momo', () => {
  const amount = 0
  const note = "some notes"
  const redirectUrl = "some url"
  const partnerName = "some name"
  const phone = "phone"
  const momo = new Momo(amount, note, redirectUrl, partnerName, phone)

  it('Momo have amount', () => {
    expect(momo.amount).toBe(amount);
  });
  it('Momo have note', () => {
    expect(momo.note).toBe(note);
  })
  it('Momo have redirectUrl', () => {
    expect(momo.redirectUrl).toBe(redirectUrl);
  })
  it('Momo have partnerName', () => {
    expect(momo.partnerName).toBe(partnerName);
  })
  it('Momo have phone', () => {
    expect(momo.phone).toBe(phone);
  })  
})
