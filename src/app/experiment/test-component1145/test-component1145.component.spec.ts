import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1145Component } from './test-component1145.component';

describe('TestComponent1145Component', () => {
  let component: TestComponent1145Component;
  let fixture: ComponentFixture<TestComponent1145Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1145Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1145Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
