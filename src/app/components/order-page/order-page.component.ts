import { Component, OnInit, ReflectiveInjector } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { delay, map, Observable, tap } from 'rxjs';
import { Book } from 'src/app/models/Book';
import { OrderForm } from 'src/app/models/OrderForm';
import { BooksService } from 'src/app/services/books.service';
import { CanComponentDeactivate } from 'src/app/services/guards/can-deactivate.guard';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss'],
})
export class OrderPageComponent implements OnInit, CanComponentDeactivate {
  orderedBooks$: Observable<Book[]> | undefined;
  loading: boolean = false;
  isFavourite: boolean = false;
  isInCart: boolean = true;
  loadingPlaceholderNum: number = 1;
  orderForm!: FormGroup<OrderForm>;

  constructor(
    private booksService: BooksService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.orderedBooks$ = this.booksService.getBooks().pipe(
      tap(() => (this.loading = true)),
      delay(400),
      map((books) => this.booksService.getSomeBooks(27, 28, books)),
      tap(() => (this.loading = false))
    );

    this.orderForm = new FormGroup<OrderForm>({
      address: new FormControl('', {
        nonNullable: true,
        validators: Validators.required,
      }),
      city: new FormControl('', {
        nonNullable: true,
        validators: Validators.required,
      }),
      country: new FormControl('', {
        nonNullable: true,
        validators: Validators.required,
      }),
    });
  }

  addSingle() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success Message',
      detail: 'Order successfully placed!',
    });
  }

  onSubmit() {
    if (this.orderForm.valid) {
      this.addSingle();
      this.orderForm.reset()
    }
  }

  canDeactivate(): Promise<boolean> | boolean {
    if (!this.orderForm.dirty) return true;
    return new Promise((resolve, _ ) => {
      this.confirmationService.confirm({
        message: 'Do you want to discard the changes and leave this page?',
        accept: () => {
          resolve(true);
        },
        reject: () => {
          resolve(false);
        },
      });
    });
  }
}
