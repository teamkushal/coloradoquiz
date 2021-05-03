import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1889Component } from './test-component1889.component';

describe('TestComponent1889Component', () => {
  let component: TestComponent1889Component;
  let fixture: ComponentFixture<TestComponent1889Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1889Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1889Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
