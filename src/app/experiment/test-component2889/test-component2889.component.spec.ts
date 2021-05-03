import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2889Component } from './test-component2889.component';

describe('TestComponent2889Component', () => {
  let component: TestComponent2889Component;
  let fixture: ComponentFixture<TestComponent2889Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2889Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2889Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
