import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1384Component } from './test-component1384.component';

describe('TestComponent1384Component', () => {
  let component: TestComponent1384Component;
  let fixture: ComponentFixture<TestComponent1384Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1384Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1384Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
