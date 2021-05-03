import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1166Component } from './test-component1166.component';

describe('TestComponent1166Component', () => {
  let component: TestComponent1166Component;
  let fixture: ComponentFixture<TestComponent1166Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1166Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1166Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
