import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3323Component } from './test-component3323.component';

describe('TestComponent3323Component', () => {
  let component: TestComponent3323Component;
  let fixture: ComponentFixture<TestComponent3323Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3323Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3323Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
