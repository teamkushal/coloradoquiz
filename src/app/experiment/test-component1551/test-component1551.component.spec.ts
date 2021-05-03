import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1551Component } from './test-component1551.component';

describe('TestComponent1551Component', () => {
  let component: TestComponent1551Component;
  let fixture: ComponentFixture<TestComponent1551Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1551Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1551Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
