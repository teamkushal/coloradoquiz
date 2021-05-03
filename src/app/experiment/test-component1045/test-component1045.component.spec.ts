import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1045Component } from './test-component1045.component';

describe('TestComponent1045Component', () => {
  let component: TestComponent1045Component;
  let fixture: ComponentFixture<TestComponent1045Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1045Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1045Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
