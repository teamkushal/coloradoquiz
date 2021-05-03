import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent937Component } from './test-component937.component';

describe('TestComponent937Component', () => {
  let component: TestComponent937Component;
  let fixture: ComponentFixture<TestComponent937Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent937Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent937Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
