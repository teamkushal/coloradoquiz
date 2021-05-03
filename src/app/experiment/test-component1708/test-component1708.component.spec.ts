import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1708Component } from './test-component1708.component';

describe('TestComponent1708Component', () => {
  let component: TestComponent1708Component;
  let fixture: ComponentFixture<TestComponent1708Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1708Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1708Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
