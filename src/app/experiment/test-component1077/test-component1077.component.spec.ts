import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1077Component } from './test-component1077.component';

describe('TestComponent1077Component', () => {
  let component: TestComponent1077Component;
  let fixture: ComponentFixture<TestComponent1077Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1077Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1077Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
