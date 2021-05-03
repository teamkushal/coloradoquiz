import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2813Component } from './test-component2813.component';

describe('TestComponent2813Component', () => {
  let component: TestComponent2813Component;
  let fixture: ComponentFixture<TestComponent2813Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2813Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2813Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
