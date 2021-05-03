import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent549Component } from './test-component549.component';

describe('TestComponent549Component', () => {
  let component: TestComponent549Component;
  let fixture: ComponentFixture<TestComponent549Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent549Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent549Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
