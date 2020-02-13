import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IFlistPostsComponent } from './iflist-posts.component';

describe('IFlistPostsComponent', () => {
  let component: IFlistPostsComponent;
  let fixture: ComponentFixture<IFlistPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IFlistPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IFlistPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
