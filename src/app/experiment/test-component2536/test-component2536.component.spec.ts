import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2536Component } from './test-component2536.component';

describe('TestComponent2536Component', () => {
  let component: TestComponent2536Component;
  let fixture: ComponentFixture<TestComponent2536Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2536Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2536Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
