import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2007Component } from './test-component2007.component';

describe('TestComponent2007Component', () => {
  let component: TestComponent2007Component;
  let fixture: ComponentFixture<TestComponent2007Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2007Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2007Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
