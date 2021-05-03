import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3196Component } from './test-component3196.component';

describe('TestComponent3196Component', () => {
  let component: TestComponent3196Component;
  let fixture: ComponentFixture<TestComponent3196Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3196Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3196Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
