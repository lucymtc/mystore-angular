export class Product {
  id: number;
  name: string;
  price: number;
  image: string;
  short_description: string;

  constructor() {
    this.id = 0;
    this.name = '';
    this.price = 0;
    this.image = '';
    this.short_description = '';
  }
}

export const productDefinition = {
  id: 0,
  name: '',
  image: '',
  price: 0,
  short_description: ''
};
