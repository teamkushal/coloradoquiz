import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent32Component } from './test-component32.component';

describe('TestComponent32Component', () => {
  let component: TestComponent32Component;
  let fixture: ComponentFixture<TestComponent32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent32Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
