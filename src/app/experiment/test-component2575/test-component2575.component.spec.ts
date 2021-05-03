import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2575Component } from './test-component2575.component';

describe('TestComponent2575Component', () => {
  let component: TestComponent2575Component;
  let fixture: ComponentFixture<TestComponent2575Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2575Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2575Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
