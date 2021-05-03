import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1886Component } from './test-component1886.component';

describe('TestComponent1886Component', () => {
  let component: TestComponent1886Component;
  let fixture: ComponentFixture<TestComponent1886Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1886Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1886Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
