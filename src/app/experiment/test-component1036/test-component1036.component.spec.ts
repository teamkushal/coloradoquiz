import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1036Component } from './test-component1036.component';

describe('TestComponent1036Component', () => {
  let component: TestComponent1036Component;
  let fixture: ComponentFixture<TestComponent1036Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1036Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1036Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
