import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3760Component } from './test-component3760.component';

describe('TestComponent3760Component', () => {
  let component: TestComponent3760Component;
  let fixture: ComponentFixture<TestComponent3760Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3760Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3760Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
