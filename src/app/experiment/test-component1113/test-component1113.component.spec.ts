import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1113Component } from './test-component1113.component';

describe('TestComponent1113Component', () => {
  let component: TestComponent1113Component;
  let fixture: ComponentFixture<TestComponent1113Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1113Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1113Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
