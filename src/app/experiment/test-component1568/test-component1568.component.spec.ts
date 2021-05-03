import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1568Component } from './test-component1568.component';

describe('TestComponent1568Component', () => {
  let component: TestComponent1568Component;
  let fixture: ComponentFixture<TestComponent1568Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1568Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1568Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
