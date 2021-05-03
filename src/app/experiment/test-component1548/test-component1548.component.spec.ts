import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1548Component } from './test-component1548.component';

describe('TestComponent1548Component', () => {
  let component: TestComponent1548Component;
  let fixture: ComponentFixture<TestComponent1548Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1548Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1548Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
