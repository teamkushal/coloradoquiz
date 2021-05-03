import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1116Component } from './test-component1116.component';

describe('TestComponent1116Component', () => {
  let component: TestComponent1116Component;
  let fixture: ComponentFixture<TestComponent1116Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1116Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1116Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
