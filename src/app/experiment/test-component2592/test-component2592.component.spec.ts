import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2592Component } from './test-component2592.component';

describe('TestComponent2592Component', () => {
  let component: TestComponent2592Component;
  let fixture: ComponentFixture<TestComponent2592Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2592Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2592Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
