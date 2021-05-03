import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2475Component } from './test-component2475.component';

describe('TestComponent2475Component', () => {
  let component: TestComponent2475Component;
  let fixture: ComponentFixture<TestComponent2475Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2475Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2475Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
