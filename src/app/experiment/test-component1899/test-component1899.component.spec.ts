import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1899Component } from './test-component1899.component';

describe('TestComponent1899Component', () => {
  let component: TestComponent1899Component;
  let fixture: ComponentFixture<TestComponent1899Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1899Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1899Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
