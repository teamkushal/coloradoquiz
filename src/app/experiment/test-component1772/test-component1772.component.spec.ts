import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1772Component } from './test-component1772.component';

describe('TestComponent1772Component', () => {
  let component: TestComponent1772Component;
  let fixture: ComponentFixture<TestComponent1772Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1772Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1772Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
