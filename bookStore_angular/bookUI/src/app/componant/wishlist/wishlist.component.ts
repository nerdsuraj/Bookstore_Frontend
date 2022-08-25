import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishlistitem:any;
  countlist:any;

  constructor(private books:BookService) { }

  ngOnInit(): void {
    this.getwishlist();
  }

  getwishlist(){
    this.books.userwishlist().subscribe((response:any)=>{
      console.log(response);
      this.wishlistitem=response.data.books
      this.wishlistitem.reverse()
      this.countlist=response.data.books.length
      
    })
  }

  removewishlistitem(book: any) {
    this.books.userremovewishlistitem(book.productId).subscribe((response: any) => {
      console.log(response);

    })
  }
}
