import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2480Component } from './test-component2480.component';

describe('TestComponent2480Component', () => {
  let component: TestComponent2480Component;
  let fixture: ComponentFixture<TestComponent2480Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2480Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2480Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
