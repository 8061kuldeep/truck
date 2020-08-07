import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoclanewsComponent } from './loclanews.component';

describe('LoclanewsComponent', () => {
  let component: LoclanewsComponent;
  let fixture: ComponentFixture<LoclanewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoclanewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoclanewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
