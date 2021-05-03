import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent763Component } from './test-component763.component';

describe('TestComponent763Component', () => {
  let component: TestComponent763Component;
  let fixture: ComponentFixture<TestComponent763Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent763Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent763Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
