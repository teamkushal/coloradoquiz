import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1066Component } from './test-component1066.component';

describe('TestComponent1066Component', () => {
  let component: TestComponent1066Component;
  let fixture: ComponentFixture<TestComponent1066Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1066Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1066Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
