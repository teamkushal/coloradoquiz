import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1862Component } from './test-component1862.component';

describe('TestComponent1862Component', () => {
  let component: TestComponent1862Component;
  let fixture: ComponentFixture<TestComponent1862Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1862Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1862Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
