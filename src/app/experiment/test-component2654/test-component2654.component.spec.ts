import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2654Component } from './test-component2654.component';

describe('TestComponent2654Component', () => {
  let component: TestComponent2654Component;
  let fixture: ComponentFixture<TestComponent2654Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2654Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2654Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
