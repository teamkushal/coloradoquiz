import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2105Component } from './test-component2105.component';

describe('TestComponent2105Component', () => {
  let component: TestComponent2105Component;
  let fixture: ComponentFixture<TestComponent2105Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2105Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2105Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
