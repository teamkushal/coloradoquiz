import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1177Component } from './test-component1177.component';

describe('TestComponent1177Component', () => {
  let component: TestComponent1177Component;
  let fixture: ComponentFixture<TestComponent1177Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1177Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1177Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
