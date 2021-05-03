import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1233Component } from './test-component1233.component';

describe('TestComponent1233Component', () => {
  let component: TestComponent1233Component;
  let fixture: ComponentFixture<TestComponent1233Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1233Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1233Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
