import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3547Component } from './test-component3547.component';

describe('TestComponent3547Component', () => {
  let component: TestComponent3547Component;
  let fixture: ComponentFixture<TestComponent3547Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3547Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3547Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
