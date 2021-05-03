import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1191Component } from './test-component1191.component';

describe('TestComponent1191Component', () => {
  let component: TestComponent1191Component;
  let fixture: ComponentFixture<TestComponent1191Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1191Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1191Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
