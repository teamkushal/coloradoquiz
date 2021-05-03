import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1584Component } from './test-component1584.component';

describe('TestComponent1584Component', () => {
  let component: TestComponent1584Component;
  let fixture: ComponentFixture<TestComponent1584Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1584Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1584Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
