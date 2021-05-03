import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent503Component } from './test-component503.component';

describe('TestComponent503Component', () => {
  let component: TestComponent503Component;
  let fixture: ComponentFixture<TestComponent503Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent503Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent503Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
