import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2837Component } from './test-component2837.component';

describe('TestComponent2837Component', () => {
  let component: TestComponent2837Component;
  let fixture: ComponentFixture<TestComponent2837Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2837Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2837Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
