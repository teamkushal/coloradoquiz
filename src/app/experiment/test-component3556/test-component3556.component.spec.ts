import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3556Component } from './test-component3556.component';

describe('TestComponent3556Component', () => {
  let component: TestComponent3556Component;
  let fixture: ComponentFixture<TestComponent3556Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3556Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3556Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
