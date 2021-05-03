import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3727Component } from './test-component3727.component';

describe('TestComponent3727Component', () => {
  let component: TestComponent3727Component;
  let fixture: ComponentFixture<TestComponent3727Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3727Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3727Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
