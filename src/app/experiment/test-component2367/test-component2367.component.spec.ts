import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2367Component } from './test-component2367.component';

describe('TestComponent2367Component', () => {
  let component: TestComponent2367Component;
  let fixture: ComponentFixture<TestComponent2367Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2367Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2367Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
