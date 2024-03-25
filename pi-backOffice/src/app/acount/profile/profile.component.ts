import { Component } from '@angular/core';
import { Authentication } from '../../service/authentication.service';
import { environment } from '../../../environments/environment';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  constructor(
    private consumer: Authentication,
    private toastr: ToastrService,
    private router: Router
  ) {}
  userData: any;
  userImage: any;
  isLoading: boolean = false;
  ngOnInit() {
    this.userData = this.consumer.getUserFromLocal;
    this.getUserImage();
  }

  openDialog() {
    const modelDiv = document.getElementById('popup');
    if (modelDiv != null) {
      modelDiv.style.display = 'block';
    }
  }

  onConfirm(image: File) {
    const formData = new FormData();
    if (image) {
      this.isLoading = true;
      formData.append('image', image, image.name);
      this.consumer.updateImage(formData).subscribe({
        next: (response) => {
          localStorage.setItem('user', JSON.stringify(response));
          this.consumer.updateLocalUser(response);
          this.toastr.success('Your account has been updated successfully');
          this.router.navigateByUrl('/profile').then(() => {
            setTimeout(() => {
              location.reload();
              this.getUserImage();
              
            }, 3000);
          });
        },
        error: (error) => {
          this.toastr.error(error.error.message);
        },
        complete: () => {
          this.isLoading = false;
        },
      });
    } else {
      this.toastr.error('No image selected.');
    }
  }
  getUserImage(){
    this.consumer.getUserImage().subscribe({
      next: (response) => {
        this.userImage = URL.createObjectURL(response);
        console.log(this.userImage);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
