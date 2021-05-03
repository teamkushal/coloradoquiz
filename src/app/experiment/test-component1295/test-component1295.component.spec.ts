import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1295Component } from './test-component1295.component';

describe('TestComponent1295Component', () => {
  let component: TestComponent1295Component;
  let fixture: ComponentFixture<TestComponent1295Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1295Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1295Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
