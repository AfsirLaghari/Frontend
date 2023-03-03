import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Data } from '../data';
import { window } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  constructor(private postService: PostService, private route: Router) {}

  categories = ['goat', 'sheep', 'cow', 'buffaloe', 'camel', 'chicken'];
  genders = ['male', 'female'];

  data = new Data('', '', '', '', '', 0, '', '', '', '');

  file: any;

  cat = false;
  gend = false;

  fun() {
    if (this.data.category == 'chicken') {
      this.cat = true;
    } else {
      this.cat = false;
    }

    if (this.data.gender == 'male') {
      this.gend = true;
    } else {
      this.gend = false;
    }
  }

  selectImage(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.file = file;
      console.log(this.file);
    }
  }
  //---------------------------------------------
  post() {
    let formData = new FormData();
    formData.append('image', this.file);
    formData.append('good', JSON.stringify(this.data));
    this.postService.post(formData).subscribe((data: any) => {
      console.log(data);
      console.log(this.file);
    });

    console.log(this.data);
    console.log(this.file);

    alert('Post Created Successfully!');

    setTimeout(() => {
      this.route.navigate(['/home']);
    }, 2000);
  }
}
