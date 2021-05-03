import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3655Component } from './test-component3655.component';

describe('TestComponent3655Component', () => {
  let component: TestComponent3655Component;
  let fixture: ComponentFixture<TestComponent3655Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3655Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3655Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
