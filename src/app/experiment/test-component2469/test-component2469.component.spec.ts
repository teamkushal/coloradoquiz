import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2469Component } from './test-component2469.component';

describe('TestComponent2469Component', () => {
  let component: TestComponent2469Component;
  let fixture: ComponentFixture<TestComponent2469Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2469Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2469Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
