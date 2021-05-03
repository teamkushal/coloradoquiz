import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1617Component } from './test-component1617.component';

describe('TestComponent1617Component', () => {
  let component: TestComponent1617Component;
  let fixture: ComponentFixture<TestComponent1617Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1617Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1617Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
