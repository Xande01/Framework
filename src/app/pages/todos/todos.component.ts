import { TodosService } from './todos.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
    

  totalRows!: number;
  pageIndex: number = 0;
  pageSize: number = 5;

  filtro: any = 'todas'

  todos = [];

  displayedColumns: string[] = ['userId', 'id', 'title', 'completed'];  

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    this.getTodos()
  }

  public getTodos() {
    this.todosService.getTodos(this.filtro ,this.pageIndex, this.pageSize).subscribe((res: any) => {
      this.todos = res
    })
    this.todosService.getTodosLength(this.filtro).subscribe((res) => { this.totalRows = res.length })
  }

  proximaPagina() {
    this.pageIndex = this.paginator.pageIndex + 1
    this.pageSize = this.paginator.pageSize       
    this.getTodos()
  }

}
