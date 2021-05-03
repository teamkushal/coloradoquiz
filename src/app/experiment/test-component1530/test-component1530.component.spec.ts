import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1530Component } from './test-component1530.component';

describe('TestComponent1530Component', () => {
  let component: TestComponent1530Component;
  let fixture: ComponentFixture<TestComponent1530Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1530Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1530Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
