import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3344Component } from './test-component3344.component';

describe('TestComponent3344Component', () => {
  let component: TestComponent3344Component;
  let fixture: ComponentFixture<TestComponent3344Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3344Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3344Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
