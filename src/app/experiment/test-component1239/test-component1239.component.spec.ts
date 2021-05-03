import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1239Component } from './test-component1239.component';

describe('TestComponent1239Component', () => {
  let component: TestComponent1239Component;
  let fixture: ComponentFixture<TestComponent1239Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1239Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1239Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
