import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookGenresListComponent } from './book-genres-list.component';

describe('BookGenresListComponent', () => {
  let component: BookGenresListComponent;
  let fixture: ComponentFixture<BookGenresListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookGenresListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookGenresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
