import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent647Component } from './test-component647.component';

describe('TestComponent647Component', () => {
  let component: TestComponent647Component;
  let fixture: ComponentFixture<TestComponent647Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent647Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent647Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
