import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent891Component } from './test-component891.component';

describe('TestComponent891Component', () => {
  let component: TestComponent891Component;
  let fixture: ComponentFixture<TestComponent891Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent891Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent891Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
