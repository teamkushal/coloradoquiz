import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2648Component } from './test-component2648.component';

describe('TestComponent2648Component', () => {
  let component: TestComponent2648Component;
  let fixture: ComponentFixture<TestComponent2648Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2648Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2648Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
