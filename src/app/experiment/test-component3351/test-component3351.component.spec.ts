import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3351Component } from './test-component3351.component';

describe('TestComponent3351Component', () => {
  let component: TestComponent3351Component;
  let fixture: ComponentFixture<TestComponent3351Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3351Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3351Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
