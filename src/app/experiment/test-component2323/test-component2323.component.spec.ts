import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2323Component } from './test-component2323.component';

describe('TestComponent2323Component', () => {
  let component: TestComponent2323Component;
  let fixture: ComponentFixture<TestComponent2323Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2323Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2323Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
