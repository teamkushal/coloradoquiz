import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1178Component } from './test-component1178.component';

describe('TestComponent1178Component', () => {
  let component: TestComponent1178Component;
  let fixture: ComponentFixture<TestComponent1178Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1178Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1178Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
