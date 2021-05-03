import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent261Component } from './test-component261.component';

describe('TestComponent261Component', () => {
  let component: TestComponent261Component;
  let fixture: ComponentFixture<TestComponent261Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent261Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent261Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
