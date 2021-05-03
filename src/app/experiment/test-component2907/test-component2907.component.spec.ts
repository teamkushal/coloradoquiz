import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2907Component } from './test-component2907.component';

describe('TestComponent2907Component', () => {
  let component: TestComponent2907Component;
  let fixture: ComponentFixture<TestComponent2907Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2907Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2907Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
