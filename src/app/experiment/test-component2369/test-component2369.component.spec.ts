import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2369Component } from './test-component2369.component';

describe('TestComponent2369Component', () => {
  let component: TestComponent2369Component;
  let fixture: ComponentFixture<TestComponent2369Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2369Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2369Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
