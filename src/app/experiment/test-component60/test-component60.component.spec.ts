import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent60Component } from './test-component60.component';

describe('TestComponent60Component', () => {
  let component: TestComponent60Component;
  let fixture: ComponentFixture<TestComponent60Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent60Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent60Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
