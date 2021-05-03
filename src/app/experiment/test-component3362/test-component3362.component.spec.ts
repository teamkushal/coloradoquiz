import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3362Component } from './test-component3362.component';

describe('TestComponent3362Component', () => {
  let component: TestComponent3362Component;
  let fixture: ComponentFixture<TestComponent3362Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3362Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3362Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
