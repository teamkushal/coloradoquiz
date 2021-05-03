import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1754Component } from './test-component1754.component';

describe('TestComponent1754Component', () => {
  let component: TestComponent1754Component;
  let fixture: ComponentFixture<TestComponent1754Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1754Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1754Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
