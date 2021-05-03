import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3718Component } from './test-component3718.component';

describe('TestComponent3718Component', () => {
  let component: TestComponent3718Component;
  let fixture: ComponentFixture<TestComponent3718Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3718Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3718Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
