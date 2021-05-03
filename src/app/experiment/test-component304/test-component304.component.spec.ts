import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent304Component } from './test-component304.component';

describe('TestComponent304Component', () => {
  let component: TestComponent304Component;
  let fixture: ComponentFixture<TestComponent304Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent304Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent304Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
