import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2786Component } from './test-component2786.component';

describe('TestComponent2786Component', () => {
  let component: TestComponent2786Component;
  let fixture: ComponentFixture<TestComponent2786Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2786Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2786Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
