import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1304Component } from './test-component1304.component';

describe('TestComponent1304Component', () => {
  let component: TestComponent1304Component;
  let fixture: ComponentFixture<TestComponent1304Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1304Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1304Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
