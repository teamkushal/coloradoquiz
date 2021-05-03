import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2726Component } from './test-component2726.component';

describe('TestComponent2726Component', () => {
  let component: TestComponent2726Component;
  let fixture: ComponentFixture<TestComponent2726Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2726Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2726Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
