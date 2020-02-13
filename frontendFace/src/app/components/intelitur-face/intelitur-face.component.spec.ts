import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteliturFaceComponent } from './intelitur-face.component';

describe('InteliturFaceComponent', () => {
  let component: InteliturFaceComponent;
  let fixture: ComponentFixture<InteliturFaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteliturFaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteliturFaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
