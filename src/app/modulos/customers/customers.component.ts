import { Component, OnInit } from '@angular/core';
import { AltioraService } from 'src/app/servicios/altiora.service';
import { Customer } from 'src/app/modelos/Customer';
import { CustomerRequest } from 'src/app/utils/APIRequest';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html',
    styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

    customerDialog: boolean = false;
    customers: Customer[] = [];
    customer!: Customer;
    selectedCustomers: Customer[] = [];
    submitted: boolean = false;

    customerRequestForm = this.formBuilder.group({
        name: ['', [Validators.required]],
        lastName: ['', [Validators.required]]
    });

    constructor(private altioraService: AltioraService, private formBuilder: FormBuilder) { 
        this.getAllCustomers();
    }

    ngOnInit() {
        
    }

    async getAllCustomers() {
        this.customers = await this.altioraService.GetAllCustomers();
        console.log("customers", this.customers)
    }

    openNew() {
        this.customer = {};
        this.submitted = false;
        this.customerDialog = true;
    }

    editProduct(customer: Customer) {
    }

    deleteProduct(customer: Customer) {
    }

    hideDialog() {
    }

    async saveProduct() {
        const newCustomer = new CustomerRequest();
        newCustomer.name = this.customerRequestForm.get("name")?.value;
        newCustomer.lastName = this.customerRequestForm.get("lastName")?.value;

        let customerCreated = (await this.altioraService.CreateCustomer(newCustomer))[0];

        console.log("customerCreated", customerCreated)

    }


}
