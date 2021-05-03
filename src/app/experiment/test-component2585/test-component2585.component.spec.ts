import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2585Component } from './test-component2585.component';

describe('TestComponent2585Component', () => {
  let component: TestComponent2585Component;
  let fixture: ComponentFixture<TestComponent2585Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2585Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2585Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
