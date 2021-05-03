import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3206Component } from './test-component3206.component';

describe('TestComponent3206Component', () => {
  let component: TestComponent3206Component;
  let fixture: ComponentFixture<TestComponent3206Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3206Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3206Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
