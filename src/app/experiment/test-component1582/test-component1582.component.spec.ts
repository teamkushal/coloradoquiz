import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1582Component } from './test-component1582.component';

describe('TestComponent1582Component', () => {
  let component: TestComponent1582Component;
  let fixture: ComponentFixture<TestComponent1582Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1582Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1582Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
