import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2435Component } from './test-component2435.component';

describe('TestComponent2435Component', () => {
  let component: TestComponent2435Component;
  let fixture: ComponentFixture<TestComponent2435Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2435Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2435Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
