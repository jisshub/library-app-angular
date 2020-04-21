import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookGenresListEditComponent } from './book-genres-list-edit.component';

describe('BookGenresListEditComponent', () => {
  let component: BookGenresListEditComponent;
  let fixture: ComponentFixture<BookGenresListEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookGenresListEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookGenresListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
