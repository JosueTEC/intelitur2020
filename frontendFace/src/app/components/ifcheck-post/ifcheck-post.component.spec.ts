import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IFcheckPostComponent } from './ifcheck-post.component';

describe('IFcheckPostComponent', () => {
  let component: IFcheckPostComponent;
  let fixture: ComponentFixture<IFcheckPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IFcheckPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IFcheckPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
