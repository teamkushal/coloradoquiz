import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent301Component } from './test-component301.component';

describe('TestComponent301Component', () => {
  let component: TestComponent301Component;
  let fixture: ComponentFixture<TestComponent301Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent301Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent301Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
