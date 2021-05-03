import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1102Component } from './test-component1102.component';

describe('TestComponent1102Component', () => {
  let component: TestComponent1102Component;
  let fixture: ComponentFixture<TestComponent1102Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1102Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
