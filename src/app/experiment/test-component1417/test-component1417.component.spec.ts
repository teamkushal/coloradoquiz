import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1417Component } from './test-component1417.component';

describe('TestComponent1417Component', () => {
  let component: TestComponent1417Component;
  let fixture: ComponentFixture<TestComponent1417Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1417Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1417Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
