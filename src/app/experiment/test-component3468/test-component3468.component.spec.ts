import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3468Component } from './test-component3468.component';

describe('TestComponent3468Component', () => {
  let component: TestComponent3468Component;
  let fixture: ComponentFixture<TestComponent3468Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3468Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3468Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
