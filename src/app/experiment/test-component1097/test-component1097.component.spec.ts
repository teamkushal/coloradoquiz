import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1097Component } from './test-component1097.component';

describe('TestComponent1097Component', () => {
  let component: TestComponent1097Component;
  let fixture: ComponentFixture<TestComponent1097Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1097Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1097Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
