import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2453Component } from './test-component2453.component';

describe('TestComponent2453Component', () => {
  let component: TestComponent2453Component;
  let fixture: ComponentFixture<TestComponent2453Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2453Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2453Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
