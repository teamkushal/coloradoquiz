import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3376Component } from './test-component3376.component';

describe('TestComponent3376Component', () => {
  let component: TestComponent3376Component;
  let fixture: ComponentFixture<TestComponent3376Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3376Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3376Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
