import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1425Component } from './test-component1425.component';

describe('TestComponent1425Component', () => {
  let component: TestComponent1425Component;
  let fixture: ComponentFixture<TestComponent1425Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1425Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1425Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
