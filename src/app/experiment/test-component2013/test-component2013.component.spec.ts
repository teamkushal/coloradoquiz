import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2013Component } from './test-component2013.component';

describe('TestComponent2013Component', () => {
  let component: TestComponent2013Component;
  let fixture: ComponentFixture<TestComponent2013Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2013Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2013Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
