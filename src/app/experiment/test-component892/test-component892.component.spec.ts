import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent892Component } from './test-component892.component';

describe('TestComponent892Component', () => {
  let component: TestComponent892Component;
  let fixture: ComponentFixture<TestComponent892Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent892Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent892Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
