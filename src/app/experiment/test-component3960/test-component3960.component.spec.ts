import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3960Component } from './test-component3960.component';

describe('TestComponent3960Component', () => {
  let component: TestComponent3960Component;
  let fixture: ComponentFixture<TestComponent3960Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3960Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3960Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
