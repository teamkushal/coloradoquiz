import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent438Component } from './test-component438.component';

describe('TestComponent438Component', () => {
  let component: TestComponent438Component;
  let fixture: ComponentFixture<TestComponent438Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent438Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent438Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
