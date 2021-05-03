import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3105Component } from './test-component3105.component';

describe('TestComponent3105Component', () => {
  let component: TestComponent3105Component;
  let fixture: ComponentFixture<TestComponent3105Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3105Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3105Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
