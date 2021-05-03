import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1335Component } from './test-component1335.component';

describe('TestComponent1335Component', () => {
  let component: TestComponent1335Component;
  let fixture: ComponentFixture<TestComponent1335Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1335Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1335Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
