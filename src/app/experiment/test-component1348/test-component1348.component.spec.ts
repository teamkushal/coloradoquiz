import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1348Component } from './test-component1348.component';

describe('TestComponent1348Component', () => {
  let component: TestComponent1348Component;
  let fixture: ComponentFixture<TestComponent1348Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1348Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1348Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
