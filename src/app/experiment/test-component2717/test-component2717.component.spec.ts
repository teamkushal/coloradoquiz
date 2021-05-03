import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2717Component } from './test-component2717.component';

describe('TestComponent2717Component', () => {
  let component: TestComponent2717Component;
  let fixture: ComponentFixture<TestComponent2717Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2717Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2717Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
