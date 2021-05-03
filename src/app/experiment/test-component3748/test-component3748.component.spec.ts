import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3748Component } from './test-component3748.component';

describe('TestComponent3748Component', () => {
  let component: TestComponent3748Component;
  let fixture: ComponentFixture<TestComponent3748Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3748Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3748Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
