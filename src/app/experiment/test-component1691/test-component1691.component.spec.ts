import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1691Component } from './test-component1691.component';

describe('TestComponent1691Component', () => {
  let component: TestComponent1691Component;
  let fixture: ComponentFixture<TestComponent1691Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1691Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1691Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
