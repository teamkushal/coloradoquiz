import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2659Component } from './test-component2659.component';

describe('TestComponent2659Component', () => {
  let component: TestComponent2659Component;
  let fixture: ComponentFixture<TestComponent2659Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2659Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2659Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
