import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3499Component } from './test-component3499.component';

describe('TestComponent3499Component', () => {
  let component: TestComponent3499Component;
  let fixture: ComponentFixture<TestComponent3499Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3499Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3499Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
