import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent627Component } from './test-component627.component';

describe('TestComponent627Component', () => {
  let component: TestComponent627Component;
  let fixture: ComponentFixture<TestComponent627Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent627Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent627Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
