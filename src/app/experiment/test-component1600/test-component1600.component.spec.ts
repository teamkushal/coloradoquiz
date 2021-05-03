import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1600Component } from './test-component1600.component';

describe('TestComponent1600Component', () => {
  let component: TestComponent1600Component;
  let fixture: ComponentFixture<TestComponent1600Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1600Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1600Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
