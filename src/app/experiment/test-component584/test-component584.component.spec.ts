import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent584Component } from './test-component584.component';

describe('TestComponent584Component', () => {
  let component: TestComponent584Component;
  let fixture: ComponentFixture<TestComponent584Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent584Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent584Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
