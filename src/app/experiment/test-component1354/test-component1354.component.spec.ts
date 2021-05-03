import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1354Component } from './test-component1354.component';

describe('TestComponent1354Component', () => {
  let component: TestComponent1354Component;
  let fixture: ComponentFixture<TestComponent1354Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1354Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1354Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
