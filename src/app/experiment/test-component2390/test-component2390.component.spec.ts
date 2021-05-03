import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2390Component } from './test-component2390.component';

describe('TestComponent2390Component', () => {
  let component: TestComponent2390Component;
  let fixture: ComponentFixture<TestComponent2390Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2390Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2390Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
