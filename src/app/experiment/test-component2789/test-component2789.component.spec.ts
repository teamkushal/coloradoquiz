import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2789Component } from './test-component2789.component';

describe('TestComponent2789Component', () => {
  let component: TestComponent2789Component;
  let fixture: ComponentFixture<TestComponent2789Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2789Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2789Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
