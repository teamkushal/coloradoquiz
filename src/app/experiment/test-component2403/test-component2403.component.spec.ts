import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2403Component } from './test-component2403.component';

describe('TestComponent2403Component', () => {
  let component: TestComponent2403Component;
  let fixture: ComponentFixture<TestComponent2403Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2403Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2403Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
