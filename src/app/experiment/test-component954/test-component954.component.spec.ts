import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent954Component } from './test-component954.component';

describe('TestComponent954Component', () => {
  let component: TestComponent954Component;
  let fixture: ComponentFixture<TestComponent954Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent954Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent954Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
