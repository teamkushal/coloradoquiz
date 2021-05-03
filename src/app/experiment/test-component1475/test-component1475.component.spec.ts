import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1475Component } from './test-component1475.component';

describe('TestComponent1475Component', () => {
  let component: TestComponent1475Component;
  let fixture: ComponentFixture<TestComponent1475Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1475Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1475Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
