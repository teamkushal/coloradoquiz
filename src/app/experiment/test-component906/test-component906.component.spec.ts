import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent906Component } from './test-component906.component';

describe('TestComponent906Component', () => {
  let component: TestComponent906Component;
  let fixture: ComponentFixture<TestComponent906Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent906Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent906Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
