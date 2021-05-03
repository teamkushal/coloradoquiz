import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2127Component } from './test-component2127.component';

describe('TestComponent2127Component', () => {
  let component: TestComponent2127Component;
  let fixture: ComponentFixture<TestComponent2127Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2127Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2127Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
