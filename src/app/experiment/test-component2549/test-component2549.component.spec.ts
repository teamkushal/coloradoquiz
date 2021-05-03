import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2549Component } from './test-component2549.component';

describe('TestComponent2549Component', () => {
  let component: TestComponent2549Component;
  let fixture: ComponentFixture<TestComponent2549Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2549Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2549Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
