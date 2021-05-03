import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3759Component } from './test-component3759.component';

describe('TestComponent3759Component', () => {
  let component: TestComponent3759Component;
  let fixture: ComponentFixture<TestComponent3759Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3759Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3759Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
