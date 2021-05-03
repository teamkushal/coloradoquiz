import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3248Component } from './test-component3248.component';

describe('TestComponent3248Component', () => {
  let component: TestComponent3248Component;
  let fixture: ComponentFixture<TestComponent3248Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3248Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3248Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
