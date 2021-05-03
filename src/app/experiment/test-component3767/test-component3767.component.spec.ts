import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3767Component } from './test-component3767.component';

describe('TestComponent3767Component', () => {
  let component: TestComponent3767Component;
  let fixture: ComponentFixture<TestComponent3767Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3767Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3767Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
