import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1570Component } from './test-component1570.component';

describe('TestComponent1570Component', () => {
  let component: TestComponent1570Component;
  let fixture: ComponentFixture<TestComponent1570Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1570Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1570Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
