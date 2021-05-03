import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent859Component } from './test-component859.component';

describe('TestComponent859Component', () => {
  let component: TestComponent859Component;
  let fixture: ComponentFixture<TestComponent859Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent859Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent859Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
