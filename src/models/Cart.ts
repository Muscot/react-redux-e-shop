import IProduct from './Product';

export default interface ICart {
    quantity: number,
    formatAmount: string
    amount: string
    currency: string    
    product: IProduct
  }