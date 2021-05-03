import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2085Component } from './test-component2085.component';

describe('TestComponent2085Component', () => {
  let component: TestComponent2085Component;
  let fixture: ComponentFixture<TestComponent2085Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2085Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2085Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
