import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2386Component } from './test-component2386.component';

describe('TestComponent2386Component', () => {
  let component: TestComponent2386Component;
  let fixture: ComponentFixture<TestComponent2386Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2386Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2386Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
