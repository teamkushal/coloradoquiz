import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1598Component } from './test-component1598.component';

describe('TestComponent1598Component', () => {
  let component: TestComponent1598Component;
  let fixture: ComponentFixture<TestComponent1598Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1598Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1598Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
