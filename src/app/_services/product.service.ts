import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() { }
  private products:any[] = [
    {
    id: 1,
    Title: "Product 1",
    src: "../../assets/img/download.png",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores in, debitis doloremque deleniti eligendi atque voluptate eius et veniam laudantium libero expedita. Doloremque minus nostrum porro eum esse, aut libero temporibus sequi! Corporis quaerat animi vel consectetur, necessitatibus atque repellat at possimus ullam iusto! Possimus inventore architecto praesentium fugiat eum?"
  },
    {
    id: 2,
    Title: "Product 2",
    src: "../../assets/img/download1.jpg",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores in, debitis doloremque deleniti eligendi atque voluptate eius et veniam laudantium libero expedita. Doloremque minus nostrum porro eum esse, aut libero temporibus sequi! Corporis quaerat animi vel consectetur, necessitatibus atque repellat at possimus ullam iusto! Possimus inventore architecto praesentium fugiat eum?"
  },
    {
    id: 3,
    Title: "Product 3",
    src: "../../assets/img/download2.jpg",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores in, debitis doloremque deleniti eligendi atque voluptate eius et veniam laudantium libero expedita. Doloremque minus nostrum porro eum esse, aut libero temporibus sequi! Corporis quaerat animi vel consectetur, necessitatibus atque repellat at possimus ullam iusto! Possimus inventore architecto praesentium fugiat eum?"
  },
  {
  id: 4,
  Title: "Product 4",
  src: "../../assets/img/workplace.jpg",
  des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores in, debitis doloremque deleniti eligendi atque voluptate eius et veniam laudantium libero expedita. Doloremque minus nostrum porro eum esse, aut libero temporibus sequi! Corporis quaerat animi vel consectetur, necessitatibus atque repellat at possimus ullam iusto! Possimus inventore architecto praesentium fugiat eum?"
  },
    {
    id: 5,
    Title: "Product 5",
    src: "../../assets/img/download2.jpg",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores in, debitis doloremque deleniti eligendi atque voluptate eius et veniam laudantium libero expedita. Doloremque minus nostrum porro eum esse, aut libero temporibus sequi! Corporis quaerat animi vel consectetur, necessitatibus atque repellat at possimus ullam iusto! Possimus inventore architecto praesentium fugiat eum?"
  },
    {
    id: 6,
    Title: "Product 6",
    src: "../../assets/img/programcategory.jpeg",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores in, debitis doloremque deleniti eligendi atque voluptate eius et veniam laudantium libero expedita. Doloremque minus nostrum porro eum esse, aut libero temporibus sequi! Corporis quaerat animi vel consectetur, necessitatibus atque repellat at possimus ullam iusto! Possimus inventore architecto praesentium fugiat eum?"
  }
]

  getAllP(){
    return this.products
  }

  getById(id: number = 0){
    return this.products.find((x)=> x.id == id)
  } 

  AddNEw(newP:any){
    this.products.push(newP)
    console.log(this.products)
  }
}
