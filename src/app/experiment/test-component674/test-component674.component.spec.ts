import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent674Component } from './test-component674.component';

describe('TestComponent674Component', () => {
  let component: TestComponent674Component;
  let fixture: ComponentFixture<TestComponent674Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent674Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent674Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
