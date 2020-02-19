import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IfselectPagesComponent } from './ifselect-pages.component';

describe('IfselectPagesComponent', () => {
  let component: IfselectPagesComponent;
  let fixture: ComponentFixture<IfselectPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IfselectPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IfselectPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
