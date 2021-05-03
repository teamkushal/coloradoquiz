import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1231Component } from './test-component1231.component';

describe('TestComponent1231Component', () => {
  let component: TestComponent1231Component;
  let fixture: ComponentFixture<TestComponent1231Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1231Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1231Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
