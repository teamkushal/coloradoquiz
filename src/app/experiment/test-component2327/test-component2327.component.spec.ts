import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2327Component } from './test-component2327.component';

describe('TestComponent2327Component', () => {
  let component: TestComponent2327Component;
  let fixture: ComponentFixture<TestComponent2327Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2327Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2327Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
