import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1171Component } from './test-component1171.component';

describe('TestComponent1171Component', () => {
  let component: TestComponent1171Component;
  let fixture: ComponentFixture<TestComponent1171Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1171Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1171Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
