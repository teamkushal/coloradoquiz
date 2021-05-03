import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2700Component } from './test-component2700.component';

describe('TestComponent2700Component', () => {
  let component: TestComponent2700Component;
  let fixture: ComponentFixture<TestComponent2700Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2700Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2700Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
