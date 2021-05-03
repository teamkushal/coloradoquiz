import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1853Component } from './test-component1853.component';

describe('TestComponent1853Component', () => {
  let component: TestComponent1853Component;
  let fixture: ComponentFixture<TestComponent1853Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1853Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1853Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
