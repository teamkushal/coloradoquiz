import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent45Component } from './test-component45.component';

describe('TestComponent45Component', () => {
  let component: TestComponent45Component;
  let fixture: ComponentFixture<TestComponent45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent45Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
