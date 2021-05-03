import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1949Component } from './test-component1949.component';

describe('TestComponent1949Component', () => {
  let component: TestComponent1949Component;
  let fixture: ComponentFixture<TestComponent1949Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1949Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1949Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
