import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3936Component } from './test-component3936.component';

describe('TestComponent3936Component', () => {
  let component: TestComponent3936Component;
  let fixture: ComponentFixture<TestComponent3936Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3936Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3936Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
