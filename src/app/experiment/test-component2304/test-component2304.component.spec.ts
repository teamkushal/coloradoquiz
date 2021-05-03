import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2304Component } from './test-component2304.component';

describe('TestComponent2304Component', () => {
  let component: TestComponent2304Component;
  let fixture: ComponentFixture<TestComponent2304Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2304Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2304Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
