import { ComponentFixture, TestBed } from '@angular/core/testing';

import { bodyComponent } from './body.component';

describe('bodyComponent', () => {
  let component: bodyComponent;
  let fixture: ComponentFixture<bodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ bodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(bodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
