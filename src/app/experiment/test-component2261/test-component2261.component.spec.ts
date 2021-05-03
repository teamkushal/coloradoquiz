import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2261Component } from './test-component2261.component';

describe('TestComponent2261Component', () => {
  let component: TestComponent2261Component;
  let fixture: ComponentFixture<TestComponent2261Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2261Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2261Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
