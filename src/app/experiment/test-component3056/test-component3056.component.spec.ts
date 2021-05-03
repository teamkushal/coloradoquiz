import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3056Component } from './test-component3056.component';

describe('TestComponent3056Component', () => {
  let component: TestComponent3056Component;
  let fixture: ComponentFixture<TestComponent3056Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3056Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3056Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
