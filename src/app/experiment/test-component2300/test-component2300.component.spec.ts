import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2300Component } from './test-component2300.component';

describe('TestComponent2300Component', () => {
  let component: TestComponent2300Component;
  let fixture: ComponentFixture<TestComponent2300Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2300Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2300Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
