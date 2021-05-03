import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3085Component } from './test-component3085.component';

describe('TestComponent3085Component', () => {
  let component: TestComponent3085Component;
  let fixture: ComponentFixture<TestComponent3085Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3085Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3085Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
