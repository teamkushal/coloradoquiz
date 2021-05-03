import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1122Component } from './test-component1122.component';

describe('TestComponent1122Component', () => {
  let component: TestComponent1122Component;
  let fixture: ComponentFixture<TestComponent1122Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1122Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1122Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
