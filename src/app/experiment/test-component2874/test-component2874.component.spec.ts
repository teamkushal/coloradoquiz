import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2874Component } from './test-component2874.component';

describe('TestComponent2874Component', () => {
  let component: TestComponent2874Component;
  let fixture: ComponentFixture<TestComponent2874Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2874Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2874Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
