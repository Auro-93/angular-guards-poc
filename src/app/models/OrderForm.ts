import { FormControl } from "@angular/forms";

export interface OrderForm {
    address: FormControl<string>;
    city: FormControl<string>;
    country: FormControl<string>;
}