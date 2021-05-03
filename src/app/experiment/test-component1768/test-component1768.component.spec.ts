import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1768Component } from './test-component1768.component';

describe('TestComponent1768Component', () => {
  let component: TestComponent1768Component;
  let fixture: ComponentFixture<TestComponent1768Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1768Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1768Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
