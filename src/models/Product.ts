export default interface IProduct {
    id: number,
    title: string,
    imageUrl: string,
    url: string
    formatAmount: string
    amount: string
    currency: string
    description: string
    prices: [
        {
            amount: number
            currency: string
        }
    ]
  }