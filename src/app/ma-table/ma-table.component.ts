import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { MaTableDataSource } from './ma-table-datasource';

@Component({
  selector: 'app-ma-table',
  templateUrl: './ma-table.component.html',
  styleUrls: ['./ma-table.component.css']
})
export class MaTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MaTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new MaTableDataSource(this.paginator, this.sort);
  }
}
