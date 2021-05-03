import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2394Component } from './test-component2394.component';

describe('TestComponent2394Component', () => {
  let component: TestComponent2394Component;
  let fixture: ComponentFixture<TestComponent2394Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2394Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2394Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
