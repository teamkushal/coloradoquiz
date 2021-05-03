import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2845Component } from './test-component2845.component';

describe('TestComponent2845Component', () => {
  let component: TestComponent2845Component;
  let fixture: ComponentFixture<TestComponent2845Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2845Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2845Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
