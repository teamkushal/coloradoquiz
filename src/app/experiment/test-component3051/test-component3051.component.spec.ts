import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3051Component } from './test-component3051.component';

describe('TestComponent3051Component', () => {
  let component: TestComponent3051Component;
  let fixture: ComponentFixture<TestComponent3051Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3051Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3051Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
