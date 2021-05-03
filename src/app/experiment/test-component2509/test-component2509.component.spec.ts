import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2509Component } from './test-component2509.component';

describe('TestComponent2509Component', () => {
  let component: TestComponent2509Component;
  let fixture: ComponentFixture<TestComponent2509Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2509Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2509Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
