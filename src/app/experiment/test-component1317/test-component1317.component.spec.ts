import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1317Component } from './test-component1317.component';

describe('TestComponent1317Component', () => {
  let component: TestComponent1317Component;
  let fixture: ComponentFixture<TestComponent1317Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1317Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1317Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
