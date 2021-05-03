import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3932Component } from './test-component3932.component';

describe('TestComponent3932Component', () => {
  let component: TestComponent3932Component;
  let fixture: ComponentFixture<TestComponent3932Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3932Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3932Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
