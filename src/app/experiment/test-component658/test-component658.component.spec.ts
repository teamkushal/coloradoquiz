import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent658Component } from './test-component658.component';

describe('TestComponent658Component', () => {
  let component: TestComponent658Component;
  let fixture: ComponentFixture<TestComponent658Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent658Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent658Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
