import { PostagensService } from './postagens.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-postagens',
  templateUrl: './postagens.component.html',
  styleUrls: ['./postagens.component.css']
})
export class PostagensComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;  

  totalRows!: number;
  pageIndex: number = 0;
  pageSize: number = 5;

  

  postagens = [];

  displayedColumns: string[] = ['userId', 'id', 'title', 'body'];

  constructor(private postagensService: PostagensService) { }

  ngOnInit(): void {
    this.getPostagens()
  }

  private getPostagens() {
    this.postagensService.getPostagens(this.pageIndex, this.pageSize).subscribe((res: any) => {
      this.postagens = res
    })
    this.postagensService.getPostagensLength().subscribe((res) => { this.totalRows = res.length })
  }
  proximaPagina() {
    this.pageIndex = this.paginator.pageIndex + 1
    this.pageSize = this.paginator.pageSize    
    this.getPostagens()
  }
}
