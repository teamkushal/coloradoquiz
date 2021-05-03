import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent992Component } from './test-component992.component';

describe('TestComponent992Component', () => {
  let component: TestComponent992Component;
  let fixture: ComponentFixture<TestComponent992Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent992Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent992Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
