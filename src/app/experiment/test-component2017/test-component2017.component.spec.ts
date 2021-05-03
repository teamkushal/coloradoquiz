import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2017Component } from './test-component2017.component';

describe('TestComponent2017Component', () => {
  let component: TestComponent2017Component;
  let fixture: ComponentFixture<TestComponent2017Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2017Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
