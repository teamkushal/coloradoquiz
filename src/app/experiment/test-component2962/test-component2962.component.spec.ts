import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2962Component } from './test-component2962.component';

describe('TestComponent2962Component', () => {
  let component: TestComponent2962Component;
  let fixture: ComponentFixture<TestComponent2962Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2962Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2962Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
