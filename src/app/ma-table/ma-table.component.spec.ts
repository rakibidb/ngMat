
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaTableComponent } from './ma-table.component';

describe('MaTableComponent', () => {
  let component: MaTableComponent;
  let fixture: ComponentFixture<MaTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MaTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
