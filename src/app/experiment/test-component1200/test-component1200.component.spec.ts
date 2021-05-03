import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1200Component } from './test-component1200.component';

describe('TestComponent1200Component', () => {
  let component: TestComponent1200Component;
  let fixture: ComponentFixture<TestComponent1200Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1200Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1200Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
