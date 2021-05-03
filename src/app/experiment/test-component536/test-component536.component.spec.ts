import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent536Component } from './test-component536.component';

describe('TestComponent536Component', () => {
  let component: TestComponent536Component;
  let fixture: ComponentFixture<TestComponent536Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent536Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent536Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
