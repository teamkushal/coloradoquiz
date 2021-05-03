import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent318Component } from './test-component318.component';

describe('TestComponent318Component', () => {
  let component: TestComponent318Component;
  let fixture: ComponentFixture<TestComponent318Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent318Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent318Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
