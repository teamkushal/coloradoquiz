import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3851Component } from './test-component3851.component';

describe('TestComponent3851Component', () => {
  let component: TestComponent3851Component;
  let fixture: ComponentFixture<TestComponent3851Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3851Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3851Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
