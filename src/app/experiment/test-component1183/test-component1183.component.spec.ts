import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1183Component } from './test-component1183.component';

describe('TestComponent1183Component', () => {
  let component: TestComponent1183Component;
  let fixture: ComponentFixture<TestComponent1183Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1183Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1183Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
