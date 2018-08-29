export class Product {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public category_id: string,
    public thumbnail: string,
    public category_title: string,
    public price: string,
    public stock: number
  ) {
  }
}
