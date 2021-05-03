import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2466Component } from './test-component2466.component';

describe('TestComponent2466Component', () => {
  let component: TestComponent2466Component;
  let fixture: ComponentFixture<TestComponent2466Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2466Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2466Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
