import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1099Component } from './test-component1099.component';

describe('TestComponent1099Component', () => {
  let component: TestComponent1099Component;
  let fixture: ComponentFixture<TestComponent1099Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1099Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1099Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
