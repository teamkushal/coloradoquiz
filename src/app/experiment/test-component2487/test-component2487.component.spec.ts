import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2487Component } from './test-component2487.component';

describe('TestComponent2487Component', () => {
  let component: TestComponent2487Component;
  let fixture: ComponentFixture<TestComponent2487Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2487Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2487Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
