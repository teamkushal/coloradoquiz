import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1144Component } from './test-component1144.component';

describe('TestComponent1144Component', () => {
  let component: TestComponent1144Component;
  let fixture: ComponentFixture<TestComponent1144Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1144Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1144Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
