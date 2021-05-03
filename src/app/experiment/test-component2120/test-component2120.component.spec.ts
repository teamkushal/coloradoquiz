import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2120Component } from './test-component2120.component';

describe('TestComponent2120Component', () => {
  let component: TestComponent2120Component;
  let fixture: ComponentFixture<TestComponent2120Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2120Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2120Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
