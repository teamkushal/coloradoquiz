import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent694Component } from './test-component694.component';

describe('TestComponent694Component', () => {
  let component: TestComponent694Component;
  let fixture: ComponentFixture<TestComponent694Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent694Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent694Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
