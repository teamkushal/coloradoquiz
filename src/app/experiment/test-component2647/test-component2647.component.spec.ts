import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2647Component } from './test-component2647.component';

describe('TestComponent2647Component', () => {
  let component: TestComponent2647Component;
  let fixture: ComponentFixture<TestComponent2647Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2647Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2647Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
