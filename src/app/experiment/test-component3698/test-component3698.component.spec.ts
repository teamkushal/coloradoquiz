import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3698Component } from './test-component3698.component';

describe('TestComponent3698Component', () => {
  let component: TestComponent3698Component;
  let fixture: ComponentFixture<TestComponent3698Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3698Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3698Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
