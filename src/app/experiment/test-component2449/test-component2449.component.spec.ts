import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2449Component } from './test-component2449.component';

describe('TestComponent2449Component', () => {
  let component: TestComponent2449Component;
  let fixture: ComponentFixture<TestComponent2449Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2449Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2449Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
