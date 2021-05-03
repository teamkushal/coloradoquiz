import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1673Component } from './test-component1673.component';

describe('TestComponent1673Component', () => {
  let component: TestComponent1673Component;
  let fixture: ComponentFixture<TestComponent1673Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1673Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1673Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
