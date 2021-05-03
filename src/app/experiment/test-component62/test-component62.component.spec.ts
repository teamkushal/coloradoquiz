import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent62Component } from './test-component62.component';

describe('TestComponent62Component', () => {
  let component: TestComponent62Component;
  let fixture: ComponentFixture<TestComponent62Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent62Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent62Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
