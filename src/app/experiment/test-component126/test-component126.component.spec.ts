import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent126Component } from './test-component126.component';

describe('TestComponent126Component', () => {
  let component: TestComponent126Component;
  let fixture: ComponentFixture<TestComponent126Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent126Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent126Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
