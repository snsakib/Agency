import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  subscribeForm: FormGroup;

  sendMessage() {}

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.subscribeForm = this.fb.group({
      email: ['', Validators.email, Validators.required ]
    });
  }
}
