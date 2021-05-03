import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1396Component } from './test-component1396.component';

describe('TestComponent1396Component', () => {
  let component: TestComponent1396Component;
  let fixture: ComponentFixture<TestComponent1396Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1396Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1396Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
