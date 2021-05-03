import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2250Component } from './test-component2250.component';

describe('TestComponent2250Component', () => {
  let component: TestComponent2250Component;
  let fixture: ComponentFixture<TestComponent2250Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2250Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2250Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
