import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent868Component } from './test-component868.component';

describe('TestComponent868Component', () => {
  let component: TestComponent868Component;
  let fixture: ComponentFixture<TestComponent868Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent868Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent868Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
