import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1203Component } from './test-component1203.component';

describe('TestComponent1203Component', () => {
  let component: TestComponent1203Component;
  let fixture: ComponentFixture<TestComponent1203Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1203Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1203Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
