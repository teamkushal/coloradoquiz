import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3147Component } from './test-component3147.component';

describe('TestComponent3147Component', () => {
  let component: TestComponent3147Component;
  let fixture: ComponentFixture<TestComponent3147Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3147Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3147Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
