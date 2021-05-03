import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3436Component } from './test-component3436.component';

describe('TestComponent3436Component', () => {
  let component: TestComponent3436Component;
  let fixture: ComponentFixture<TestComponent3436Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3436Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3436Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
