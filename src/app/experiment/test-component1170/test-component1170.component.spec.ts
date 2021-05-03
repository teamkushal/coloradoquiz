import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1170Component } from './test-component1170.component';

describe('TestComponent1170Component', () => {
  let component: TestComponent1170Component;
  let fixture: ComponentFixture<TestComponent1170Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1170Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1170Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
