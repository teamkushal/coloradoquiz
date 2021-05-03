import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1597Component } from './test-component1597.component';

describe('TestComponent1597Component', () => {
  let component: TestComponent1597Component;
  let fixture: ComponentFixture<TestComponent1597Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1597Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1597Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
