import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IFcreatePostComponent } from './ifcreate-post.component';

describe('IFcreatePostComponent', () => {
  let component: IFcreatePostComponent;
  let fixture: ComponentFixture<IFcreatePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IFcreatePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IFcreatePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
