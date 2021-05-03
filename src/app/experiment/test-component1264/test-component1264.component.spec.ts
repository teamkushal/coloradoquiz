import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1264Component } from './test-component1264.component';

describe('TestComponent1264Component', () => {
  let component: TestComponent1264Component;
  let fixture: ComponentFixture<TestComponent1264Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1264Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1264Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
