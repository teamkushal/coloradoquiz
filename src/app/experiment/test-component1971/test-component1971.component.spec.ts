import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1971Component } from './test-component1971.component';

describe('TestComponent1971Component', () => {
  let component: TestComponent1971Component;
  let fixture: ComponentFixture<TestComponent1971Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1971Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1971Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
