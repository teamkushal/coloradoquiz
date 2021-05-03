import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2841Component } from './test-component2841.component';

describe('TestComponent2841Component', () => {
  let component: TestComponent2841Component;
  let fixture: ComponentFixture<TestComponent2841Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2841Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2841Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
