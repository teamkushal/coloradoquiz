import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1397Component } from './test-component1397.component';

describe('TestComponent1397Component', () => {
  let component: TestComponent1397Component;
  let fixture: ComponentFixture<TestComponent1397Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1397Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1397Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
