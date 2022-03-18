import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/shared/interface/DialogData.interface';
import { user } from 'src/app/shared/model/user.model';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-dialog-elements-dialog',
  templateUrl: './dialog-elements-dialog.component.html',
  styleUrls: ['./dialog-elements-dialog.component.css'],
})
export class DialogElementsDialogComponent implements OnInit {
  currentUserId: number | undefined;
  userFinded: user | undefined;
  constructor(
    public userService: UserService,
    public dialogRef: MatDialogRef<DialogElementsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit(): void {
    this.currentUserId = this.data.userId;
    this.getUser();
  }

  getUser() {
    this.userService.getUserById(this.currentUserId).subscribe((data) => {
      this.userFinded = data;
    });
  }
}
