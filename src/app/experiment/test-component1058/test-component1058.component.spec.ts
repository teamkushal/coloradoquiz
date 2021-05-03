import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1058Component } from './test-component1058.component';

describe('TestComponent1058Component', () => {
  let component: TestComponent1058Component;
  let fixture: ComponentFixture<TestComponent1058Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1058Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1058Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
