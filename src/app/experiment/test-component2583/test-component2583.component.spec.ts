import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2583Component } from './test-component2583.component';

describe('TestComponent2583Component', () => {
  let component: TestComponent2583Component;
  let fixture: ComponentFixture<TestComponent2583Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2583Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2583Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
