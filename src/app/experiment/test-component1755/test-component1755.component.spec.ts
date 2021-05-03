import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1755Component } from './test-component1755.component';

describe('TestComponent1755Component', () => {
  let component: TestComponent1755Component;
  let fixture: ComponentFixture<TestComponent1755Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1755Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1755Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
