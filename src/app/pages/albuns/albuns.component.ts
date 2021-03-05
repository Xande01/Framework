import { AlbunsService } from './albuns.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';



@Component({
  selector: 'app-albuns',
  templateUrl: './albuns.component.html',
  styleUrls: ['./albuns.component.css']
})

export class AlbunsComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
   

  totalRows!: number;
  pageIndex: number = 0;
  pageSize: number = 5;

  albuns = [];

  displayedColumns: string[] = ['userId', 'id', 'title'];

  constructor(private albunsService: AlbunsService) { }

  ngOnInit(): void {
    this.getAlbuns()        
  }

  private getAlbuns() {
    this.albunsService.getAlbuns(this.pageIndex, this.pageSize).subscribe((res: any) => {
      this.albuns = res
    })
    this.albunsService.getAlbunsLength().subscribe((res) => { this.totalRows = res.length })
  }
  proximaPagina() {
    this.pageIndex = this.paginator.pageIndex + 1
    this.pageSize = this.paginator.pageSize    
    this.getAlbuns()
  }
}
