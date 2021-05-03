import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2236Component } from './test-component2236.component';

describe('TestComponent2236Component', () => {
  let component: TestComponent2236Component;
  let fixture: ComponentFixture<TestComponent2236Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2236Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2236Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
