import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1857Component } from './test-component1857.component';

describe('TestComponent1857Component', () => {
  let component: TestComponent1857Component;
  let fixture: ComponentFixture<TestComponent1857Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1857Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1857Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
