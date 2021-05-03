import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2615Component } from './test-component2615.component';

describe('TestComponent2615Component', () => {
  let component: TestComponent2615Component;
  let fixture: ComponentFixture<TestComponent2615Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2615Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2615Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
