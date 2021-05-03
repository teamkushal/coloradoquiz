import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3700Component } from './test-component3700.component';

describe('TestComponent3700Component', () => {
  let component: TestComponent3700Component;
  let fixture: ComponentFixture<TestComponent3700Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3700Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3700Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
