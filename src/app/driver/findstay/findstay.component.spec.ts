import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindstayComponent } from './findstay.component';

describe('FindstayComponent', () => {
  let component: FindstayComponent;
  let fixture: ComponentFixture<FindstayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindstayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindstayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
