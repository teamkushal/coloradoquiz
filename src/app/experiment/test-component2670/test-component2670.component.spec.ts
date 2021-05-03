import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2670Component } from './test-component2670.component';

describe('TestComponent2670Component', () => {
  let component: TestComponent2670Component;
  let fixture: ComponentFixture<TestComponent2670Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2670Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2670Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
