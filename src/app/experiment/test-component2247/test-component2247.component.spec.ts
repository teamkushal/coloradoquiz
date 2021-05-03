import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2247Component } from './test-component2247.component';

describe('TestComponent2247Component', () => {
  let component: TestComponent2247Component;
  let fixture: ComponentFixture<TestComponent2247Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2247Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2247Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
