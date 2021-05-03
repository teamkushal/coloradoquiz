import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent945Component } from './test-component945.component';

describe('TestComponent945Component', () => {
  let component: TestComponent945Component;
  let fixture: ComponentFixture<TestComponent945Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent945Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent945Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
