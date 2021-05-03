import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent958Component } from './test-component958.component';

describe('TestComponent958Component', () => {
  let component: TestComponent958Component;
  let fixture: ComponentFixture<TestComponent958Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent958Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent958Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
