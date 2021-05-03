import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent529Component } from './test-component529.component';

describe('TestComponent529Component', () => {
  let component: TestComponent529Component;
  let fixture: ComponentFixture<TestComponent529Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent529Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent529Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
