import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoussefComponentComponent } from './youssef-component.component';

describe('YoussefComponentComponent', () => {
  let component: YoussefComponentComponent;
  let fixture: ComponentFixture<YoussefComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoussefComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoussefComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
