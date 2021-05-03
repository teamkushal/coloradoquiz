import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent964Component } from './test-component964.component';

describe('TestComponent964Component', () => {
  let component: TestComponent964Component;
  let fixture: ComponentFixture<TestComponent964Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent964Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent964Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
