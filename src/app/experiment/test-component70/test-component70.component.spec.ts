import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent70Component } from './test-component70.component';

describe('TestComponent70Component', () => {
  let component: TestComponent70Component;
  let fixture: ComponentFixture<TestComponent70Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent70Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent70Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
