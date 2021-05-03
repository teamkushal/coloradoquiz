import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1684Component } from './test-component1684.component';

describe('TestComponent1684Component', () => {
  let component: TestComponent1684Component;
  let fixture: ComponentFixture<TestComponent1684Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1684Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1684Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
